import { useEffect, useState } from "react";

export default function Security() {
  const [netlifyIdentity, setNetlifyIdentity] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (netlifyIdentity) {
      netlifyIdentity.on("close", () => setNetlifyIdentity(null));
    }
    return () => {
      if (netlifyIdentity) netlifyIdentity.off("close");
    };
  }, [netlifyIdentity]);

  return (
    <div>
      <h1>Authentication</h1>
      <button
        onClick={() => {
          setNetlifyIdentity(window.netlifyIdentity);
        }}
      >
        login
      </button>
      {netlifyIdentity ? netlifyIdentity.open() : "identity not defined."}
    </div>
  );
}
