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
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
}
export interface IHeading {
  type: HeadingEnum;
  children: ReactNode;
  className?: string;
}


export interface IImage{
  src: StaticImageData | string;
  alt?: string;
  height?: number;
  width?: number;
  style?: any;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  caption?: string;
}

export interface IHome{
  name: string;
  data: string;
  roles: string[];
}

type skill = {
  title: string;
  items: {
    icon: string;
    title: string;
  }[]
}

export interface ISkills{
  heading: string;
  intro: string;
  skills: skill[];
}