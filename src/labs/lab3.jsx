import { Component } from "react";

export default class Lab03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      result: null,
    };
  }

  handleClick(value) {
    if (this.state.result !== null && /[0-9]/.test(value)) {
      this.setState({ display: value, result: null });
    } else if (this.state.result !== null && /[+\-*/]/.test(value)) {
      this.setState({ display: this.state.result + value, result: null });
    } else {
      this.setState({ display: this.state.display + value });
    }
  }

  clear() {
    this.setState({ display: "", result: null });
  }

  calculate() {
    try {
      const resultado = new Function("return " + this.state.display)();
      if (!isFinite(resultado)) throw new Error("Erro matemático");
      this.setState({ result: parseFloat(resultado).toFixed(2) });
    } catch (e) {
      this.setState({ result: "Erro" });
    }
  }

  render() {
    const visor =
      this.state.result === null
        ? this.state.display || "0"
        : this.state.result;

    return (
      <div
        style={{
          width: "40vh",
          height: "60vh",
          margin: "20px auto",
          textAlign: "center",
          fontFamily: "roboto, sans-serif",
          backgroundColor: "#333",
          padding: "15px",
          borderRadius: "8px",
          color: "#fff",
        }}
      >
        <h2>Calculadora</h2>
        <div
          style={{
            border: "1px solid black",
            marginBottom: "10px",
            padding: "5px",
            minHeight: "30px",
            textAlign: "right",
            fontSize: "20px",
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          {visor}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            height: "70%",
          }}
        >
          {/* Linha 1 */}
          <div style={{ display: "flex", height: "25%", gap: "5px" }}>
            <button
              onClick={() => this.handleClick("7")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#555",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              7
            </button>
            <button
              onClick={() => this.handleClick("8")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#555",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              8
            </button>
            <button
              onClick={() => this.handleClick("9")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#555",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              9
            </button>
            <button
              onClick={() => this.handleClick("*")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#666",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              *
            </button>
          </div>

          {/* Linha 2 */}
          <div style={{ display: "flex", height: "25%", gap: "5px" }}>
            <button
              onClick={() => this.handleClick("4")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#555",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              4
            </button>
            <button
              onClick={() => this.handleClick("5")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#555",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              5
            </button>
            <button
              onClick={() => this.handleClick("6")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#555",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              6
            </button>
            <button
              onClick={() => this.handleClick("/")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#666",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              /
            </button>
          </div>

          {/* Linha 3 */}
          <div style={{ display: "flex", height: "25%", gap: "5px" }}>
            <button
              onClick={() => this.handleClick("1")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#555",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              1
            </button>
            <button
              onClick={() => this.handleClick("2")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#555",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              2
            </button>
            <button
              onClick={() => this.handleClick("3")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#555",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              3
            </button>
            <button
              onClick={() => this.handleClick("-")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#666",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              -
            </button>
          </div>

          {/* Linha 4 */}
          <div style={{ display: "flex", height: "25%", gap: "5px" }}>
            <button
              onClick={() => this.clear()}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#ff9500",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              C
            </button>
            <button
              onClick={() => this.handleClick("0")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#555",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              0
            </button>
            <button
              onClick={() => this.calculate()}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#ff9500",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              =
            </button>
            <button
              onClick={() => this.handleClick("+")}
              style={{
                flex: 1,
                fontSize: "18px",
                padding: "0",
                border: "none",
                backgroundColor: "#666",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
