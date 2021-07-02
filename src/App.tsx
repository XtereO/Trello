import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './UI/MainPage/MainPage';
import { Switch,Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from 'react';
import { ListPage } from './UI/ListPage/ListPage';


export const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))
function App() {
  let [isPC,setMode]=useState(true)
  let [height,setHeight]=useState(window.innerHeight)
  let setCurrentMode=(e:UIEvent)=>{
    if (window.innerWidth>760){
      setMode(true)
    }else{
      setMode(false)
    }
    setHeight(window.innerHeight)
  }
  useEffect(()=>{
    window.addEventListener("resize",setCurrentMode)
    if (window.innerWidth>760){
      setMode(true)
    }else{
      setMode(false)
    }
    return (()=>{
      window.removeEventListener("resize",setCurrentMode)
    })
  },[])

  return (
    <div className="">
      <Switch>
        <Route path="/board" render={()=><ListPage height={height} isPC={isPC} /> } />
        <Route path="*" render={()=><MainPage height={height} isPC={isPC} />}/>
      </Switch>
    </div>
  );
}

export default App;
