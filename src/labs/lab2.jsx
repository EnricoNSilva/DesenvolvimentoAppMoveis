import { Component } from "react";

const styles = {
  body: {
    backgroundColor: "lightgray",
  },
  textosIntrod: {
    color: "indigo",
    textAlign: "center",
    fontSize: "20pt",
    fontFamily: "sans-serif",
  },
  h2: {
    textAlign: "center",
    fontSize: "20pt",
  },
  videoMapa: {
    textAlign: "center",
  },
  ytAndMaps: {
    display: "inline-block",
  },
  table: {
    marginLeft: "40%",
    textAlign: "center",
    borderStyle: "dashed",
    borderColor: "red",
  },
  td: {
    border: "solid 1pt red",
  },
  nome: {
    color: "red",
  },
  email: {
    color: "red",
  },
  consulta: {
    backgroundColor: "yellow",
    marginLeft: "35%",
    marginRight: "35%",
  },
  a: {
    color: "darkred",
  },
  topo: {
    backgroundColor: "bisque",
    border: "solid 2pt darkblue",
    height: "150pt",
  },
  titulo: {
    textAlign: "center",
    color: "darkgreen",
    fontSize: "36pt",
    marginTop: "50pt",
    paddingTop: "20pt", // Adicionado um pequeno padding para o texto não colar no topo
  },
  links: {
    backgroundColor: "skyblue",
    height: "40pt",
    position: "relative", // Ajustado para os links absolutos ficarem contidos aqui
  },
  home: {
    position: "absolute",
    top: "10pt",
    left: "100pt",
    cursor: "pointer",
  },
  livrosLink: {
    position: "absolute",
    top: "10pt",
    left: "250pt",
    cursor: "pointer",
  },
  videosLink: {
    position: "absolute",
    top: "10pt",
    left: "400pt",
    cursor: "pointer",
  },
  contatosLink: {
    position: "absolute",
    top: "10pt",
    left: "550pt",
    cursor: "pointer",
  },
  livros: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
  },
  livroImg: {
    margin: 0,
  },
  footer: {
    backgroundColor: "bisque",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 40px",
    marginTop: "20px",
  },
  footerP: {
    fontFamily: "Comic Sans MS",
    fontSize: "15pt",
    lineHeight: "normal",
    textAlign: "center",
    margin: 0,
    flex: 1,
  },
  footerImg: {
    width: "80pt",
    height: "80pt",
  },
};

