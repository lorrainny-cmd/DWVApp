import React from "react";
import styles from "./features.module.scss";
import imagem1 from "../../Assets/imagem1.png";
import imagem2 from "../../Assets/imagem2.png";
import imagem3 from "../../Assets/imagem3.png";
import imagem4 from "../../Assets/imagem4.png";
import imagem5 from "../../Assets/imagem5.png";
import imagem6 from "../../Assets/imagem6.png";
import entrada from "../../Assets/entrada.png";
import parcelamento from "../../Assets/parcelamento.png";
import financiamento from "../../Assets/financiamento.png";

const Features = () => {
  return (
    <>
      <div className={styles.container}>
          <img src={imagem1} style={{maxWidth:'clamp(80px,5vw,10px)'}}/>
          <img src={imagem2} style={{maxWidth:'clamp(80px,5vw,10px)'}}/>
          <img src={imagem3} style={{maxWidth:'clamp(80px,5vw,10px)'}}/>
          <img src={imagem4} style={{maxWidth:'clamp(80px,5vw,10px)'}}/>
        <br />
          <img src={imagem5} style={{maxWidth:'clamp(80px,5vw,10px)'}}/>
          <img src={imagem6} style={{maxWidth:'clamp(80px,5vw,10px)'}}/>
      </div>

      <div className={styles.vertical}></div>

      <div>
        <img src={entrada} style={{maxWidth:'clamp(400px,25vw,10px)', marginRight:'100px'}}/>
        <br />
        <img src={parcelamento} style={{maxWidth:'clamp(400px,25vw,10px)', marginRight:'100px'}}/>
        <br />
        <img src={financiamento} style={{maxWidth:'clamp(400px,25vw,10px)', marginRight:'100px'}}/>
      </div>
    </>
  );
};

export default Features;
