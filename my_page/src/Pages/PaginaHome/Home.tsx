import React from "react";
import imagem from "../../Assets/Logo.png";
import galery from "../../Assets/galery.png";
import principal from "../../Assets/principal.png";
import location from "../../Assets/location.svg";
import styles from "../PaginaHome/home.module.scss";
import Features from "../../Components/Features/features";
import FooterPage from "../../Components/FooterPage/footerPage";
import List from "../../Components/List/list";

const Home = () => {
  return (
    <>
      <div>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src={imagem} />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              style={{
                borderRadius: "24px",
                fontSize: "14px",
                background: "#21AF47",
                border: "none",
                width: "211px",
                height: "48px",
                marginTop: "20px",
                color:'white',
              }}>
              <b>Fazer Contra Proposta</b>
            </button>
          </div>
        </header>
      </div>
      <div className={styles.principal}>
        <figure className={styles.figure}>
          <img src={principal} />
          <a href="/Galeria">
            <img src={galery} alt="Galeria" />
          </a>
        </figure>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          style={{
            borderRadius: "24px",
            background: "#6624FB",
            border: "none",
            width: "90px",
            height: "25px",
            color: "white",
            marginLeft: "380px",
            marginTop: "10px",
            boxShadow: "0px 0px 1em #666",
          }}>
          <b>Decorado</b>
        </button>
      </div>
      <div className={styles.header}>
        <div className={styles.text}>
          <p>
            <b style={{ fontSize: "40px" }}>602</b> &nbsp; BLOCO OU TIPO 2{" "}
          </p>
          <p>
            {" "}<img src={location} />&nbsp;&nbsp; Rua 414, 234, Morretes, Itapema - SC{" "}
          </p>
        </div>
        <div>
          <h1 style={{color:'#21AF47', marginRight:'100px'}}><b>R$ 5.000.000,00</b></h1>
        </div>
      </div>
      <div className={styles.bodyitens}>
        <Features />
      </div>
      <br />
      <div>
        <button
          type="button"
          className="btn btn-primary"
          style={{
            borderRadius: "24px",
            fontSize: "14px",
            background: "#323232",
            border: "none",
            width: "221px",
            height: "42px",
            color: "white",
            marginLeft: "510px",
            marginTop: "10px",
            boxShadow: "0px 0px 0.5em #666",
          }}>
          <b>Apartamento</b>
        </button>

        <button
          type="button"
          className="btn btn-primary"
          style={{
            borderRadius: "24px",
            fontSize: "14px",
            background: "#F2F2F2",
            border: "none",
            width: "221px",
            height: "42px",
            color: "#666",
            marginLeft: "50px",
            marginTop: "10px",
            boxShadow: "0px 0px 0.5em #666",
          }}>
          <b>Empreendimento</b>
        </button>
      </div>

      <div>
        <List/>
      </div>

      <div>
        <FooterPage/>
      </div>

    </>
  );
};

export default Home;
