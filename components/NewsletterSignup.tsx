import { useState } from "react"
import Validator from "validator"
import jsonp from "jsonp"

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

    let url = "https://arweave.us19.list-manage.com/subscribe/post-json?u=1af1fb1c01c3c7a09aca8efdb&amp&id=440c6ab915";
    url += "&EMAIL=" + email;
    jsonp(url, { param: "c" }, (err, data) => {
      if (err) {
        setIsSucess(false);
        setValidationMessage("! Registration failed.");
      } else if (data.result !== "success") {
        setIsSucess(false);
        setValidationMessage(data.msg);
      } else {
        setIsSucess(true);
      }
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
            <h1>Stay up to date with arweave</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            <form className={validationMessage !== "" ? "error" : ""} onSubmit={onSubmit} noValidate>
              <div className="input-container">
                <input type="email" placeholder="enter email" value={email} onChange={onChange} onFocus={onFocus} />
                {isValidEmail && <img src="/images/icons/check-circle.svg" />}
              </div>
              <button className="primary" type="submit" >Subscribe</button>
              {validationMessage !== "" && <p className="error">{validationMessage}</p>}
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

export default NewsletterSignup