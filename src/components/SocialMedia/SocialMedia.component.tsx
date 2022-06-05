// @flow
import * as React from "react";
type Props = {
  GitHub: string;
  Linkedin: string;
};
export const SocialMedia = ({ Linkedin, GitHub }: Props) => {
  return (
    <>
      <a className="css.Linkedin" target="blank" href={Linkedin}>
        Linkedin
      </a>

      <a className="css.GitHub" target="blank" href={GitHub}>
        GitHub
      </a>
    </>
  );
};
