import { Divider } from '@material-ui/core'
import React from 'react'
import ProductRow from './ProductRow'
import Header from "./Header"


function ProductList() {

    return (
            <div>
                <Header/>
                <ProductRow/>
            </div>
    )
}
export default ProductList