# bitex-landing

Landing site for Bitex.

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

## Docker

```bash
docker build -t bitex-landing .
docker run --rm -p 8080:80 bitex-landing
```

The container serves the built Vite app through Nginx. The health endpoint is available at `/healthz`.

## Server deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the image, pushes it to GitHub Container Registry, copies `docker-compose.yml` to the server, writes the server `.env`, and restarts the container.

Required GitHub Secrets:

| Secret | Description |
| --- | --- |
| `DEPLOY_HOST` | Server host or IP address |
| `DEPLOY_USER` | SSH user on the server |
| `DEPLOY_SSH_KEY` | Private SSH key with access to the server |
| `DEPLOY_PATH` | Directory on the server, for example `/opt/bitex-landing` |
| `DEPLOY_PORT` | SSH port, optional; defaults to `22` |
| `APP_PORT` | Public port on the server, optional; defaults to `8080` |
| `VITE_SITE_URL` | Public site URL used during build, for example `https://bitex-it.ru` |

Server requirements:

```bash
docker --version
docker compose version
```

If a reverse proxy is used on the server, point it to `127.0.0.1:${APP_PORT}`.
