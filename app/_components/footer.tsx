import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmailBtn from "./email-btn";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return <div className="fixed bottom-0 left-0 w-full py-2 bg-[#e74c3c] text-white">
        <div className="wrapper">
            <div className="flex justify-between items-center">
                <EmailBtn />
                <ul className="flex gap-4 text-xl">
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/oumarmimouni">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>

                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/omimouni">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>

                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://x.com/oumarmimouni">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </div>
}