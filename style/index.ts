import * as React from 'react';
import { color } from './colors';
import 'css-properties';

export type StyleProps = StyleAttributes & StyleBooleans & StyleProperties;

export type CSSProps = { [key in keyof CSSStyleDeclaration]?: string };

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

export interface StyleProperties extends Omit<CSSProps, 'color' | 'flex'> {
  color?: color | (string & {});
  bgColor?: color | (string & {});
  bg?: string;
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
