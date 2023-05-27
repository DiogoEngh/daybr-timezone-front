import { Alert, Button } from "antd";
import React, { useEffect, useState } from "react";
import { currentDate, addHours } from "daybr-timezone";

const Init = () => {
  const handleGetStared = () => (window.location = "/getStarted");
  const [currentTime, setCurrentTime] = useState(addHours(currentDate(), 3).toLocaleString("pt-BR"))
  const [active, setActive] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(addHours(currentDate(), 3).toLocaleString("pt-BR"))
    }, 1000)
  }, [])

  const handleCopy = () => {
    setActive(true)
    var campoAuxiliar = document.createElement("textarea");
    campoAuxiliar.value = 'npm install daybr-timezone';
    document.body.appendChild(campoAuxiliar);
    campoAuxiliar.select();
    document.execCommand("copy");
    document.body.removeChild(campoAuxiliar);
    setTimeout(() => setActive(false), 3000)
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{ height: "3.5rem", width: "100%", backgroundColor: "#fafafa" }}
      ></header>
      <main
        style={{
          height: "calc(100vh - 3.5rem)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0rem 2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "35px",
            fontWeight: "bold",
            color: "#222",
            maxWidth: "600px",
          }}
        >
          {currentTime}
        </p>
        <p
          style={{
            fontSize: "35px",
            fontWeight: "bold",
            color: "#222",
            maxWidth: "600px",
            marginTop: '1rem'
          }}
        >
          Uma biblioteca de datas para desenvolvedores brasileiros
        </p>
        <p
          style={{
            fontSize: "20px",
            marginTop: "2rem",
            color: "#555",
            maxWidth: "600px",
          }}
        >
          Essa biblioteca foi criada com o intuito de ajudar desenvolvedores que
          não gostam de quebrar a cabeça convertendo e trabalhando com datas.
          Sinta-se livre para usar e comperar com o projeto como bem entender.
        </p>
        <div
          style={{
            maxWidth: "600px",
            marginTop: "2rem",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
          }}
        >
          <Button
            onClick={handleGetStared}
            style={{ height: "3rem", width: "10rem" }}
            color="primary"
          >
            Get Started
          </Button>
          <div
            style={{
              width: "calc(100% - 11rem)",
              height: "3rem",
              border: "1px solid rgba(0,0,0,.2)",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0rem 1.5rem",
              color: "#555",
            }}
            onClick={handleCopy}
          >
            <p>npm install daybr-timezone</p>
          </div>
        </div>
        {active && <Alert style={{
          position: 'fixed',
          right: '2rem',
          bottom: '2rem'
        }} message="Texto copiado para a área de transferência!" type="success"/>}
      </main>
      <footer></footer>
    </div>
  );
};

export default Init;
