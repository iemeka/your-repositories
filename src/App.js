import "./App.css";

import Head from "./head/Head";
import Content from "./content/Content";
import NetlifyIdentityContext from "react-netlify-identity-gotrue";

function App() {
  return (
    <NetlifyIdentityContext url={"https://your-repositories.netlify.app/"}>
      <div className="App">
        <Head />
        <Content />
      </div>
    </NetlifyIdentityContext>
  );
}

export default App;
