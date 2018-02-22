console.log("tables lambda starting");
var arc = require('@architect/functions')

console.log("tables lambda getting db");

var db = require('@architect/data/db')

console.log("tables lambda setting up route");

function route(req, res) {
  console.log("tables lambda handling request");
  console.log(JSON.stringify(req, null, 2))
    db.listTables({}, function(err, result) {
	if (err) {
	    console.log(err)
	    res(err)
	}
	else {
	    console.log(result)
	    res({json:result})
	}
    })
}

exports.handler = arc.json.get(route)
