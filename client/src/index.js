import react from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import{BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </>,

  document.getElementById("root")
)