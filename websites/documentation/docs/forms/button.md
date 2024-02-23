# Button

`Button` component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.

## Usage

```js
import { Button } from "@stikom-ui/react";
```

```jsx live
<IFrame>
  <Button>Button</Button>
</IFrame>
```

## Props

### `size`

```jsx live
<IFrame>
  <Stack direction="row">
    <Button size="xs">xs</Button>
    <Button size="sm">sm</Button>
    <Button size="md">md</Button>
    <Button size="lg">lg</Button>
  </Stack>
</IFrame>
```

### `variant`

```jsx live
<IFrame>
  <Stack direction="row">
    <Button variant="solid">solid</Button>
    <Button variant="outline">outline</Button>
    <Button variant="ghost">ghost</Button>
  </Stack>
</IFrame>
```

### `colorScheme`

```jsx live
<IFrame>
  <Stack direction="row">
    <Button colorScheme="gray">gray</Button>
    <Button colorScheme="blue">blue</Button>
    <Button colorScheme="green">green</Button>
    <Button colorScheme="cyan">cyan</Button>
    <Button colorScheme="yellow">yellow</Button>
    <Button colorScheme="red">red</Button>
  </Stack>
</IFrame>
```