export default class Lab02 extends Component {
  render() {
    return (
      /* Substituímos o fragmento <> por uma div que aplica o fundo apenas neste laboratório */
      <div
        style={{
          backgroundColor: styles.body.backgroundColor,
          minHeight: "100vh",
          paddingBottom: "20px",
        }}
      >
        <div className="topo" style={styles.topo}>
          <h1 id="titulo" style={styles.titulo}>
            APRENDENDO REACT PARA DESENVOLVIMENTO WEB
          </h1>
        </div>

        <div className="links" style={styles.links}>
          <a id="HOME" href="#topo" style={styles.home}>
            HOME
          </a>
          <a id="livros" href="#livros_sec" style={styles.livrosLink}>
            LIVROS
          </a>
          <a id="videos" href="#videos_sec" style={styles.videosLink}>
            VÍDEOS
          </a>
          <a id="contatos" href="#contatos_sec" style={styles.contatosLink}>
            CONTATOS
          </a>
        </div>

        <div className="introd" id="topo">
          <h2 style={styles.h2}>Introdução</h2>
        </div>

        <div className="textos_introd" style={styles.textosIntrod}>
          <p>
            Com o React, você cria interfaces organizadas em componentes
            reutilizáveis, que controlam tanto a exibição quanto o comportamento
            da aplicação. Ele permite atualizar elementos de forma dinâmica, sem
            recarregar a página inteira, além de facilitar a aplicação de
            estilos, animações e recursos interativos de maneira escalável.
          </p>
          <p>
            O React é uma das bibliotecas mais populares do ecossistema
            JavaScript e tornou-se referência no desenvolvimento de interfaces
            modernas. Sua principal força está na criação de componentes
            reutilizáveis, que tornam o código mais organizado e facilitam a
            construção de aplicações escaláveis e de fácil manutenção.
          </p>
        </div>

        <h2 style={styles.h2} id="livros_sec">
          Livros
        </h2>
        <div className="livros" style={styles.livros}>
          <img
            id="livro1"
            style={styles.livroImg}
            src="https://img.freepik.com/fotos-gratis/variedade-criativa-para-o-dia-mundial-do-livro_23-2148883759.jpg?semt=ais_user_personalization&w=740&q=80"
            alt="livro 1"
            height="400"
            width="300"
          />
          <img
            id="livro2"
            style={styles.livroImg}
            src="https://img.freepik.com/fotos-gratis/variedade-criativa-para-o-dia-mundial-do-livro_23-2148883759.jpg?semt=ais_user_personalization&w=740&q=80"
            alt="livro 2"
            height="400"
            width="300"
          />
          <img
            id="livro3"
            style={styles.livroImg}
            src="https://img.freepik.com/fotos-gratis/variedade-criativa-para-o-dia-mundial-do-livro_23-2148883759.jpg?semt=ais_user_personalization&w=740&q=80"
            alt="livro 3"
            height="400"
            width="300"
          />
        </div>

        <h2 style={styles.h2} id="videos_sec">
          Aprenda REACT na FEI.
        </h2>
        <div className="video-mapa" style={styles.videoMapa}>
          <iframe
            id="yt"
            width="275"
            height="300"
            src="https://www.youtube.com/embed/4MHAOPxcnsQ?si=iJSlsOO54sShBOhH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={styles.ytAndMaps}
          ></iframe>
        </div>

        <div className="video-mapa" style={styles.videoMapa}>
          <iframe
            id="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.6486960843386!2d-46.5842688132268!3d-23.724236212631272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4158ef9c7c05%3A0x776b798985695f52!2sFEI%20-%20Campus%20S%C3%A3o%20Bernardo%20do%20Campo!5e0!3m2!1spt-BR!2sbr!4v1725389567083!5m2!1spt-BR!2sbr"
            width="275"
            height="300"
            style={{ ...styles.ytAndMaps, border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <h2 style={styles.h2} id="contatos_sec">
          Contatos
        </h2>
        <table style={styles.table}>
          <tbody>
            <tr>
              <td id="nome" style={{ ...styles.td, ...styles.nome }}>
                Nome
              </td>
              <td id="email" style={{ ...styles.td, ...styles.email }}>
                email
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Prof. Dr. Isaac Jesus da Silva</td>
              <td style={styles.td}>isaacjesus@fei.edu.br</td>
            </tr>
          </tbody>
        </table>

        <br />
        <br />

        <div className="consulta" style={styles.consulta}>
          <p>Sites para consulta: </p>
          <ul>
            <li>
              REACT -
              <a href="https://www.w3schools.com/react/" style={styles.a}>
                {" "}
                https://www.w3schools.com/react/
              </a>
            </li>
            <li>
              HTML -
              <a href="https://www.w3schools.com/html/" style={styles.a}>
                {" "}
                https://www.w3schools.com/html/
              </a>
            </li>
            <li>
              CSS -
              <a href="https://www.w3schools.com/css/" style={styles.a}>
                {" "}
                https://www.w3schools.com/css/
              </a>
            </li>
            <li>
              JavaScript -
              <a href="https://www.w3schools.com/js/" style={styles.a}>
                {" "}
                https://www.w3schools.com/js/
              </a>
            </li>
          </ul>
        </div>

        <footer style={styles.footer}>
          <img
            className="imghtml"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
            alt="html img"
            style={styles.footerImg}
          />
          <p style={styles.footerP}>Desejamos um excelente semestre a todos.</p>
          <img
            className="imgcss"
            src="https://static.cdnlogo.com/logos/c/18/css.svg"
            alt="css img"
            style={styles.footerImg}
          />
        </footer>
      </div>
    );
  }
}
