import React, { useState, useReducer, createContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { CartContext } from "./CartContext";

import NavbarComp from "./Component/Functional/NavbarComp";
import HomePage from "./Component/Functional/HomePage";
import About from "./Component/Functional/AboutComp";
import ListComp from "./Component/Class/ListComp";
import TambahComp from "./Component/Class/TambahComp";
import EditComp from "./Component/Class/EditComp";
import ClassComp from "./Component/Hooks/Class/ClassComp";
import HooksComp from "./Component/Hooks/Functional/HooksComp";
import HooksUseEffects from "./Component/Hooks/Functional/HooksUseEffects";
import ProductComp from "./Component/Hooks/Functional/ProductComp";
import HooksReducer from "./Component/Hooks/Functional/HooksReducer";
import Tagihan from "./Component/Hooks/Functional/Tagihan";

export const keranjangContext = createContext();

const initialState = {
  jumlah: 1,
  hargaSatuan: 10000,
  hargaTotal: 10000,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return {
        ...state,
        jumlah: state.jumlah + 1,
        hargaTotal: state.hargaSatuan + state.hargaSatuan * state.jumlah,
      };
    case "kurang":
      return {
        ...state,
        jumlah: state.jumlah - 1,
        hargaTotal: state.hargaSatuan * state.jumlah - state.hargaSatuan,
      };
    default:
      return state;
  }
};

const App = () => {
  const [value, setValue] = useState(0);

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ value, setValue }}>
        <NavbarComp />
        <keranjangContext.Provider
          value={{ keranjangState: count, keranjangDispatch: dispatch }}
        >
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/mahasiswa" component={ListComp}></Route>
            <Route
              exact
              path="/mahasiswa/tambah"
              component={TambahComp}
            ></Route>
            <Route exact path="/mahasiswa/edit" component={EditComp}></Route>
            <Route exact path="/class" component={ClassComp}></Route>
            <Route exact path="/hooks" component={HooksComp}></Route>
            <Route exact path="/useeffects" component={HooksUseEffects}></Route>
            <Route exact path="/product" component={ProductComp}></Route>
            <Route exact path="/reducer" component={HooksReducer}></Route>
            <Route exact path="/tagihan" component={Tagihan}></Route>
          </Switch>
        </keranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
