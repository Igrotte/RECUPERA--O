import { encontrarTodosProdutos } from "../models/Produto.js";

export const pegarProdutos = async (req, res) => {
  try {
    const bdProdutos = await encontrarTodosProdutos();
    let produtos = [];
    for (let i in bdProdutos) {
      produtos.push({
        ...bdProdutos[i]
      });
    }
    
    return res.status(200).json({ produtos });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to get produtos", message: error.message });
  }
};