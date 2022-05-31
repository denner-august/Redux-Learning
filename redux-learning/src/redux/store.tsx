import { configureStore } from "@reduxjs/toolkit";
import configModal from "./reducer";

export default configureStore({
  reducer: {
    configModal: configModal,
  },
});
