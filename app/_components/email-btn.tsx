"use client"

import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function EmailBtn() {
    const [copied, setCopied] = useState(false);
    const email = "hello@oumar.site";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button onClick={handleCopy} className="flex items-center gap-2">
            <FontAwesomeIcon icon={copied ? faCheck : faCopy} className={copied ? "text-green-300" : ""} />
            {copied ? (
                <span>Copied!</span>
            ) : (
                <>
                    <span>
                        <span className="font-bold">hello</span>
                        @oumar.site
                    </span>
                </>
            )}
        </button>
    );
}