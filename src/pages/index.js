import React from "react"
import ChatWindow from "../components/ChatWindow"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ChatWindow />
  </Layout>
)

export default IndexPage
