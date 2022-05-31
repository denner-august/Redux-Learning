import { createSlice } from "@reduxjs/toolkit";

export const ModalConfig = createSlice({
  name: "modal",
  initialState: {
    value: false,
  },
  reducers: {
    openModal: (state: { value: boolean }) => {
      state.value = true;
      // setModal(true);
    },
    CloseModal: (state: { value: boolean }) => {
      state.value = false;
      // setModal(false);
    },
  },
});

export const { openModal, CloseModal } = ModalConfig.actions;

export default ModalConfig.reducer;
