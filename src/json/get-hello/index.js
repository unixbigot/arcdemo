var arc = require('@architect/functions')
console.log("hello world starting");

function route(req, res) {
  console.log("hello world running");
  console.log(JSON.stringify(req, null, 2))
  res({
    json: {msg:`hello world`}
  })
}

exports.handler = arc.json.get(route)
