import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import classes from "./ExcluirProduto.module.css"

export default function ExcluirProduto() {
  document.title = "Excluir Produto";

  const { id } = useParams();
  const navigate = useNavigate()

  const [produto, setProdutos] = useState({
    id: "",
    nome: "",
    desc: "",
    valor: "",
  });

  const handleExclude = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((produto) => {
        // Atualizar o estado do componente com a nova lista de produtos
        setProdutos(produto);
        navigate("/produtos");
      })
      .catch(error => console.log(error));
  };

  // useEffect(() => {
  //   // Obter a lista de produtos
  //   fetch("http://localhost:5000/produtos")
  //     .then((response) => response.json())
  //     .then((produto) => {
  //       setProdutos(produto);
  //     })
  // }, []);

  // useEffect(() => {
  //   // Verificar se o ID do produto existe
  //   const produtoExcluido = produto.find((produto) => produto.id === id);
  //   if (produtoExcluido === undefined) {
  //     throw new Error("O produto não existe");
  //   }
  // }, [id]);

  return (
    
      <div className={classes.container}>
        <h1>Excluir Produto</h1>
        <div>
            <p>Nome : {produto.nome}</p>
            <p>Desc : {produto.desc}</p>
            <p>valor : {produto.valor}</p>
            <div>
                <button onClick={handleExclude}>EXCLUIR</button>
                <button onClick={()=> navigate("/produtos")}>CANCELAR</button>
            </div>
        </div>
      </div>
    
  );
}
