# Card

`Card` is a flexible component used to group and display content in a clear and concise format.

## Usage

```js
import { Card, CardHeader, CardBody, CardFooter } from "@stikom-ui/react";
```

```jsx live
<IFrame>
  <Card>
    <CardHeader>Card Header</CardHeader>
    <CardBody>Card Body</CardBody>
    <CardFooter>Card Footer</CardFooter>
  </Card>
</IFrame>
```

```jsx live
<IFrame>
  <Card className="max-w-sm">
    <CardBody>
      <Stack>
        <div className="aspect-video w-64 rounded-md bg-blue-100 md:w-96" />
        <Heading level={2}>Lorem, ipsum.</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </Stack>
    </CardBody>
    <CardFooter>
      <Button>Lorem</Button>
    </CardFooter>
  </Card>
</IFrame>
```

```jsx live
<IFrame>
  <Card>
    <Stack direction="row">
      <div className="aspect-video min-w-64 flex-1 self-center rounded-md bg-blue-100 md:w-96" />
      <Stack>
        <CardBody>
          <Heading level={2}>Lorem, ipsum.</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
        </CardBody>
        <CardFooter>
          <Button>Lorem</Button>
        </CardFooter>
      </Stack>
    </Stack>
  </Card>
</IFrame>
```
