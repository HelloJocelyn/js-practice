// JavaScript source code
const express = require('express')
const expressWs = require('express-ws')
const router = express.Router()

expressWs(router)

router.ws('/test', (ws, req) => {
    ws.send('connect successfully')
    let interval
    interval = setInterval(() => {
        if (ws.readyState === ws.OPEN) {
            ws.send(Math.random().toFixed(2))
        } else {
            clearInterval(interval)
        }
    }, 1000)
    ws.on('message', msg => {
        ws.send(msg)
    }
    )
})

module.exports = router