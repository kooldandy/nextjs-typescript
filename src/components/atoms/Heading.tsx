import React, { FC } from "react";
import { IHeading, HeadingEnum } from "@interfaces/index";

const Heading: FC<IHeading> = (props: IHeading) => {
  const { type, children, className="" } = props;
  return (
  <header>
    {type === HeadingEnum.H1 && <h1 className={className}>{children}</h1>} 
    {type === HeadingEnum.H2 && <h2 className={className}>{children}</h2>}
    {type === HeadingEnum.H3 && <h3 className={className}>{children}</h3>} 
    {type === HeadingEnum.H4 && <h4 className={className}>{children}</h4>}
    {type === HeadingEnum.H5 && <h5 className={className}>{children}</h5>} 
  </header>
  );
};

export default Heading;
