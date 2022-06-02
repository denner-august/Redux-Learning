import { configureStore } from "@reduxjs/toolkit";
import ListConfig from "./reducerList";

export default configureStore({
  reducer: {
    ListConfig: ListConfig,
  },
});
