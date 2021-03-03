import {
    Button,
    Checkbox,
    createMuiTheme,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    ThemeProvider,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toogleModal } from "../../store/actions/toogleModalAction";
import "./ModalForm.scss";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const ModalForm = ({ toogleModal, toogleModalData }) => {
    const { open } = toogleModalData;

    const classes = useStyles();

    const theme = createMuiTheme({
        overrides: {
            MuiButton: {
                containedPrimary: {
                    backgroundColor: "#3CB371",
                    "&:hover": {
                        backgroundColor: "green",
                    },
                },
            },
        },
    });
    // 3CB371

    const [projetoPedagogico, setprojetoPedagogico] = useState({
        titulo: "",
        areaConhecimento: "hahahah",
        publicoAlvo: "",
        mercadoTrabalho: "",
        apresentacao: "",
        cargaHoraria: "",
        estruturaCurricular: "",
        coordenador: "",
        corpoDocente: "",
    });

    const closeModal = () => {
        toogleModal();
    };

    const handleChange = (prop) => (event) => {
        setprojetoPedagogico({
            ...projetoPedagogico,
            [prop]: event.target.value,
        });
    };

    return (
        <div className={`modal${open ? " --open" : " --close"}`}>
            <form className="modal__form">
                <Typography variant="h6" gutterBottom>
                    Projeto Pedagogico
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="titulo"
                            name="titulo"
                            label="Titulo"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel fullWidth id="demo-simple-select-label">
                                Area de conhecimento
                            </InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={projetoPedagogico.areaConhecimento}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Saude</MenuItem>
                                <MenuItem value={20}>Matematica</MenuItem>
                                <MenuItem value={30}>Educação fisica</MenuItem>
                            </Select>
                        </FormControl>

                        {/* <TextField
                            required
                            id="areaConhecimento"
                            name="areaConhecimento"
                            label="Area de Conhecimento"
                            fullWidth
                            autoComplete="family-name"
                        /> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="cargaHoraria"
                            name="cargaHoraria"
                            label="Carga Horaria"
                            fullWidth
                            autoComplete="shipping address-line1"
                            type="number"
                        />
                        {/* <TextField
                            required
                            id="cargaHoraria"
                            name="cargaHoraria"
                            label="Carga Horaria"
                            fullWidth
                            autoComplete="shipping address-line1"
                        /> */}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="publicoAlvo"
                            name="publicoAlvo"
                            label="Publico Alvo"
                            fullWidth
                            autoComplete="shipping address-line2"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="mercadoTrabalho"
                            name="mercadoTrabalho"
                            label="Mercado de Trabalho"
                            fullWidth
                            autoComplete="shipping address-level2"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="apresentacao"
                            name="apresentacao"
                            label="Apresentação"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="estruturaCurricular"
                            name="estruturaCurricular"
                            label="Estrutura Curricular"
                            fullWidth
                            autoComplete="shipping postal-code"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="coordenador"
                            name="coordenador"
                            label="Coordenador"
                            fullWidth
                            autoComplete="shipping country"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="corpoDocente"
                            name="corpoDocente"
                            label="corpoDocente"
                            fullWidth
                            autoComplete="shipping country"
                        />
                    </Grid>
                    <Grid className="button-group" item xs={12} direction="row">
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary">
                                Enviar
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={closeModal}
                            >
                                Adicionar
                            </Button>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toogleModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
