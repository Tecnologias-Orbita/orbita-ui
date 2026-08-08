# Orbita UI React

Orbita UI React is a React library that provides a set of components and utilities to build user interfaces. The technologies used are:

- React v19
- Typescript v6
- TailwindCSS v4

## Installation

Before installing the library, it is important to understand that the package is private and stored in the GitHub Packages registry. To install the library, you will need to configure your npm registry to use the GitHub Packages registry.

To do this, you will need to create a new file named `.npmrc` in the root of your project and add the following content:

```bash
@tecnologias-orbita:registry=https://npm.pkg.github.com

//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then you should login into your GitHub account and generate a new classic access token with the `read:packages` scope.Then copy the given token to pass it through env variable.

```bash
GITHUB_TOKEN="your_token" npm install @tecnologias-orbita/orbita-ui-react
```

## Usage

```tsx
import { Btn } from "@tecnologias-orbita/orbita-ui-react";

export default function App() {
  return <Btn>Hello World</Btn>;
}
```

## License

[MIT](https://github.com/Tecnologias-Orbita/orbita-ui/blob/main/LICENSE)
