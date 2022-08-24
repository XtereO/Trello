import React, { useCallback } from "react";
import "./App.css";
import { MainPage } from "./UI/MainPage/MainPage";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { ListPage } from "./UI/ListPage/ListPage";
import { ListType } from "./Types/Type";
import { useDispatch, useSelector } from "react-redux";
import { setLists } from "./BLL/Reducers/MainReducer";
import { getLists } from "./BLL/Selectors/mainSelector";

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
function App() {
  const [isPC, setMode] = useState(true);
  const [height, setHeight] = useState(window.innerHeight);
  const dispatch = useDispatch();
  let setCurrentMode = useCallback((e: UIEvent) => {
    if (window.innerWidth > 760) {
      setMode(true);
    } else {
      setMode(false);
    }
    setHeight(window.innerHeight);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", setCurrentMode);
    if (window.innerWidth > 760) {
      setMode(true);
    } else {
      setMode(false);
    }
    return () => {
      window.removeEventListener("resize", setCurrentMode);
    };
  }, []);
  const lists = useSelector(getLists);
  useEffect(() => {
    //@ts-ignore
    let dates: ListType[] = JSON.parse(window.localStorage.getItem("dates")) ?? [];
    if (dates) {
      dispatch(setLists(dates));
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("dates", JSON.stringify(lists));
  }, [lists]);

  return (
    <div className="">
      <Switch>
        <Route
          path="/board"
          render={() => <ListPage height={height} isPC={isPC} />}
        />
        <Route
          path="*"
          render={() => <MainPage height={height} isPC={isPC} />}
        />
      </Switch>
    </div>
  );
}

export default App;
