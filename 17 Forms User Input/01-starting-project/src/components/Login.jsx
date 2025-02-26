import { useRef, useState } from "react";
export default function Login() {
  const [formisInavlid, setFormIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleLogin(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = !enteredEmail.includes("@");

    if(emailIsValid){
      setFormIsInvalid(true);
      return;
    }
    setFormIsInvalid(false);
    console.log("Sending Http request..")
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}
          />
          <div className="control-error">
            {formisInavlid && <p> Enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </p>
    </form>
  );
}
