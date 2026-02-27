import { useEffect } from "react";

export default function Lab01() {
  useEffect(() => {
    console.log("=== Resultados do Lab 01 (ECMAScript 6) ===");

    // Exercício 1: Refatoração para Classe ES6
    class VideoGame {
      constructor(marca, nControles, tipoMidia) {
        this.marca = marca;
        this.nControles = nControles;
        this.tipoMidia = tipoMidia;
        this.ligado = false; // Novo atributo
      }

      ligar(estado) {
        this.ligado = estado;
        console.log(
          `O videogame da ${this.marca} está ${estado ? "ligado" : "desligado"}.`,
        );
      }

      jogar() {
        if (this.ligado) {
          console.log("Executando o jogo...");
        } else {
          console.log("Erro: Precisa ligar o videogame primeiro!");
        }
      }

      salvarJogo() {
        console.log(`Progresso salvo na mídia: ${this.tipoMidia}`); 
      }
    }

    const playstation = new VideoGame("sony", "2", "dvd");
    console.log("Instância criada:", playstation);
    playstation.ligar(true);
    playstation.jogar();
    playstation.salvarJogo();

    console.log("=========================================");
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        color: "white",
        backgroundColor: "#333",
        borderRadius: "8px",
        margin: "20px",
      }}
    >
      <h2>Laboratório 01 - ECMAScript 6</h2>
      <p>
        Os exercícios deste laboratório focam na sintaxe pura de JavaScript
        (ES6).
      </p>

      <p style={{ fontStyle: "italic", color: "#ccc", marginTop: "20px" }}>
        * Nota: A execução das classes ocorre na montagem do componente.
        Verifique o console do navegador (F12) para ver os resultados.
      </p>
    </div>
  );
}
