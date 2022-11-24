import { color } from './colors';
import 'css-properties';

type CSSProps = Omit<
  { [key in keyof CSSStyleDeclaration]?: string | number },
  'flex'
>;

export interface StyleAttributes {
  location?:
    | 'left'
    | 'center'
    | 'right'
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
}

export interface StyleProperties extends CSSProps {
  color?: color | (string & {});
  bgColor?: color | (string & {});
  bg?: color | (string & {});
  mt?: string | number;
  ml?: string | number;
  mr?: string | number;
  mb?: string | number;
  dir?: 'row' | 'column' | string;
  flexDir?: 'row' | 'column' | string;
}

export interface StyleBooleans {
  flex?: true;
  flexColumn?: true;
  justifyBetween?: true;
  justifyAround?: true;
  justifyEvenly?: true;
}
