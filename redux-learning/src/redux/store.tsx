import { configureStore } from "@reduxjs/toolkit";
import configModal from "./reducer";
import ListConfig from "./reducerList";

export default configureStore({
  reducer: {
    configModal: configModal,
    ListConfig: ListConfig,
  },
});
