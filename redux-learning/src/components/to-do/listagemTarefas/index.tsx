import styles from "./styles.module.scss";
export default function ListaAsTarefas() {
  const tarefas = ["notebook", "mouse", "teclado", "monitor", "memoria", "hd"];

  return (
    <div className={styles.Container}>
      <ul>
        {tarefas.map((tarefa) => {
          return (
            <div className={styles.EstiloDaLista}>
              <li key={tarefa}>{tarefa}</li>
              <button onClick={() => console.log(tarefa)}>Excluir</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
