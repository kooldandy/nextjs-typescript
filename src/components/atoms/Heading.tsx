import React, { FC } from "react";
import { IHeading, HeadingEnum } from "@interfaces/index";

const Heading: FC<IHeading> = (props: IHeading) => {
  const { type, children, className="" } = props;
  return (
  <>
    {type === HeadingEnum.H1 && <h1 className={className}>{children}</h1>} 
    {type === HeadingEnum.H2 && <h2 className={className}>{children}</h2>} 
  </>
  );
};

export default Heading;
