import "./Login.css";
import { useCallback, useState } from "react";
import { useIdentityContext } from "react-netlify-identity-gotrue";
export default function SignUp() {
  const identity = useIdentityContext();
  const [signUpData, setsignUpData] = useState({});
  const [metaData, setMetaData] = useState({});
  const [error, setError] = useState("");

  const updateData = useCallback(
    (e) => {
      signUpData[e.target.name] = e.target.value;
    },
    [signUpData]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    signUpData.user_metadata = metaData;
    setsignUpData(signUpData);
    await identity.signup(signUpData).catch((e) => setError(e.message));
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div>
          <label>
            <input
              name="username"
              placeholder="GitHub User Name"
              onChange={(e) => setMetaData({ gitId: e.target.value })}
              type="text"
              required
            />{" "}
          </label>
        </div>
        <div>
          <label>
            <input
              name="email"
              type="text"
              placeholder="Email "
              onChange={updateData}
            />
          </label>
        </div>
        <div>
          <label>
            <input name="password"  placeholder="Password" onChange={updateData} type="text" />{" "}
          </label>
        </div>
        <div>{error}</div>
        <button>submit</button>
      </form>
    </div>
  );
}
