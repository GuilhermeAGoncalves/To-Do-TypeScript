// @flow
import * as React from "react";
import * as C from "./Title.style";

type Props = {
  children?: string;
};
export const Title = ({ children }: Props) => {
  return (
    <>
      <C.Title>
        <h1>{children}</h1>
      </C.Title>
    </>
  );
};
