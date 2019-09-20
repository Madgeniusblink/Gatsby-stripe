import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

const CancelPage = () => (
  <Layout>
    <h1>Sorry Canceled Order!</h1>
    <p>Come back <Link to={'/'}>home</Link></p>
  </Layout>
)

export default CancelPage