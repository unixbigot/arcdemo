console.log("post-types lambda starting")
var arc = require('@architect/functions')

console.log("post-types lambda getting db")
var data = require('@architect/data')

console.log("post-types lambda instantiating app wrapper")
var app = data() // reads the local .arc in the current working dictory

console.log("post-types lambda setting up routes")
function route(req, res) {
    console.log("post-types lambda handling request", req)

    app.types.put(req.body, function _put(err,result) {
	console.log("post-types lambda result", err, result)

	if (err) throw err;
	res({json:result})
    })
}

exports.handler = arc.json.post(route)
