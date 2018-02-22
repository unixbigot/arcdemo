console.log("types lambda starting")
var arc = require('@architect/functions')

console.log("types lambda getting db")
var data = require('@architect/data')

console.log("types lambda instantiating app wrapper")
var app = data()

console.log("types lambda setting up routes")
function route(req, res) {

    console.log("types lambda handling request", req)

    app.types.scan({}, function _scan(err, result) {
	console.log("types lambda result", err, result)
	if (err) throw err;
 	res({json:result.Items.map(item=>{return item.typeID})})
	//res({json:result.map(item=>{item.typeID})})

    })
    
}

exports.handler = arc.json.get(route)
