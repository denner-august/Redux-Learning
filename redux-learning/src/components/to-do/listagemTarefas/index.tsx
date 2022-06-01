import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeItemList } from "../../../redux/reducerList";

export default function ListaAsTarefas() {
  const arrayList = useSelector(
    (state: { ListConfig: { tarefas: string[] } }) => state.ListConfig.tarefas
  );

  const dispath = useDispatch();

  return (
    <div className={styles.Container}>
      <ul>
        {arrayList.map((tarefa) => {
          return (
            <div key={tarefa} className={styles.EstiloDaLista}>
              <li>{tarefa}</li>
              <button
                onClick={() => {
                  dispath(removeItemList(tarefa));
                }}
              >
                Excluir
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
