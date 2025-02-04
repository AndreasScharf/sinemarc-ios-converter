import GitHubButton from "../components/GithubButton";

export default function AboutPage() {
    return (
        <>
            <h1>About Page</h1>
            <div>
                <GitHubButton repoLink="https://github.com/AndreasScharf/sinemarc-ios-converter"></GitHubButton>
            </div>
            <div>
                <h2>Legal Disclaimer</h2>

                <p>This project is provided as a <strong>free and open tool</strong> for anyone to use. It is developed with the sole purpose of helping users and does not generate any commercial benefit.</p>

                <h3>No Affiliation</h3>
                <p>This project is <strong>not affiliated with, endorsed by, or associated with SinemaRC, Siemens, or any other company.</strong> Any references to file formats, protocols, or technologies are for compatibility and informational purposes only.</p>

                <h3>Privacy & Security</h3>
                <p>For privacy reasons, <strong>all processing happens locally in your browser</strong>. No files, data, or user inputs are transmitted to any external server or stored remotely.</p>

                <h3>No Warranty</h3>
                <p>This software is provided <strong>"as is"</strong> without any warranties or guarantees. The author is <strong>not responsible for any issues, data loss, or damages</strong> arising from its use.</p>

                <p>By using this tool, you acknowledge and accept these terms.</p>
`
            </div>
        </>
    );
  }
  
  