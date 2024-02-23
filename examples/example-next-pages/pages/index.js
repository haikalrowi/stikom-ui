import { Heading, Stack } from "@stikom-ui/react";

export default function Home() {
  return (
    <div className="grid h-screen place-items-center">
      <Stack className="items-center">
        <Heading level={1}>STIKOM UI</Heading>
        <Stack direction="row">
          <div className="size-10 rounded-full bg-blue-500" />
          <div className="size-10 rounded-full bg-green-500" />
          <div className="size-10 rounded-full bg-cyan-500" />
          <div className="size-10 rounded-full bg-yellow-500" />
          <div className="size-10 rounded-full bg-red-500" />
        </Stack>
      </Stack>
    </div>
  );
}
