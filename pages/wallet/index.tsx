import { createRef, useState, useEffect } from 'react'
import { NextPage } from 'next'
import Router from 'next/router'
import Layout from '../../components/ui/Layout'
import ReCAPTCHA from "react-google-recaptcha";
import ReactTooltip from "react-tooltip"
import { authorizeAndGetProfile } from "../../libs/auth0";

const Wallet: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const recaptchaRef = createRef<ReCAPTCHA>();
  const checkboxLabelRef = createRef<HTMLLabelElement>();

  useEffect(() => {
    const recaptchaComp = recaptchaRef.current;
    if (recaptchaComp) recaptchaComp.execute();
  }, [])

  function onCheckboxChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const target = evt.target;
    setIsChecked(target.checked);
  }

  function onCheckboxFocus(evt: React.FocusEvent<HTMLInputElement>) {
    ReactTooltip.hide(checkboxLabelRef.current!);
  }

  async function onSubmit(evt: React.FormEvent) {
    if (evt) evt.preventDefault();

    if (!isChecked) {
      setValidationMessage("Terms of service must be agreed to continue.");
      ReactTooltip.show(checkboxLabelRef.current!);
      return;
    }

    const authResponse = await authorizeAndGetProfile("google");
    const recaptchaComp = recaptchaRef.current!;
    authResponse.captchaToken = recaptchaComp.getValue() || "";

    console.log(authResponse);
    const authResponseJsonStr = JSON.stringify(authResponse);
    const authResponseJsonB64 = btoa(authResponseJsonStr);
    Router.push(`/wallet/process?data=${authResponseJsonB64}`)
  }

  return (
    <Layout className="tokens">
      <div className="tokens__inner">
        <h1>Store data on the permaweb for free</h1>
        <p>You first need some Arweave tokens which we’d like to send you for free together with a wallet.</p>
        <p>You'll be amazed how far it'll go!</p>
        <form onSubmit={onSubmit} noValidate>
          <label className="checkbox-container" data-tip ref={checkboxLabelRef}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={onCheckboxChange}
              onFocus={onCheckboxFocus} />
            <span className="checkmark"></span>
            <ReactTooltip place="top" type="error" effect="solid" event="no-event">
              <span>{validationMessage}</span>
            </ReactTooltip>
            I understand and agree to the privacy policy.
          </label>
          <button className="primary" type="submit" >SIGN UP WITH GOOGLE</button>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.CAPTCHA_KEY!}
          />
        </form>
      </div>
    </Layout>
  )
};

export default Wallet;