import styles from "./styles.module.scss";

import { Input, Button, Stack } from "@chakra-ui/react";

export default function InputValue() {
  return (
    <div className={styles.Container}>
      <Input
        minWidth={200}
        w="60%"
        bgColor="#251d35"
        color="white"
        placeholder="Basic usage"
        onChange={(event: { target: { value: string } }) =>
          console.log(event.target.value)
        }
      />

      <Button flex={1} colorScheme="pink">
        Button
      </Button>
    </div>
  );
}
