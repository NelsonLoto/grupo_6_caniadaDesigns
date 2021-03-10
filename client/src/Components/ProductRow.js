import React, { useState, useEffect } from 'react'
import axios from 'axios'
function ProductRow({ productsJSON }) {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetchProductos()
    }, [])

    const fetchProductos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/products')
            setProductos(response.data.productos)
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        productos.map((producto, i) =>
            <tr>
                <td>{producto.name}</td>
                <td>{producto.description}</td>
                <td>{producto.price}</td>
                <td>{producto.relations.categoria}</td>
                <td>{producto.relations.color}</td>
            </tr>
        )
    )
}

export default ProductRow