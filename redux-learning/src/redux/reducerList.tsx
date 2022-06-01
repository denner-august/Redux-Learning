import { createSlice } from "@reduxjs/toolkit";

interface listProps {
  payload: string;
}

export const ListConfig = createSlice({
  name: "list",
  initialState: {
    tarefas: [],
  },

  reducers: {
    addItemList: (state: any, { payload }: listProps) => {
      return {
        ...state,
        tarefas: [...state.tarefas, payload],
      };
    },

    removeItemList: (state: any, { payload }: listProps) => {
      return {
        ...state,
        tarefas: state.tarefas.filter((tarefa: string) => tarefa !== payload),
      };
    },
  },
});

export const { addItemList, removeItemList } = ListConfig.actions;

export default ListConfig.reducer;
