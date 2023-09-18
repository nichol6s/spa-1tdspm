import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {GrEdit as Editar} from "react-icons/gr";
import {RiDeleteBin2Fill as Excluir} from "react-icons/ri";
import style from "./Produtos.module.css"
import { useEffect } from "react";


export default function Produtos(){
    document.title = "Produtos";

    useEffect(()=>{
        console.log("Este useEffect renderiza sempre")
    })

    return(
        <>
        
        <div>
            <h1>Produtos</h1>    
        </div>

        <table className={style.tblEstilo}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>DESCRIÇÃO</th>
                    <th>PREÇO</th>
                    <th>EDITAR / EXCLUIR</th>
                </tr>
            </thead>

            <tbody>
            {
                ListaProdutos.map((item,indice)=>(
                    <tr key={indice} className={style.tblLine}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.desc}</td>
                        <td>{item.valor}</td>
                        <td> <Link to={`/editar/produtos/${item.id}`} > <Editar/></Link> | <Link to={`/excluir/produtos/${item.id}`} > <Excluir/></Link></td>
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