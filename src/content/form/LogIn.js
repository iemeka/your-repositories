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
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label>
          email:
          <input name="email" type="text" onChange={updateData} />
        </label>
      </div>
      <div>
        <label>
          password: <input name="password" onChange={updateData} type="text" />{" "}
        </label>
      </div>
      <div>{error}</div>
      <button>submit</button>
    </form>
  );
}
