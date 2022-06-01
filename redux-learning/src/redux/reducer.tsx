import { createSlice } from "@reduxjs/toolkit";

export const ModalConfig = createSlice({
  name: "modal",
  initialState: {
    value: true,
  },
  reducers: {
    openModal: (state: { value: boolean }) => {
      state.value = true;
    },
    CloseModal: (state: { value: boolean }) => {
      state.value = false;
    },
  },
});

export const { openModal, CloseModal } = ModalConfig.actions;

export default ModalConfig.reducer;
