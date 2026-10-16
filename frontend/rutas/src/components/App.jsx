// import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
// import Post from "./Post/Post.jsx";

import { ProfileProvider } from "../contexts/profileContext.jsx";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Guardados from "../pages/Guardados/Guardados.jsx";
import Buscar from '../pages/Buscar/Buscar.jsx'
import Galeria from "../pages/Galeria/Galeria.jsx";

function App() {
    return (
        <ProfileProvider>
            <BrowserRouter>

                <Routes>

                    <Route path="/" element={
                        <div className="page">
                            <Main />
                        </div>
                                            }
                    />

                    <Route
                        path="/guardados"
                        element={<Guardados />}
                    />

                    <Route path="/buscar" element={<Buscar />}
                    />

                    <Route path="/galeria" element={<Galeria />} />

                </Routes>

            </BrowserRouter>
        </ProfileProvider>
    );
}

export default App;