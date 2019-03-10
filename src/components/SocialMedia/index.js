import React from "react";

import styles from "./index.module.css";

// Icons
import Github from "./svg/Github";
import Linkedin from "./svg/Linkedin";
import Behance from "./svg/Behance";
import Fb from "./svg/Fb";
import Email from "./svg/Email";
import Medium from "./svg/Medium";

const socialMedia = [
  {
    icon: Github,
    link: "https://github.com/santospatrick"
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/patrick-santos-b08143106/"
  },
  {
    icon: Behance,
    link: "https://www.behance.net/santospatrick"
  },
  {
    icon: Fb,
    link: "https://www.facebook.com/patrick.santos.dev"
  },
  {
    icon: Email,
    link:
      "mailto:patrickspteixeira@gmail.com?Subject=Site | Vamos Trabalhar Juntos!"
  },
  {
    icon: Medium,
    link: "https://medium.com/@patrickspteixeira"
  }
];

function SocialMedia() {
  return (
    <ul className={styles.socialMediaContainer}>
      {socialMedia.map((item, index) => (
        <li key={index}>
          <a
            target={item.link.includes("mailto") ? "_top" : "_blank"}
            href={item.link}
          >
            <item.icon className={styles.socialMediaSvg} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMedia;
