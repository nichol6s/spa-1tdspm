import { useParams } from "react-router-dom";

export default function EditarProdutos(){
    //Recuperando o ID do produto selecionado
    const {id} = useParams();
    
    return(
        <>
        
        <div>
            <h1>Editar Produtos</h1>
            <p>Produto Selecionado - {id}</p>
        </div>
        
        </>
    )
}