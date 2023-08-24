import React from "react";
import { Film } from "../types/types";

export const Context = React.createContext<Data>({})

interface Data {
  genre?: string[]
  addNewFilm?: Function
  films?: Film[]
  clone?: Film[]
  searchSelect?: Function
  searchName?: Function
  remove?: Function
  star?: Function
}