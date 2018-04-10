const Sequelize = require('sequelize')

console.log('opening database connection')

//const db
module.exports = new Sequelize( process.env.DATABASE_URL ||
'postgres://localhost:5432/syndicator'
  , {
    logging: false
  }
)

//module.exports = db

/*
schema design:
products

events

mandatory: title, description, price, original value, location/address, start date, end date

to add: tags for categories? posted boolean?
*/
