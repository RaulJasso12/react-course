import React from "react"; //al importar debemos llamar igual que la libreria
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting"; //para importar un componente
import Product, { Navbar } from "./Product";
import {Button} from './Button'
import { TaskCard } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));
//siempre debe de existir un elemento padre que contenga al resto sde elementos

//llamar a los elementos para mostrarlos en pantalla
root.render(
  <>
    <TaskCard ready={false}/>
  </>
);
