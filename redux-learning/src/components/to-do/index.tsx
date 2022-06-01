import styles from "./styles.module.scss";
import Input from "./input/index";
import ListaAsTarefas from "./listagemTarefas";
export default function ListToDo() {
  return (
    <main className={styles.main}>
      <Input />
      <ListaAsTarefas />
    </main>
  );
}
