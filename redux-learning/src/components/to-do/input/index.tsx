import styles from "./styles.module.scss";

import { Input, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function InputValue() {
  const [inputValueChange, setInputValue] = useState("");

  return (
    <div className={styles.Container}>
      <Input
        minWidth={200}
        w="60%"
        bgColor="#251d35"
        color="white"
        placeholder="Basic usage"
        onChange={(event: { target: { value: string } }) =>
          setInputValue(event.target.value)
        }
      />

      <Button
        flex={1}
        colorScheme="pink"
        onClick={() => console.log(inputValueChange)}
      >
        Button
      </Button>
    </div>
  );
}
