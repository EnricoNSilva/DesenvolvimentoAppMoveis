import { useState, useEffect } from "react";

export default function Lab04() {
  const max = 99;
  const min = 0;

  const [numero, setNumero] = useState(null);
  const [palpite, setPalpite] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState("");

  // Gerando o numero na montagem
  useEffect(() => {
    const valor = Math.floor(Math.random() * (max - min + 1) + min);
    setNumero(valor);
  }, []);

  function tentativa() {
    const chute = Number(palpite);
    if (chute === numero) {
      setMensagem("Parabéns, número correto");
      setStatus("correto");
    } else if (chute > numero) {
      setMensagem("Número grande");
      setStatus("maior");
    } else {
      setMensagem("Número pequeno");
      setStatus("menor");
    }
  }

  // Estilos principais
  const container = {
    width: "320px",
    margin: "40px auto",
    padding: "30px 20px",
    backgroundColor: "#777",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    color: "#fff",
  };

  const inputStyle = {
    width: "80%",
    padding: "6px 8px",
    fontSize: "18px",
    textAlign: "center",
    border: "none",
    outline: "none",
    marginBottom: "10px",
  };

  const buttonStyle = {
    padding: "6px 20px",
    fontSize: "18px",
    border: "none",
    cursor: "pointer",
    marginTop: "5px",
    marginBottom: "15px",
    backgroundColor: "#fff",
  };

  const baseMsg = { padding: "10px 0", color: "#fff", fontWeight: "bold" };

  const msgStyle =
    status === "correto"
      ? { ...baseMsg, backgroundColor: "#2e7d32" }
      : status === "maior"
        ? { ...baseMsg, backgroundColor: "#d32f2f" }
        : status === "menor"
          ? { ...baseMsg, backgroundColor: "#f57c00" }
          : {};

  return (
    <div style={container}>
      {/* Removi o <p> com a resposta para o jogo ter graça, mas se quiser testar é só voltar! */}
      <h2>Adivinhe o número</h2>
      <input
        style={inputStyle}
        placeholder="0 até 99"
        type="number"
        value={palpite}
        onChange={(evento) => setPalpite(evento.target.value)}
      />

      <div>
        <button style={buttonStyle} onClick={tentativa}>
          Clique Aqui
        </button>
      </div>

      {mensagem && <div style={msgStyle}>{mensagem}</div>}
    </div>
  );
}
