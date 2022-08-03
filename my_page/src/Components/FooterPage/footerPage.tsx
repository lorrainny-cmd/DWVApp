import React from "react";
import styles from "../FooterPage/footerPage.module.scss";
import user from "../../Assets/user.svg";
import telephone from "../../Assets/telephone.svg";
import dado from "../../Assets/dado.png";

const FooterPage = () => {
  return (
      <div>
        <footer className={styles.footer}>
            <p>
              <img
                src={user}
                style={{ width: "60px", float: "left", marginLeft: "30px", marginRight:'10px'}}
              />
              Lorrainny Assunção da costa <br />
              lorrainny.costa@gmail.com <br />
              <img src={telephone} />
              &nbsp;&nbsp;11 11111-1111
            </p>

            <button
              type="button"
              className="btn btn-primary"
              style={{
                borderRadius: "24px",
                fontSize: "14px",
                background: "#21AF47",
                border: "none",
                width: "221px",
                height: "42px",
                color: "white",
                marginLeft: "50px",
                marginTop: "10px",
              }}
            >
              <b>Empreendimento</b>
            </button>

            <p style={{fontSize:'15px'}}>TECNOLOGIA E DESIGN DWV 2022 <img src={dado} style={{width:'15px', borderRadius:'3px'}}/></p>
        </footer>
      </div>
  );
};

export default FooterPage;
