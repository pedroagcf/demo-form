import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toogleModal } from "../../store/actions/toogleModalAction";

import "./ProjetoPedagogico.scss";

const ProjetoPedagogico = ({ toogleModal, projetoPedagogico, key }) => {
    const openModal = () => {
        toogleModal();
    };

    const { titulo, areaConhecimento, cargaHoraria } = projetoPedagogico;
    return (
        <li className="projeto-pedagogico" onClick={openModal}>
            {/* <p>{key}</p> */}
            <h3 className="projeto-pedagogico__titulo">{titulo}</h3>
            <p className="projeto-pedadagogico__areaConhecimento">
                {areaConhecimento}
            </p>
            <p className="projeto-pedadagogico__cargaHoraria">{cargaHoraria}</p>
        </li>
    );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toogleModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjetoPedagogico);
