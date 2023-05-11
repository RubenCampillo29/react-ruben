import logo from './logo.svg';
import './App.css';
import React, {useState} from'react';
import ListOfGifs from './components/ListOfGifs';
import { Route } from "wouter";



export default function App() {

  return (

    <div className="App">

      <section className="App-header">
        <h1>Ruben APP</h1>
        <a href='/gif/playa'>Gifs de playa</a>
        <a href='/gif/simpson'>Gifs de Simpson</a>
        <a href='/gif/alcohol'>Gifs de buen royo</a>
        <a href='/gif/hamacas'>Gifs de hamacas</a>
      <Route 
      component={ListOfGifs}
      path='/gif/:keyword' />

      </section>

    </div>

  );

}


