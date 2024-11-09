const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketIo(server, {
  cors: {
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log('New client connected')

  socket.on('client1', (message) => {
    console.log(`Received message from client1: ${message}`)
    io.emit('client1', `${message}`)
  })

  socket.on('client2', (message) => {
    console.log(`Received message from client2: ${message}`)
    io.emit('client2', ` ${message}`)
  })

  socket.on('client3', (message) => {
    console.log(`Received message from client3: ${message}`)
    io.emit('client3', `${message}`)
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
})

// Start the server
server.listen(8080, () => {
  console.log('WebSocket server running on http://localhost:8080')
})
