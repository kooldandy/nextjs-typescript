// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import { StaticImageData } from "next/image";
import { ReactNode } from "react";
export interface IAbout {
  heading: string;
  about: string[];
  profilePic: StaticImageData;
}

export enum HeadingEnum {
  H1 = "h1",
  H2 = "h2",
}
export interface IHeading {
  type: HeadingEnum;
  children: ReactNode;
  className?: string;
}


export interface IImage{
  src: StaticImageData;
  alt?: string;
}

export interface IHOme{
  name: string;
  data: string;
  roles: string[];
}