# Stack

`Stack` is a layout component used to group elements together and apply a space between them.

## Usage

```js
import { Stack } from "@stikom-ui/react";
```

```jsx live
<IFrame>
  <Stack>
    <div className="size-10 rounded-md bg-red-500" />
    <div className="size-10 rounded-md bg-blue-500" />
  </Stack>
</IFrame>
```

## Props

### `direction`

```jsx live
<IFrame>
  <Stack>
    <Stack direction="row">
      <div className="size-10 rounded-md bg-red-500" />
      <div className="size-10 rounded-md bg-red-500" />
    </Stack>
    <Stack direction="column">
      <div className="size-10 rounded-md bg-blue-500" />
      <div className="size-10 rounded-md bg-blue-500" />
    </Stack>
  </Stack>
</IFrame>
```

### `spacing`

```jsx live
<IFrame>
  <Stack spacing="2rem">
    <div className="size-10 rounded-md bg-red-500" />
    <div className="size-10 rounded-md bg-blue-500" />
  </Stack>
</IFrame>
```
