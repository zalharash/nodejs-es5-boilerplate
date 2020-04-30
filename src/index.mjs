import { foo } from './foo.mjs'

import express from 'express'

const app = express()

app.get('/', (_, res) => {
    res.send(foo())
})

const port = '5500'

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
