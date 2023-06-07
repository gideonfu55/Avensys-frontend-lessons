/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import get from "axios"

function Ecommerce() {
  // Write the logic to connect to fakeStore API
  // useEffect() --> used to make API calls

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    get("https://fakestoreapi.com/products")
      .then(result => setProductsData(result.data))
      .catch(error => console.log(error))
  })

  return (
    <div>
      <h1>Ecommerce Data</h1>
      {
        productsData.map((data => {
          return (
            <div>
              <h3>{data.title}</h3>
              <img src={data.image} class="img-thumbnail" height={150} width={150}/>
            </div>
          )
        }))
      }
    </div>
  )
}

export default Ecommerce