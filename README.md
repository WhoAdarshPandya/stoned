# stoned

> dev mode
> another change

<br/>

> hand crafted react components made with love for your next react project

[![NPM](https://img.shields.io/npm/v/stoned.svg)](https://www.npmjs.com/package/stoned) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save stoned
```

## Usage

```tsx
import { Button } from 'stoned'
import 'stoned/dist/index.css'

export const App = () => {
  return (
    <>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='primary' raised={true} disableRipple={true}>
        Primary
      </Button>
    </>
  )
}
```

## License

MIT © [WhoAdarshPandya](https://github.com/WhoAdarshPandya)
