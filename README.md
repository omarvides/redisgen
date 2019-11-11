# redisgen

This repository generates and inserts prefixed keys to a single redis server, to run it locally you will need to have installed

- Docker
- NodeJS or nvm

``` bash
docker run -d -ti -p 6379:6379 redis:alpine
```

Then just run

```
npm install -g yarn
yarn
node index.js
```

Cheers 🎉!