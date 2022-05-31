import { Input, Button } from "@chakra-ui/react";

export default function InputValue() {
  return (
    <div className="ContentMain">
      <Input
        w="40%"
        bgColor="#251d35"
        color="white"
        placeholder="Basic usage"
        onChange={(event: { target: { value: string } }) =>
          console.log(event.target.value)
        }
      />

      <Button colorScheme="pink">Button</Button>
    </div>
  );
}
