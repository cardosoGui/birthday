import React, { Component } from "react";
import "./App.css";
import Typing from "react-typing-animation";
import perfil from "./imgs/leidi.jpg";

import "../node_modules/video-react/dist/video-react.css"; // import c

import { Player } from "video-react";

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: "",
      slide: undefined,
      doubleClick: undefined,
      messageNo: undefined
    };
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.name !== "" ? <h1>{this.state.name}</h1> : ""}
          <Typing>
            <span>Olá meu nome é Bob Robô</span>
            <br />
            <br />
            <Typing.Delay ms={2000} />
            <span>Qual é o seu nome?</span>
            <br />
            <br />
            <Typing.Delay ms={2000} />
            <span>Você quer digitar não é?</span>
            <Typing.Delay ms={2000} />
            <br />
            <br />
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />

            {this.state.name.toLocaleLowerCase() === "leidiana" ? (
              <Typing>
                <Typing.Delay ms={2000} />

                <div>
                  <a href="#slide">Começar</a>
                </div>
              </Typing>
            ) : (
              ""
            )}
          </Typing>
        </header>
        <body className="App-header">
          <div id="slide">
            <Typing>
              <span>
                <Typing.Delay ms={2000} />
                Bom, como vc já teve ter percebido, eu sou uma inteligência
                artificial genuína e elegante.
                <br /> <br />
                <Typing.Delay ms={2000} />
                só não sou tão perfeito quanto meu criador ;) <br /> <br />
                <Typing.Delay ms={2000} />
                Eu fui programado com um algoritmo único, capaz de fazer coisas
                incríveis, por isso eu tenho um segredo para lhe contar.
                <br /> <br />
                <Typing.Delay ms={2000} /> <br /> <br />
                Ah, você deseja saber qual é o segredo?
              </span>
              <button
                onClick={() => {
                  this.setState({ slide: true });
                }}
                onDoubleClick={() => {
                  this.setState({ doubleClick: true });
                }}
              >
                Sim
              </button>
              <button
                onClick={() => {
                  this.setState({ messageNo: true });
                }}
              >
                Nao
              </button>
              <br />
              {this.state.messageNo ? (
                <div>
                  <Typing>
                    <Typing.Delay ms={2000} />
                    <span>Nao seja sem graca, clique em SIM !!!</span>
                    <br />
                  </Typing>
                </div>
              ) : (
                ""
              )}
              {this.state.slide === true ? (
                <div>
                  <Typing>
                    <Typing.Delay ms={2000} />
                    <span>
                      clicou em sim! ai siiiiim, clique duas vezes agora, você
                      consegue?
                    </span>
                    <br />
                  </Typing>
                  {this.state.doubleClick ? (
                    <Typing>
                      <Typing.Delay ms={2000} />
                      <span>Uau, você é mesmo incrivel!!!</span>
                      <br />
                      <Typing.Delay ms={2000} />
                      <span>
                        Bom eu estava apenas testando meus inputs `Kkkkk
                      </span>
                      <div>
                        <a href="#slide2">Começar</a>
                      </div>
                    </Typing>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
            </Typing>
          </div>
        </body>
        <header className="App-header" id="slide2">
          <div>
            <img src={perfil} className="App-logo" alt="logo" />
            <br />
            <h3>{`${this.state.name} Silva Sauro ;)`}</h3>
          </div>
        </header>
        <header className="App-header">
          <div style={{ width: "30em" }}>
            <Player
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
