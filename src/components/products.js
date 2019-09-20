import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Product from './product'


const Products = () => {
    const { allStripeSku, allStripeProduct } = useStaticQuery(graphql`
        query AllProducts {
            allStripeSku {
                edges {
                    node {
                        id
                        attributes {
                            name
                        }
                        product {
                            name
                            id
                        }
                        price
                        localFiles {
                            childImageSharp {
                                fixed(width: 200) {
                                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
            allStripeProduct {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
    `)


  return (
      <div>
        {
            allStripeProduct.edges.map((product) => {
                const skus =  allStripeSku.edges.filter(sku => {
                    return sku.node.product.id === product.node.id
                })

                return <Product key={product.node.id} skus={skus} product={product.node} />
            })
        }
      </div>
  )
}

export default Products