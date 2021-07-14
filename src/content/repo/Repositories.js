import "./Repositories.css";
import { useEffect, useRef, useState } from "react";
import { useIdentityContext } from "react-netlify-identity-gotrue";

export default function Repositories() {
  const identity = useIdentityContext();
  const metaData = identity.user.user_metadata;
  const requestOPtions = useRef(null);
  requestOPtions.current = {
    method: "GET",
    headers: { "Content-type": "application/json" },
  };
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/${metaData.gitId}/repos?type=all&sort=updated`,
      requestOPtions.current
    )
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((err) => console.log(err));
  }, [metaData.gitId]);
  return (
    <div className="repo-wrapper">

      {repos
        ? repos.map((repo, index) => (
            <a href={repo.html_url}>
              <div className="one-repo">
                <h2>{repo.name}</h2>
                <p>{repo.description || "none"}</p>
                <p>
                  <p>stars : {repo.stargazers_count}</p>
                  <p> watcher : {repo.watchers_count}</p>
                </p>
              </div>
            </a>
          ))
        : "Loading"}
    </div>
  );
}
