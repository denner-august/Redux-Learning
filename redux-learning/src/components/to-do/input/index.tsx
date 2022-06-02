import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { addItemList } from "../../../redux/reducerList";

import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function InputValue() {
  const [inputValueChange, setInputValue] = useState("");

  const dispath = useDispatch();

  const listItemName = () => {
    dispath(addItemList(inputValueChange));
  };

  function handleChange() {
    if (inputValueChange === "") {
      return;
    }
    listItemName();
  }

  return (
    <div className={styles.Container}>
      <Input
        minWidth={200}
        w="60%"
        bgColor="#251d35"
        color="white"
        placeholder="De um nome a tarefa"
        onChange={(event: { target: { value: string } }) =>
          setInputValue(event.target.value)
        }
      />

      <Button flex={1} colorScheme="pink" onClick={handleChange}>
        Registrar
      </Button>
    </div>
  );
}
