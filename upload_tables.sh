#!/bin/bash -e
URL=$1
if [ -z "${URL}" ]
then
    URL=http://localhost:3333
fi

cd tables
for table in *
do
    echo -n "Uploading data for $table..."
    for file in ${table}/*.json
    do
	item=`basename ${file} .json`
	echo -n " ${item}"
	curl -s -O /dev/null -H "Content-Type: application/json" -X POST -d @${file} $URL/${table}
    done
    echo "."
done
