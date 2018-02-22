var arc = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({html:`Try asking for /tables, /types or /types/item_type`})
}

exports.handler = arc.html.get(route)
