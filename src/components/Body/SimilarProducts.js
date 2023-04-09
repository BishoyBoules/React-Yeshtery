import React from 'react'
import '../../styles/SimilarProducts.css'
import SingleProduct from './SingleProduct'

const SimilarProducts = () => {
  return (
    <div className="similarProducts">
      <h1 className="title">Similar Products</h1>
      <p className="text">You may like these products also</p>
      <section className="products">
        <SingleProduct
          sale={true}
          salePercentage={50}
          oldPrice={'19,999'}
          pickup={true}
        />
        <SingleProduct sale={false} pickup={false} days={'10'} />
        <SingleProduct
          sale={true}
          salePercentage={50}
          oldPrice={'19,999'}
          pickup={true}
        />
        <SingleProduct
          sale={true}
          salePercentage={50}
          oldPrice={'19,999'}
          pickup={false}
          days={'2 Days'}
        />
      </section>
      <section className="lines">
        <hr />
        <hr />
      </section>
    </div>
  )
}

export default SimilarProducts
