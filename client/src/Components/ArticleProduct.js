import React, { Component } from 'react';
import imageDefault from "../images/product_dummy.svg"
import image from "../images/fleteAvatar.png"

class ArticleProduct extends Component{
     constructor(props){
          super(props);
          this.db={}
          this.state= {
               image: undefined,
               imageDefault : imageDefault,
               url:'http://localhost:3000/productos'
          }
     }

     apiCall(url,handler){
          fetch(url)
          .then(response=>response.json())
          .then(data=>handler(data))
          .catch(error=>{
               console.log(error);
               return error
          })
     }

     resultApi(){
          this.apiCall("http://localhost:3000/api/products",this.handlerData)
     }

     handlerData = (data)=>{
          console.log(data.productos)
          this.setState({
               image: `http://localhost:3000${data.productos[data.totalDeProductos-1].image}`,
               description: data.productos[data.totalDeProductos-1].name,
               url: `http://localhost:3000/productos/${data.productos[data.totalDeProductos-1].id}`
               
          })


     }

     componentDidMount(){
          this.resultApi()
     }

     
     
     render() {

          let img;
          let p;
          
          if(this.state.image != undefined){
               img = <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={this.state.image} alt="...loading"/>
               p = this.state.description
          }else{
               img= <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={this.state.imageDefault} alt="image dummy"/>
               p= "Lorem ipsum"
          }

          return(

               <div className="card-body">
                   <div className="text-center">
                     {img}
                   </div>

                   <p>{p}</p>
                   <a target="_blank" rel="nofollow" href={this.state.url}>View product detail</a>
               </div>
            
          )
     }
}

export default ArticleProduct

