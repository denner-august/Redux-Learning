import Header from "./components/header/index";
import BackdropExample from "./components/modal";
import ListToDo from "./components/to-do";

import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector(
    (state: { configModal: { value: boolean } }) => state.configModal
  );

  return (
    <div>
      <Header />
      <ListToDo />
      <BackdropExample openModal={count.value} />
    </div>
  );
}
