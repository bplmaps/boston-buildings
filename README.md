# Boston buildings viz

### Local development

To develop this app locally:

1. Clone and `cd` into this repository
2. `npm install` at the root of the project (you may have to fiddle with node/npm versions, I think I used v22+)
3. `npm run dev` to run the app at `localhost:5173`

Only commit to the `staging` branch! Then, when we're ready to bring changes to production, we'll merge `staging` into `main`.

### Deploy

This app this set up to automatically deploy via Netlify. Whenever you push something to the `main` branch, the app will redeploy at <https://boston-bulidings.netlify.app>.