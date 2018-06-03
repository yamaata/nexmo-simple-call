# Nexmo Simple Call
Simple Call App powered by Nexmo.

## Requirement
* Nexmo Account
* ngrok
* Docker

## Install
### ngrok
Run ngrok.

```bash
ngrok http 1080
```

### Nexmo Account
Create account if you don't have.  
[Nexmo Sign Up](https://dashboard.nexmo.com/sign-up)

### Nexmo Application
1. Login to the console.
1. Select `Voice | Create an Application` from left menu bar.
1. Enter friendly name in `Application name`.
1. Enter `https://foobar.ngrok.io/event` in `Event URL`.
1. Click `Generate public/private key pair` and download `private.key`.
1. Click `Create Application` button.

### Setting
1. Fork and clone this repository.
1. Move to base directory.
1. Copy environment file.

    ```bash
    copy .env.example .env
    ```

1. Set the following variables in `.env`.
* API_KEY
* API_SECRET
* APPLICATION_ID
* PRIVATE_KEY_PATH
* TO_NUMBER
* NODE_ENV
* DOMAIN

### Deploy
Deploy awesome application!!

```bash
docker-compose up
```

## Contribution
Contributions are welcome and generally accepted.

## Licence
MIT
