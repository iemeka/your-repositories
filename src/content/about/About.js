import { useEffect, useRef, useState } from "react";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import "./About.css";

export default function About() {
  const identity = useIdentityContext();
  const metaData = identity.user.user_metadata;
  const requestOPtions = useRef(null);
  requestOPtions.current = {
    method: "GET",
    headers: { "Content-type": "application/json" },
  };
  const [about, setAbout] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/${metaData.gitId}`,
      requestOPtions.current
    )
      .then((response) => response.json())
      .then((data) => setAbout(data))
      .catch((err) => console.log(err));
  }, [metaData.gitId]);
  return (
    <div className="about-wrap">
      <div className="img-name">
        <div
          className="img-holder"
          style={{ backgroundImage: about ? `url(${about.avatar_url})` : null }}
        ></div>
        <div className="name">
          <h2>{about ? about.name : "name"}</h2>
        </div>
      </div>
      <div className="details">
        <p className="bio">
          <span className="bold-title">BIO</span>
          <span>{about ? about.bio : ""}</span>
        </p>
        <p className="others">
          <span>
            <span className="bold-title">Followers:</span>{" "}
            {about ? about.followers : null}
          </span>
          <span><span className="bold-title">Following: </span>{about ? about.following : null}</span>
          <span>
          <span className="bold-title">Number Of Repositories (public): </span>
            {about ? about.public_repos : null}
          </span>
        </p>
      </div>
    </div>
  );
}
