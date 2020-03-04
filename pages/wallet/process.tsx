import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { TokenApi } from "../../libs/token-api";
import { AuthorizeProfileResponse } from "../../libs/auth0";
import cookies from 'js-cookie'
import Layout from '../../components/ui/Layout'

const WalletProcess: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const tokenApi = new TokenApi();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const jsonB64 = urlParams.get('data') || "";
    const jsonStr = atob(jsonB64);
    const data = JSON.parse(jsonStr);

    const { profile: userProfile } = data || {};
    const { email: userEmail } = userProfile || {};
    setUserEmail(userEmail);

    const apollo = cookies.get('_apollo_session') || null;
    const referrer = cookies.get('_token_referrer') || null;

    // wait for d to generate
    setTimeout(() => { requestSignup(data, apollo, referrer) }, 500);
  }, []);

  async function requestSignup(data: AuthorizeProfileResponse, apollo: string | null, referrer: string | null) {
    try {
      const response = await tokenApi.signup(
        data.response.accessToken,
        data.captchaToken,
        apollo,
        referrer,
      );
      console.log(response);
      setIsSuccess(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsSuccess(false);
      setIsLoading(false);
    }
  }

  function renderLoading() {
    return (
      <div className="tokens__inner">
        <div className="cp-spinner cp-skeleton"></div>
        <h1>Sending you some permaweb magic...</h1>
        <p>Wait few seconds. No need to refresh.</p>
      </div>
    )
  }

  function renderError() {
    return (
      <div className="tokens__inner">
        <img src="/images/icons/error1.svg" />
        <h1>Oops!</h1>
        <p>Looks like something went wrong.</p>
        <div className="details">
          <p>
            Try again or email&nbsp;
            <a href="mailto:team@arweave.org">support</a> if this continues.
          </p>
        </div>
      </div>
    )
  }

  function renderSuccess() {
    return (
      <div className="tokens__inner">
        <img src="/images/icons/email.svg" />
        <h1>Check your email!</h1>
        <p>We've sent you an email with instruction and a wallet download link.</p>
        <p className="bold">From: team@arweave.org</p>
        <p className="bold">{`To: ${userEmail}`}</p>
        <br/>
      </div>
    )
  }

  return (
    <Layout className="tokens process">
      {isLoading && renderLoading()}
      {!isLoading && isSuccess && renderSuccess()}
      {!isLoading && !isSuccess && renderError()}
    </Layout>
  )
};

export default WalletProcess;