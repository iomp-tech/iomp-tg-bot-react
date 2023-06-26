import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./assets/sass/style.sass";

import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
