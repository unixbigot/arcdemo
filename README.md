# arcdemo
A simple demo app in the Architect (arc.codes) suite

## Run locally

```
npm run create && npm start # in one terminal
./upload-tables.sh # in another terminal
```

## Run in cloud

```
npm run create
npm run deploy
aws dynamodb put-item --table-name arcdemo-staging-types --item file://tables/types/item_type.item
aws dynamodb get-item --table-name arcdemo-staging-types --key '{"typeID": {"S":"item_type"}}'

# The above works, so why doesn't the below? 
curl -s https://r4af365gga.execute-api.ap-southeast-2.amazonaws.com/staging/types/item_type
```
