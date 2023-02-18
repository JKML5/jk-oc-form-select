# JK OC Form Select

A React component that generates a dropdown list based on the provided data.

## Installation

You can install the package using npm:

```
npm install jk-oc-form-select
```

## Usage

Import the component and render it with the data you want to display:

```
import React from 'react';
import FormSelect from 'jk-oc-form-select';

const data = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const MyComponent = () => (
<FormSelect data={data} />
);
```
