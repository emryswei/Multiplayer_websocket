const url:string = "wss://localhost:3001"


const server = new WebSocket(url)

server.onopen = () => {
	console.log("someone connected to server")
}

server.onmessage = (event) => {
	console.log('onmessage event',event.data)
}

server.onclose = () => {
	console.log("someone disconnected from server")
}

server.onerror = (event) => {
	console.log('onerror event',event)
}

