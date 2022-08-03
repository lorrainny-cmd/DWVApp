import React from "react";
import styles from "../List/list.module.scss";

const List = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <ul>
            <li>18 Pavimentos</li>
            <li>06 Apartamentos por andar</li>
            <li>02 Elevadores</li>
            <li>01 Vaga de Garagem</li>
            <li>Área de lazer mobiliada na cobertura</li>
            <li>Piscina de borda infinita e vista para o mar</li>
            <li>Hall de entrada com living mobiliado e </li>
            <li>climatizado</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Sistema sustentável de captação de água</li>
            <li>de chuva para às áreas comuns</li>
            <li>Bicicletário comunitário no pavimento</li>
            <li>Térreo</li>
            <li>Elevador</li>
            <li>Hall de entrada mobiliado e decorado</li>
            <li>Reaproveitamento de água</li>
            <li>Bicicletário</li>
            <li>Medidores de água, luz e gás individuais</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default List;
