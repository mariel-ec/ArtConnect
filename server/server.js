
const express = require('express')
const PORT = 8000



const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

.get('/', (req, res) => {
    res.status(200).json({status: 200, message: "HellO!"});
})

// app.listen(PORT, () => {
//   console.log(`Example app listening on PORT ${PORT}`)
// })

// ( .post, .patch etc )

.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})