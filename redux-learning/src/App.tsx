import { useEffect } from "react";
import Header from "./components/header/index";
import BackdropExample from "./components/modal";
import ListToDo from "./components/to-do";

import { useSelector, useDispatch } from "react-redux";
import { openModal } from "./redux/reducer";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector(
    (state: { configModal: { value: boolean } }) => state.configModal
  );

  console.log(count.value);

  useEffect(() => {
    setTimeout(() => {
      dispatch(openModal());
    }, 2000);
  }, []);

  return (
    <div>
      <Header />
      <ListToDo />
      <BackdropExample openModal={count.value} />
    </div>
  );
}
