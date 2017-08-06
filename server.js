const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 8900;
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(`${__dirname}/public/index.html`);
});

let games = {}
let players = []
function createMatrix() {
  return [['','',''],['','',''],['','','']]
}
function createPlayer(data) {
  const {socket,user} = data
  return {
    socketId: socket.id,
    name: user.name,
    type: user.type
  }
}
io.on('connection', socket => {

  socket.on('disconnect', () => {
    players = players.filter(p => p.socketId !== socket.id)
    io.sockets.emit('matrix:state', {players})
  })

  socket.on('game:request', ({user}) => {
    const from = players.filter(p => p.socketId === socket.id).pop()
    const room = `${from.name}:${user.name}`
    socket.join(room)
    socket.broadcast.to(user.socketId).emit('client:game:request', {from})
  })

  socket.on('game:request:accept', player => {
    const user = players.filter(p => p.socketId === socket.id).pop()
    const room = `${player.name}:${user.name}`
    socket.join(room)
    const matrix = createMatrix()
    games[room] = {
      matrix
      ,room
      ,players: {
        from: player
        ,to: user
      }
      ,state: 'accepted'
    }
    io.to(room).emit('game:start', games[room]);
  })

  socket.on('player:register', user => {
    players = players.map(p => {
      if (p.name == user.name) {
        p.socketId = socket.id
      }
      return p
    })
    players.push(createPlayer({socket,user}))
    io.sockets.emit('matrix:state', {players})
  })

  socket.on('player:move', ({move,room}) => {
    const {row,cell} = move
    games[room]['matrix'] = games[room]['matrix'].map((row_cells,row_index) => {
      return row_cells.map((cell_text, cell_index) => {
        if (row_index === row && cell_index === cell) {
          return 'X'
        }
        return cell_text
      })
    })

    io.to(room).emit('game:start', games[room])
  })
})

server.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`Listening on port ${PORT}.`)
});
