# redisgen

This repository generates and inserts prefixed keys to a single redis server, to run it locally you will need to have installed

- Docker
- NodeJS or nvm

## Running it

1. You will need to create a .env file inside the cloned directory of the repository with the variables

- APP_NAME
- CYCLE

Example of content of .env file

```
APP_NAME=simple_prefix_
CYCLE=10
```

The code will iterate for as much cycles as you define for the variable `CYCLE`, in the example case 10 times which means that 10 keys will be inserted to the redis server

2. Run the redis server locally using docker

``` bash
docker run -d -ti -p 6379:6379 redis:alpine
```

3. Then to insert the generated keys with the prefix just run

```
npm install -g yarn
yarn
node index.js
```

Cheers 🎉!