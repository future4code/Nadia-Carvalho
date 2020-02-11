import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="app">
      <header>
        <div><a href="index.html"><h2>FutureTube</h2></a></div>
        <div><input type="search" placeholder="Busca"></input>
        </div>
      </header>
      <navbar>
        <ul>
          <li><a href="index.html">Início</a></li>
          <li>Em alta</li>
          <li>Inscrições</li>
          <li>Originais</li>
          <li>Biblioteca</li>
          <li>Histórico</li>
        </ul>
      </navbar>
      <section>
        <article>
          <a href="video1.html"><img src={require("./images/video1.png")} width="100%" /></a>
          <p>Ireland</p>
        </article>
        <article>
          <a href="video2.html"><img src={require("./images/video2.png")} width="100%" /></a>
          <p>Blood Cells</p>
        </article>
        <article>
          <a href="video3.html"><img src={require("./images/video3.png")} width="100%" /></a>
          <p>Inky</p>
        </article>
        <article>
          <img src={require("./images/video4.png")} width="100%" />
          <p>Seaview</p>
        </article>
        <article>
          <img src={require("./images/video5.png")} width="100%" />
          <p>Landscape</p>
        </article>
        <article>
          <img src={require("./images/video6.png")} width="100%" />
          <p>What's up, Doc?</p>
        </article>
        <article>
          <img src={require("./images/video7.png")} width="100%" />
          <p>Skydust</p>
        </article>
        <article>
          <img src={require("./images/video8.png")} width="100%" />
          <p>Rocket</p>
        </article>
      </section>
      <footer>
        <h3>Oi, eu sou o footer! Eu estou aqui porque a Paulinha pediu! =D</h3>
      </footer>

    </div>
  );
}

export default App;
