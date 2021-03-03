import { Button, createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toogleModal } from "../../store/actions/toogleModalAction";
import "./SalvarProjetoButton.scss";

const SalvarProjetoButton = ({ toogleModal }) => {
    const openModal = () => {
        toogleModal();
    };

    const theme = createMuiTheme({
        overrides: {
            MuiButton: {
                containedPrimary: {
                    backgroundColor: "#3CB371",
                    "&:hover": {
                        backgroundColor: "green",
                    },
                    margin: "auto",
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Button
                className="button-add"
                variant="contained"
                color="primary"
                onClick={openModal}
            >
                Adicionar
            </Button>
        </ThemeProvider>
    );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toogleModal }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SalvarProjetoButton);
