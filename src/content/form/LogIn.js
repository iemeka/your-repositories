import "./Login.css";

import { useCallback, useState } from "react";
import { useIdentityContext } from "react-netlify-identity-gotrue";

export default function LogIn() {
  const identity = useIdentityContext();
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState("");

  const updateData = useCallback(
    (e) => {
      loginData[e.target.name] = e.target.value;
    },
    [loginData]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginData(loginData);
    await identity
      .login(loginData)
      .then(() => console.log("success!"))
      .catch((e) => setError(e.message));
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label>
            <input
              name="email"
              placeholder="Email"
              type="text"
              onChange={updateData}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              name="password"
              placeholder="Password"
              onChange={updateData}
              type="text"
            />{" "}
          </label>
        </div>
        <div className="error">{error}</div>
        <button>submit</button>
      </form>
    </div>
  );
}
