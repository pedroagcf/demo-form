import React from "react";
import ProjetoPedagogico from "../ProjetoPedagogico/ProjetoPedagogico";

import "./ListaProjetos.scss";
const ListaProjetos = ({ projetosPedagogicos }) => {
    return (
        <ul className="lista-projetos">
            {projetosPedagogicos?.map((pp, id) => (
                <ProjetoPedagogico projetoPedagogico={pp} key={id} />
            ))}
        </ul>
    );
};

export default ListaProjetos;
