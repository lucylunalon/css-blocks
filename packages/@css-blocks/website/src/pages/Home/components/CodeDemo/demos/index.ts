import code from './code';
import compile from './compile';
import optimize from './optimize';

export interface Tooltip {
  label: string;
  value: string;
  x: number;
  y: number;
}

export interface Data {
  cssExample: string;
  jsxExample: string;
  cssTooltips: Tooltip[];
  jsxTooltips: Tooltip[];
  glimmerExample?: string;
}

export interface Demos {
  code: Data;
  compile: Data;
  optimize: Data;
}
export type Sections = keyof Demos;

let data: Demos = {
  code,
  compile,
  optimize
}

export default data;
