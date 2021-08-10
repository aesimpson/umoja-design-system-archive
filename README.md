## Use an Umoja component

This is a general guide to using umoja components. Refer to a component’s README or other documentation for specific details.

To use a umoja component in your code:

1. From your project folder, install the component from npm.
```bash
npm install umoja
# requires node 10 & npm 6 or higher
```
2. Import the component.

In a JavaScript module:

```bash
import 'some-package-name';
```

3. Add the component to your application or component:

```bash
<umoja-component></umoja-component>
```

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.