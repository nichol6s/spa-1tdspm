import { Link } from "react-router-dom";
import {BiHomeSmile as H} from "react-icons/bi"

export default function Cabecalho() {
    return (
      <>
        <header>
          <h1>Vite + React / Coded By - RM551809</h1>
          <ul>
            <li> <Link to="/">Home - <H/> </Link> </li>
            <li> <Link to="/produtos">Produtos</Link> </li>
          </ul>
        </header>
      </>
    );
  }