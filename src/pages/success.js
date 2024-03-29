import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

const SuccessPage = () => (
  <Layout>
    <h1>Successful Order!!</h1>
    <p>Go back <Link to={'/'}>home</Link></p>
  </Layout>
)

export default SuccessPage