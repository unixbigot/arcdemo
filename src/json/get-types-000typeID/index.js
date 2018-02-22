console.log("get-type lambda starting")
var arc = require('@architect/functions')

console.log("get-type lambda getting db")
var data = require('@architect/data')

console.log("get-type lambda instantiating app wrapper")
var app = data()

console.log("get-types lambda setting up routes")
function route(req, res) {
    console.log("get-types lambda handling request", req)

    app.types.get({typeID: req.params.typeID}, function _get(err, result) {
	console.log("get-types lambda result", err, result)
	if (err) throw err;
	res({json:result.values})
    })
}

exports.handler = arc.json.get(route)
