import { configureStore } from "@reduxjs/toolkit";
import userService from "./service/userService";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userService.reducer,
  },
});

export type IState = ReturnType<typeof store.getState>;
export type IDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IState> = useSelector;
export const useAppDispatch = () => useDispatch<IDispatch>();
