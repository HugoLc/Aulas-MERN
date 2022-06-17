import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// IMPORTS ROTAS ADMIN
import Dashboard from "./pages/admin/dashboard";

import UsuariosListagem from "./pages/admin/usuarios"
import UsuariosCadastrar from "./pages/admin/usuarios/usuarios.cadastrar";
import UsuariosEditar from "./pages/admin/usuarios/usuarios.editar";

import ProdutosListagem from "./pages/admin/produtos";
import produtosEditar from "./pages/admin/produtos/produtos.editar";
import produtosCadastrar from "./pages/admin/produtos/produtos.cadastrar";


// IMPORT ROTAS CLIENT
import Home from "./pages/client/home";
//import Painel from "./pages/client/painel"
import ProdutosDetails from "./pages/client/produto/produtos.details";

export default function ProjectRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/p/:idProduto' element={<ProdutosDetails />} />

                <Route path='/admin' element={<Dashboard />} />

                <Route path='/admin/produtos' element={<ProdutosListagem />} />
                <Route path='/admin/produtos/cadastrar' element={<produtosCadastrar />} />
                <Route path='/admin/produtos/editar' element={<produtosEditar />} />

                <Route path='/admin/usuarios' element={<UsuariosListagem />} />
                <Route path='/admin/usuarios/cadastrar' element={<UsuariosCadastrar />} />
                <Route path='/admin/usuarios/editar' element={<UsuariosEditar />} />
            </Routes>
        </BrowserRouter>
    )
}
