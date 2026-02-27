import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// importar os arquivos dos seus labs conforme for criando
import Lab01 from "./labs/lab1.jsx";
import Lab02 from "./labs/lab2.jsx";
import Lab03 from "./labs/lab3.jsx";
import Lab04 from "./labs/lab4.jsx";

function Home() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        lineHeight: "1.6",
      }}
    >
      <h1
        style={{
          borderBottom: "2px solid #ccc",
          paddingBottom: "10px",
          color: "#f9f9f9",
        }}
      >
        Repositório de Laboratórios - React
      </h1>
      <p style={{ fontSize: "18px", color: "#f9f9f9" }}>
        Projetos desenvolvidos para a disciplina de Desenvolvimento de
        Aplicativos Móveis.
      </p>
      <p style={{ color: "#f9f9f9" }}>
        Aqui você encontra todas as práticas desenvolvidas em React, organizadas
        de forma interativa. Utilize o menu superior para navegar ou confira o
        resumo de cada projeto abaixo:
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Link to="/lab01" style={{ margin: "0 0 10px 0", color: "#2c3e50" }}>
            🚀 Lab 01: ECMAScript 6
          </Link>
          <p style={{ margin: "0", color: "#555" }}>
            Exercícios focados na sintaxe moderna do JavaScript, incluindo
            classes, arrow functions e manipulação de escopo.{" "}
            <em>(Saída via console)</em>.
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Link to="/lab02" style={{ margin: "0 0 10px 0", color: "#2c3e50" }}>
            🌐 Lab 02: Página Web em JSX
          </Link>
          <p style={{ margin: "0", color: "#555" }}>
            Conversão de uma página HTML e CSS tradicional para componentes
            React, utilizando estilização via objetos JavaScript (CSS-in-JS).
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Link to="/lab03" style={{ margin: "0 0 10px 0", color: "#2c3e50" }}>
            🧮 Lab 03: Calculadora
          </Link>
          <p style={{ margin: "0", color: "#555" }}>
            Implementação de uma calculadora funcional utilizando Componentes de
            Classe e gerenciamento de estado (State).
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Link to="/lab04" style={{ margin: "0 0 10px 0", color: "#2c3e50" }}>
            🎲 Lab 04: Jogo de Adivinhação
          </Link>
          <p style={{ margin: "0", color: "#555" }}>
            Jogo interativo utilizando Componentes Funcionais e Hooks (useState
            e useEffect) para gerenciar o ciclo de vida e a lógica.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          padding: "15px 30px",
          backgroundColor: "#2c3e50",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Link
          to="/"
          className="nav-link"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
            marginRight: "auto",
          }}
        >
          🏠 Início
        </Link>
        <Link
          to="/lab01"
          className="nav-link"
          style={{ textDecoration: "none" }}
        >
          Lab 01
        </Link>
        <Link
          to="/lab02"
          className="nav-link"
          style={{ textDecoration: "none" }}
        >
          Lab 02
        </Link>
        <Link
          to="/lab03"
          className="nav-link"
          style={{ textDecoration: "none" }}
        >
          Lab 03
        </Link>
        <Link
          to="/lab04"
          className="nav-link"
          style={{ textDecoration: "none" }}
        >
          Lab 04
        </Link>
      </nav>

      {/* ÁREA ONDE OS COMPONENTES SERÃO RENDERIZADOS */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lab01" element={<Lab01 />} />
          <Route path="/lab02" element={<Lab02 />} />
          <Route path="/lab03" element={<Lab03 />} />
          <Route path="/lab04" element={<Lab04 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
