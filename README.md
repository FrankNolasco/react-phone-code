# react-input-phone-code

> Component to select phone-code

[![NPM](https://img.shields.io/npm/v/react-input-phone-code.svg)](https://www.npmjs.com/package/react-input-phone-code) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-input-phone-code
```

## Usage Basic

> No need to import css in your project.

On Typescript

```ts
import React, { useState } from 'react';

import { PhoneCode, TypeValueExpected } from 'react-phone-code';

const App = () => {
  const [value, setValue] = useState<TypeValueExpected>();
  return (
    <div>
      <PhoneCode value={value} onChange={setValue} />
    </div>
  );
};

export default App;
```

On JavaScript

```js
import React, { useState } from 'react';

import { PhoneCode } from 'react-phone-code';

const App = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <PhoneCode value={value} onChange={setValue} />
    </div>
  );
};

export default App;
```

## Usage With react-hook-form

```js
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { PhoneCode } from 'react-phone-code';

const App = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name='phone'
        render={({ onChange, value }) => (
          <PhoneCode value={value} onChange={onChange} />
        )}
      />
    </form>
  );
};

export default App;
```

## License

MIT © [FrankNolasco](https://github.com/FrankNolasco)
