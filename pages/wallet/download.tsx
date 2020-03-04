import { createRef, useState, useEffect } from 'react'
import { NextPage } from 'next'
import { saveAs } from 'file-saver';
import { TokenApi } from "../../libs/token-api";
import Router from 'next/router'
import Layout from '../../components/ui/Layout'
import ReactTooltip from "react-tooltip"

const WalletDownload: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [token, setToken] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const tokenApi = new TokenApi();
  const checkboxLabelRef = createRef<HTMLLabelElement>();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token') || "";
    setToken(token);
    console.log(token);
  }, []);

  function onCheckboxFocus(evt: React.FocusEvent<HTMLInputElement>) {
    ReactTooltip.hide(checkboxLabelRef.current!);
  }

  function onCheckboxChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const target = evt.target;
    setIsChecked(target.checked);
  }

  async function onSubmit(evt: React.FormEvent) {
    if (evt) evt.preventDefault();

    if (!isChecked) {
      setValidationMessage("Terms of service must be agreed to continue.");
      ReactTooltip.show(checkboxLabelRef.current!);
      return;
    }

    try {
      const response = await tokenApi.redeem(token);
      console.log(response);
      const wallet = response.data.data.wallet;
      const blob = new Blob([wallet.jwk], {
        type: "text/json;charset=utf-8;"
      });
      saveAs(blob, `arweave-keyfile-${wallet.address}.json`);
      Router.push("/wallet/complete")
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  }

  return (
    <Layout className="tokens download">
      <div className="tokens__inner">
        <img src="/images/icons/key.svg" />
        <h1>Download your key file</h1>
        <p>Nobody (including the arweave project) can help you recover your wallet if the key file is lost.</p>
        <p className="bold">So, remember to keep it safe!</p>
        <form onSubmit={onSubmit} noValidate>
          <label className="checkbox-container" data-tip ref={checkboxLabelRef}>
            <input
              name="isGoing"
              type="checkbox"
              checked={isChecked}
              onChange={onCheckboxChange}
              onFocus={onCheckboxFocus} />
            <span className="checkmark"></span>
            <ReactTooltip place="top" type="error" effect="solid" event="no-event">
              <span>{validationMessage}</span>
            </ReactTooltip>
            I understand that I am responsible for my key file.
          </label>
          <button className={`primary ${isError && "error"}`} disabled={isError} type="submit" >DOWNLOAD KEY</button>
          {isError && <p className="error">
            ! Your download link is expired. Try start over.
          </p>}
        </form>
      </div>
    </Layout>
  )
};

export default WalletDownload;