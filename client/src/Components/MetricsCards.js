import React, { useState, useEffect } from 'react';
import axios from 'axios'

import MetricsCardComponent from './MetricsCardComponent';

import dataCards from "../database/dataCards";

let APIProductos = 'http://localhost:3000/api/products'
let APIUsuarios = 'http://localhost:3000/api/users'
const requestAPIProductos = axios.get(APIProductos)
const requestAPIUsuarios = axios.get(APIUsuarios)


function AppMetricsCard() {
  const [totalProductos, setTotalProductos] = useState(0)
  const [totalCategorias, setTotalCategorias] = useState(0)
  const [totalUsuarios, setTotalUsuarios] = useState(0)

  useEffect(() => {
    axios.all([
      requestAPIProductos,
      requestAPIUsuarios
    ])
      .then(res => {
        setTotalProductos(res[0].data.totalDeProductos)
        setTotalCategorias(res[0].data.totalCategorias)
        setTotalUsuarios(res[1].data.count)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  console.log(totalProductos);
  console.log(totalCategorias);

  return (
    <div className="rowUp" >
      <MetricsCardComponent
        title='Total productos'
        amount={totalProductos}
        className="card border-left-primary shadow h-100 py-2"
        color="text-xs font-weight-bold text-red text-uppercase mb-1"
        icon="fas fa-clipboard-list fa-2x text-gray-300"
      />
      <MetricsCardComponent
        title='Total categorias'
        amount={totalCategorias}
        className = "card border-left-warning shadow h-100 py-2"
        color="text-xs font-weight-bold text-warning text-uppercase mb-1"
        icon="fas fa-dollar-sign fa-2x text-gray-300"
      />
      <MetricsCardComponent
        title='Total usuarios'
        amount={totalUsuarios}
        className = "card border-left-success shadow h-100 py-2"
        color="text-xs font-weight-bold text-success text-uppercase mb-1"
        icon="fas fa-user-check fa-2x text-gray-300"
      />
    </div>
  )
}

export default AppMetricsCard


{/*
  <>
     {data.map((elem, key)=>
     <div className="col-md-4 mb-4" key={key}>
          <div className={elem.className}>
            <div className="card-body">
              <div className="row no-gutters align-items-center">

                <div className="col mr-2">
                  <div className={elem.color}>{elem.title}</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{elem.amount}</div>
                </div>

                <div className="col-auto">
                  <i className={elem.icon}></i>
                </div>

              </div>
            </div>
          </div>
     </div>)
     }
     </>
  
  
  
  
  
   <div className="col-md-4 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Amount in products</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">$546.456</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
     </div>


     <div className="col-md-4 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">38</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-user-check fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
     </div> */}