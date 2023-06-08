/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux';

function Third() {
  const dispatch = useDispatch()
  const isLoading = useSelector(
    data => data.productsReducer.loading
  )
  const allProducts = useSelector(
    data => data.productsReducer.products
  )

  // Using fetch to get the output:
  // const fetchData = () => {
  //   dispatch(fetchProducts())
  // }

  // Using useEffect to auto render the output:
  useEffect(() => {
    dispatch(fetchProducts());
  });

  return (
    <div className='mx-3'>
      <h5>Ecommerce Data</h5>
      {/* <button className='btn btn-primary'>Fetch products</button> */}
      {
        isLoading ? (
          <div>Loading...</div>
        ) :
        allProducts.map((data => {
          return (
            <div>
              <h6>{data.title}</h6>
              <img src={data.image} class="img-thumbnail" height={150} width={150}/>
            </div>
          )
        }))
      }
    </div>
  )
}

export default Third