import { NextPage } from 'next';
import Layout from '../components/ui/Layout'

const Error: NextPage = () => {
  return (
    <Layout className="error404">
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <p>Sorry, the page you’re looking for cannot be found!</p>
      <a className="btn" href="/">
        BACK TO HOME
      </a>
      <br/>
    </Layout>
  )
}

export default Error