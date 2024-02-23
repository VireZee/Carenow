# PosgreSQL (pgAdmin 4) [Download][1]
`create a database on pgAdmin 4`
# ExpressJS
`modify the db.js and knexfile.js on "server/db.js", "server/knexfile.js"`
```sh
npm i
```
or (if needed)
```sh
npm i -f
```
then
```sh
npx knex migrate:latest
```
then
```
npm start
```
or
```sh
nodemon server.js
```
# ReactJS
```sh
npm i
```
or (if needed)
```sh
npm i -f
```
then
```
npm start
```
# URL Execute
- to submit or insert `http://localhost:3000/`
- to get all data `http://localhost:5000/api/`
- to get specific data of patient instead of all `http://localhost:3000/api/{patiendId}`

[1]: https://www.postgresql.org/download
