import './TabelaProdutos.css';
import React from 'react';
import produtos from '../../data/produtos';

export default (props) => {
    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} 
                    className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.descricao}</td>
                    <td>R$ {produto.valor.toFixed(2).replace('.', ',')}</td>
                </tr>
            );
        });
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
       
                    {getLinhas()}
          
                </tbody>
            </table>
        </div>
    );
};


