import React from "react";


const GithubAuth = () => {
  return (
    <div className="auth-container">
      <a
        href={
          process.env.NODE_ENV === "production"
            ? "/auth/github"
            : "http://localhost:3001/auth/github"
        }
      >
        <div className="githubBtn">Sign in with Github</div>
      </a>
    </div>
  );
};

export default GithubAuth;