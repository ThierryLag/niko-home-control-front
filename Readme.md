# HTML Front based on NIKO Home Control NPM Module

[NPM Module](https://github.com/satblip/niko-home-control)

## Init

You gonna need a config file name `<NODE_ENV value>.json` that is located in `./config`

```json
{
  "niko": {
    "homeControl": {
      "ip": "xxx.xxx.xxx.xxx",
      "port": 8000,
      "timeout": 5000
    }
  }
}

```

## Run

YOu can run the server with [Docker-compose](https://docs.docker.com/compose/) with this one line command:

`docker-compose up`
