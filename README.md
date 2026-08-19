# Outmarket Team Page Prototype

Interactive prototype covering both team-page flows:

- **Team page builder:** [`index.html`](./index.html)
- **Proposal-template configure modal:** [`template.html`](./template.html)

## Run locally

Serve this directory with any static server, then open the relevant URL:

```bash
cd "Team page"
python3 -m http.server 8000
```

- Builder: `http://localhost:8000/`
- Template demo: `http://localhost:8000/template.html`

## Deployment

The GitHub Actions workflow in [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml) deploys this directory to GitHub Pages whenever `main` is updated. The deployed URLs follow the same paths: `/` for the builder and `/template.html` for the template demo.
