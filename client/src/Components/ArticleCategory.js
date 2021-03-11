import React, { useState, useEffect } from 'react';
import axios from 'axios'
function ArticleCategory({ title }) {
  const [categorias, setCategorias] = useState([])
  useEffect(() => {
    getCategories()
  }, [])

  let getCategories = async () => {
    try {
      let res = await axios.get('http://localhost:3000/api/products')
      setCategorias(Object.entries(res.data.productosPorCategoria))
    }
    catch(error) {
      console.log(error);
    }
  }
  
  return (
    <>
      <div className="row">
        {
          categorias.map((categoria, i) => {
            return (
              <div className="col-lg-6 mb-4" key={i}>
                <div className="card bg-info text-white shadow" >
                  <div className="card-body" >
                    {`${categoria[0]} : ${categoria[1]}`}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ArticleCategory