import React from 'react'
import ProductRow from './ProductRow'

function ProductList() {

    return (
            <div id="content">
                <h1 class="h3 mb-2 text-gray-800">Todos los productos en la base de datos</h1>
                <div class="card shadow mb-4">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Descripción</th>
                                        <th>Precio</th>
                                        <th>Categoria</th>
                                        <th>Color</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Categories</th>
                                        <th>Color</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <ProductRow productsJSON/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ProductList