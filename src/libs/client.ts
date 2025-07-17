const url:string = "ws://localhost:3001"

export default function startServer() {
	const ws = new WebSocket(url	)

	ws.onopen = () => {
		console.log("say hello to server")
	}

	ws.onmessage = (event) => {
		console.log('onmessage event -->',event.data)
	}

	ws.onclose = () => {
		console.log("say bye to server")
	}

	ws.onerror = (event) => {
		console.log('onerror event',event)
	}
}