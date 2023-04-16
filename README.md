# kitra

## Requirements

* Node
* npm

## Setup
Clone the repo and install the dependencies.

```bash
git clone git@github.com:eemsquared/kitra.git
```
```bash
npm install
```

To seed the database run the following command:
```bash
npm run seed
```
_You need to run the command above to populate the database with the initial data._

### To start the express application, run the following:

Using nodemon
```bash
npm run dev
```

Usine node
```bash
npm run start
```
or 
```bash
node index.js
```

Open [http://localhost:3306](http://localhost:3306) and you should see this output:
```json
{"message":"OK!"}
```

## Endpoints

`GET /treasures`
`POST /users`
