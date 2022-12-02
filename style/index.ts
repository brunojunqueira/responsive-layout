import { Color } from './colors';
import 'css-properties';

type strumber = string | number;

type CSSProps = Omit<
  { [key in keyof CSSStyleDeclaration]?: strumber },
  'flex' | 'color'
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
  color?: Color | (string & {});
  bgColor?: Color | (string & {});
  bg?: string;
  m?: strumber;
  mt?: strumber;
  ml?: strumber;
  mr?: strumber;
  mb?: strumber;
  ms?: strumber;
  me?: strumber;
  mx?: strumber;
  my?: strumber;
  p?: strumber;
  pt?: strumber;
  pb?: strumber;
  pl?: strumber;
  pr?: strumber;
  ps?: strumber;
  pe?: strumber;
  px?: strumber;
  py?: strumber;
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
