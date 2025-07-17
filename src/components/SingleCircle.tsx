'use client'

import { useEffect, useRef } from 'react';
import startServer from 'libs/client'

export default function CanvasSingleCircle() {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	function drawCircle() {
		const canvas = canvasRef.current
		if (!canvas) return
		const width = canvas.clientWidth
		const height = canvas.clientHeight
		canvas.width = width
		canvas.height = height

		const ctx = canvas.getContext('2d')
		if (!ctx) return
		ctx.fillStyle = 'red'
		ctx.fillRect(10, 10, 50, 50)
	}

	useEffect(() => {
		drawCircle()
		startServer()
	}, [])

	return (
		<canvas ref={canvasRef} className='w-full h-full'></canvas>
	)
}