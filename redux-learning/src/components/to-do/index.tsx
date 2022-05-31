import styles from "./styles.module.scss";
import Input from "./input/index";
export default function ListToDo() {
  return (
    <main className={styles.main}>
      <Input />

      <ul className={styles.listCompras}>
        <li>compra no mercado</li>
      </ul>
    </main>
  );
}
