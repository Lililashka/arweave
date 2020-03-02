import { useState } from "react"
import Validator from "validator"
import Axios from "axios";

const NewsletterSignup: React.FunctionComponent = ({
}) => {
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isSucess, setIsSucess] = useState(false);

  function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const target = evt.target;
    setEmail(target.value);

    const emailValidation = Validator.isEmail(email);
    if (emailValidation !== isValidEmail) setIsValidEmail(emailValidation);
  }

  function onFocus(evt: React.FocusEvent<HTMLInputElement>) {
    setValidationMessage("");
  }

  function onSubmit(evt: React.FormEvent) {
    if (evt) evt.preventDefault();

    const emailValidation = Validator.isEmail(email);
    if (!emailValidation) {
      setValidationMessage("! Require a valid email to continue.");
      return;
    }

    Axios.post("https://x2xhw1l4vf.execute-api.eu-west-2.amazonaws.com/production/subscribe",
      {
        email
      })
      .then(function (response) {
        if (!response.data.success) {
          setIsSucess(false);
          setValidationMessage(response.data.error);
        } else {
          setIsSucess(true);
        }
      })
      .catch(function (error) {
        setIsSucess(false);
        setValidationMessage("! Registration failed.");
      });
  }

  function renderThankyou() {
    return (
      <div className="newsletter-signup__content">
        <h1>Thank you for subscribing to arweave’s newsletter! </h1>
        <p className="input-readonly-style">The email will be sent to: <br />{email}</p>
      </div>
    )
  }

  return (
    <section className="newsletter-signup">
      <div className="newsletter-signup__inner">
        {isSucess ? renderThankyou() : (
          <div className="newsletter-signup__content">
            <h2>Arweave is community owned and operated.</h2>
            <p>The Arweave is built and run by people like you.<br />
              Have <strong>an amazing idea for an Arweave application?</strong> &nbsp;We’ll pay you to build it.<br />
              Have <strong>extra storage space?</strong> &nbsp;The network will pay you to rent it.</p>
            <form className={validationMessage !== "" ? "error" : ""} onSubmit={onSubmit} noValidate>
              <div className="input-container">
                <input type="email" placeholder="no@spam.com" value={email} onChange={onChange} onFocus={onFocus} />
                {isValidEmail && <img src="/images/icons/check-circle.svg" />}
              </div>
              <button className="primary" type="submit" >JOIN US</button>
              {validationMessage !== "" && <p className="error">{validationMessage}</p>}
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

export default NewsletterSignup