require('dotenv').config()
const env = process.env
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = env
const { pool } = require('pg')
const connectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`

const pool = new Pool ({
  connectionString: connectionString
})

module.exports = { pool }