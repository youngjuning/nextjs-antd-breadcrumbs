# nextjs--antd-breadcrumbs

> A dynamic, highly customizable breadcrumbs component for Next.js

[![NPM](https://img.shields.io/npm/v/nextjs-antd-breadcrumbs.svg)](https://www.npmjs.com/package/nextjs-antd-breadcrumbs)

## Installation

```bash
yarn add nextjs-antd-breadcrumbs
```

## Usage

The component needs to be used within Next.js and won't work in plain React.
It will always display a dynamic Breadcrumb navigation, based on the current path of the Next router.

```tsx
import React from 'react';
import Breadcrumbs from 'nextjs-antd-breadcrumbs';

const Example = () => {
  return <Breadcrumbs rootLabel="Home" omitRootLabel={false}/>;
};
```