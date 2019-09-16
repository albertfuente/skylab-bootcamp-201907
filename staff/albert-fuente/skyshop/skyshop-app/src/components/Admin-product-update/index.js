/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext , useEffect} from 'react'
import Context from '../Context'
import logic from '../../logic'
import { Redirect} from "react-router-dom"




function UpdateProducts() {
    
    const { setView , admin, view, price,products, setProductQuery, setProducts } = useContext(Context)

    useEffect(() => {
        (async () =>{
          try{
            const products=await logic.retrieveAllProducts()
            
            setProducts(products)
          }catch(error){
            console.log(error.message)
          }
        })()
           
  },[price])

    let productId=""

    
    
    return <>
        {view==="selectedProduct" && <Redirect to="/admin/update-selected"/>}

        <h2 className="formPanel">Select the product to update</h2>
        {products &&
            <ul>
                 {products.map(item=> {
                   return<>
                    <ul onClick={event => {
                event.preventDefault()
                setView('selectedProduct')
                setProductQuery(item._id)
            }} >
                  <li >{'Title: '+item.title}</li>
                  <li >{'Color: '+item.color}</li>
                  <li >{'Price: '+item.price+" €"}</li>
                  <hr></hr>
                    </ul>
                   </>
                 }
                 
                  )} 
            </ul> 
            
    }
        <a href='/#/admin'><i className="far fa-2x fa-arrow-alt-circle-left addCart-a backArrow"></i></a>      
    </>
}

export default UpdateProducts