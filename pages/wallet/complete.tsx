import { NextPage } from 'next'
import Router from 'next/router'
import Layout from '../../components/ui/Layout'

const WalletComplete: NextPage = () => {
  return (
    <Layout className="tokens complete">
      <div className="tokens__inner">
        <h1>Successfully downloaded your key file!</h1>
        <p>Check your keyfile in your computer’s download folder or other places your have specified. Keep it safe!</p>
        <p>Do you know that the tokens can be used for many different things?</p>
        <p>Why don’t you try out archiving a web page, or perhaps deploying your own web app?</p>
        <p className="disclaimer">You'll need to open a wallet with 1 free AR in order to begin storing data on the Perma Web.</p>
      </div>
      <div className="actions-container">
        <a href="/" className="btn">deploy a web app</a>
        <a href="/" className="btn primary">archive a webpage</a>
      </div>
    </Layout>
  )
};

export default WalletComplete;