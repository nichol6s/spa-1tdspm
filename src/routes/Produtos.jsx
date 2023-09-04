import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {GrEdit as Editar} from "react-icons/gr";

export default function Produtos(){
    document.title = "Produtos";

    const estiloDasCelulas = {
        border: "2px solid #ccc",
        fontFamily: "Arial, Trebuchet, sans-serif"
    }
    return(
        <>
        
        <div>
            <h1>Produtos</h1>    
        </div>

        <table style={{border:"2px solid #ccc", borderCollapse:"collapse"}}>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>DESCRIÇÃO</th>
                <th>PREÇO</th>
                <th>EDITAR</th>
            </tr>

            <tbody>
            {
                ListaProdutos.map((item,indice)=>(
                    <tr key={indice}>
                        <td style={estiloDasCelulas}>{item.id}</td>
                        <td style={estiloDasCelulas}>{item.nome}</td>
                        <td style={estiloDasCelulas}>{item.desc}</td>
                        <td style={estiloDasCelulas}>{item.valor}</td>
                        <td style={estiloDasCelulas}> <Link to={`/editar/produtos/${item.id}`} > <Editar/></Link> </td>
                    </tr>
                ))
            }
            </tbody>

            <tfoot>
                <tr>
                    <td colSpan={4}>PRODUTOS LINDOS</td>
                </tr>
            </tfoot>

        </table>
        
        </>
    )
}