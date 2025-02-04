import { Button } from "react-bootstrap";

const GitHubButton = (repoLink) => {
  return (
    <Button
      href="https://github.com/AndreasScharf/sinemarc-ios-converter"
      target="_blank"
      variant="light"
      className="d-flex align-items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-github mr-2"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.53 2.29 6.53 5.47 7.6.4.07.54-.17.54-.38 0-.19-.01-.69-.01-1.35-2.22.42-2.69-1.07-2.69-1.07-.36-.93-.87-1.18-.87-1.18-.71-.48.05-.48.05-.48.78-.04 1.19.71 1.19.71.69 1.18 1.82.84 2.26.64.07-.5.27-.84.49-1.03-1.72-.2-3.51-.86-3.51-3.83 0-.84.3-1.52.8-2.06-.08-.2-.34-.6.08-1.22 0 0 .64-.2 2.1.8 1.23-.34 2.55-.34 3.78 0 1.46-1 2.1-.8 2.1-.8.42.62.16 1.02.08 1.22.5.54.8 1.22.8 2.06 0 2.97-1.79 3.63-3.51 3.83.29.25.55.74.55 1.47 0 1.06-.01 1.91-.01 2.17 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
      View on GitHub
    </Button>
  );
};

export default GitHubButton;
