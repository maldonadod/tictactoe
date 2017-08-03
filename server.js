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

let players = []
let matrix = [['','',''],['','',''],['','','']]

io.on('connection', socket => {

  socket.on('disconnect', () => {
    players = players.filter(p => p.socketId !== socket.id)
    io.sockets.emit('matrix:state', {matrix,players})
  })

  socket.on('player:register', user => {

    players = players.map(p => {
      if (p.name == user.name) {
        p.socketId = socket.id
      }
      return p
    })

    players.push({
      socketId: socket.id,
      name: user.name,
      type: players.length === 0 ? 'X' : 'O'
    })

    io.sockets.emit('matrix:state', {matrix,players})
  })

  socket.on('player:move', ({row,cell}) => {

    const p = players.filter(p => p.socketId === socket.id).pop()
    const type = p.type

    matrix = matrix.map((row_cells,row_index) => {
      return row_cells.map((cell_text, cell_index) => {
        if (row_index === row && cell_index === cell) {
          return type
        }
        return cell_text
      })
    })

    io.sockets.emit('matrix:state', {matrix})
  })
})

server.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`Listening on port ${PORT}.`)
});
