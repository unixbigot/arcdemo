@app
arcdemo

#@domain
#arcdemo.unixbigot.id.au

@html
get /

@json
get /hello
get /tables
get /types
get /types/:typeID
post /types
post /types/:typeID
post /types/:typeID/delete

@tables
types
  typeID *String
  
