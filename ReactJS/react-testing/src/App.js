import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [productsData, setProductsData] = useState([]);

  const increaseCount = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log(data);
      setProductsData(data);
    })
    .catch(error => {
      console.log(error);
    });
  });

  return (
    <div className="App m-3">
      <h5 className='fw-bold'>Testing React Code</h5>
      <p className='fw-bold text-danger'>Hello World!</p>

      <h5 data-testid="countvalue">The count is: {count}</h5>
      <button onClick={increaseCount} className='btn btn-primary btn-sm'>+</button>

      <div className='mt-5'>
        <h5>Getting table of items from Fakestore:</h5>

        <table className='table table-primary'>
          <thead>
            <tr className='table-success'>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {
              productsData.map((product) => {
                return (
                  <tr key={product.id}>
                    <td><img src={product.image} alt={product.title} width={150}/></td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
