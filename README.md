# Elden Ring API Wrapper

## About

A TypeScript wrapper for the Elden Ring API, based on [Elden Ring Fan API](https://docs.eldenring.fanapis.com/), providing information about the game.

## Links

- [Documentation](docs/README.md)
- [Elden Ring Fan API](https://github.com/deliton/eldenring-api)

## Features

- **Intuitive API:** The Elden Ring API Wrapper provides a straightforward interface to interact with the Elden Ring Fan API.
- **Full Documentation:** Every properties and parameter is thoroughly documented, ensuring developers have the information they need.

- **IntelliSense Support:** Enjoy a smooth development experience with IntelliSense support in VS code.

## Installation

```bash
npm install eldenring-api
```

## Usage

```js
import { EldenRing } from eldenring-api;

const eldenRing = new EldenRing();

// async/await
(async () => {
  const boss = await eldenRing.boss("Malenia");
  console.log(boss.healthPoints);
})

// .then
const boss = eldenRing.boss("Malenia");
boss.then((res) => console.log(res.healthPoints))
```

## Contribution

Contributions are welcome! If you find any issues, have feature requests, or want to contribute in any way, feel free to open an issue or submit a pull request.

## License

This Elden Ring API Wrapper is licensed under the [MIT License.](LICENSE)