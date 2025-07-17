import { WebSocketServer, WebSocket } from 'ws'

const port: number = 3001
const wss = new WebSocketServer({port: port})

wss.on('connection', (ws: WebSocket) => {
    console.log("someone connected to server")
    ws.on('message', (message: Buffer) => {
        console.log('onmessage event', message.toString())
    })
    ws.on('close', (code: number, reason: Buffer) => {
        console.log("someone disconnected from server", code, reason.toString())
    })
    ws.on('error', (error: Error) => {
        console.log('onerror event', error)
    })
    ws.send('hello from server')
})
