import { Link } from "react-router-dom";
import {BiHomeSmile as H} from "react-icons/bi"

export default function Cabecalho() {
    return (
      <>
        <header>
          <h1>Vite + React / Coded Byyyy - RM551809</h1>
          <ul>
            <li> <Link to="/">HOME - <H/> </Link> </li>
            <li> <Link to="/produtos">PRODUTOS</Link> </li>
            <li><Link to="/cadastrar/produto">CADASTRAR PRODUTO</Link></li>
          </ul>
        </header>
      </>
    );
  }