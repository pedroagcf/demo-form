import { Button, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import "./App.scss";
import Header from "./components/Header/Header";
import ListaProjetos from "./components/ListaProjetos/ListaProjetos";
import ModalForm from "./components/ModalForm/ModalForm";
import SalvarProjetoButton from "./components/SalvarProjetoButton/SalvarProjetoButton";
import { listaProjetos } from "./data/mock";

import store from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <div className="app-movie">
                <Header />
                <main className="app-movie-main">
                    <ListaProjetos projetosPedagogicos={listaProjetos} />
                    <SalvarProjetoButton />
                </main>
                <ModalForm />
            </div>
        </Provider>
    );
}

export default App;
