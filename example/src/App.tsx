import React, { useState } from 'react';

import { PhoneCode, TypeValueExpected } from 'react-phone-code';

const App = () => {
  const [value, setValue] = useState<TypeValueExpected>();
  return (
    <div className='container'>
      <PhoneCode value={value} onChange={setValue} />
      {value && (
        <p>
          Se asignó un valor {value.nombre} (+{value.phone_code})
        </p>
      )}
    </div>
  );
};

export default App;
