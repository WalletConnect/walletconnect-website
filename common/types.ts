export interface IProject {
  name: string;
  icon: string;
  url: string;
}

export interface IDataElement {
  name: string;
  homepage: string;
}

export interface IDisplayElementProps {
  ids: Array<string>;
  data: Array<IDataElement>;
}