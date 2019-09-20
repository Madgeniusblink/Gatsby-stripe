import React, { useState } from "react"
import Img from 'gatsby-image'

const Product = ({ skus, product }) => {
  const stripe = window.Stripe(process.env.GATSBY_STRIPE_SECRET_KEY)
  const [sku, setSku ] = useState(skus[0].node.id)
  

  const placeOrder = () => {
    stripe.redirectToCheckout({
      items: [
        {
          sku,
          quantity: 1
        }
      ],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel"
    })
  }

  return (
      <div>
        <article>
          <Img fixed={skus[0].node.localFiles[0].childImageSharp.fixed} />
          <h3>{product.name}</h3>
          <select value={sku} onChange={(e) => setSku(e.target.value)}>
            {skus.map((edge) => <option key={edge.node.id} value={edge.node.id}>{edge.node.attributes.name}</option>)}
          </select>
          <br/>
          <button onClick={placeOrder}>Buy Me</button>
        </article>
      </div>
  )
}

export default Product
