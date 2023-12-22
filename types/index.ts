import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyle?: string;
  rightIcon?: string;
  onClick?: () => void;
}

export interface SearchManufacturerProps {
  selected: string;
  setSelected: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface CustomerFilterProps {
  title: string;
  setFilter: any;
  options: OptionsProps[];
}

export interface ShowMoreProps {
  setLimit: any;
  pageNumber: number;
  isNext: boolean;
}

// export interface IUser {
//   name: string;
//   email: string;
//   password: string;
// }

interface Credentials {
  email: string;
  password: string;
}

interface AuthOptions {
  providers: Array<{
    name: string;
    credentials: {};
    authorize: (credentials: Credentials) => Promise<any | null>;
  }>;

  session: {
    strategy: string;
  };
  secret: string;
  pages: {
    signIn: string;
  };
}
