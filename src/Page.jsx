import React from 'react';

import List from './List';
import InputContainer from './InputContainer';

export default function Page() {
  return (
    <div>
      <h1>Restaurants</h1>
      <List />
      <InputContainer />
    </div>
  );
}
