import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import Card from './Card';

function AllProductPage() {

  const { filterProduct } = useProductContext();

  let filterData = filterProduct;
  return (
    <React.Fragment>
      <section className='allProducts' id='allProductSec'>
        <div className="container" id='allProducts'>
          <div className="sectionHead">
            <h2>All Products</h2>
          </div>
          <div className="productBoxCont">
            {
              filterData.map((product, id) => {
               return <Card key={id} {...product} ></Card>
              })
            }

          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AllProductPage

{/* <section className="categoryBoxSec" id='categoryProductSec'>
<div className="container" id='categoryBoxSec'>
    <div className="sectionHead">
        <h2>{myCategory}</h2>
    </div>
    {categoryOneData.map((product, id) =>
        <Card key={id} {...product} ></Card>
    )}
</div>
</section> */}