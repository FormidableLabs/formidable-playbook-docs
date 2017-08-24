Contributing
============

### Site Development
We use [Builder](https://github.com/FormidableLabs/builder) with the [builder-docs-archetype](https://github.com/FormidableLabs/builder-docs-archetype) to manage our static-site build.

For development, run `yarn start` to serve the application locally. To generate a static build, run `builder run build-static` and a `/build` directory will be created. Do not commit this. You can then run `builder run server-static` to serve the built-site locally.

#### Adding Pages
When adding a new page to `docs/` and `README.md`, be sure to add a reference to it in `src/config.js`. This is so the documentation site can verify that the route exists and can be served.
