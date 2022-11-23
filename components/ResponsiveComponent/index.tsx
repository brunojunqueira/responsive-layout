import * as React from 'react';
import { StyleAttributes, StyleBooleans, StyleProperties } from '../../style';

export type asType =
  | keyof JSX.IntrinsicElements
  | React.JSXElementConstructor<any>;

export interface ResponsiveComponentProps<K extends asType>
  extends StyleAttributes,
    StyleBooleans,
    StyleProperties,
    Omit<React.HTMLAttributes<K>, 'color' | 'translate'> {
  as?: asType;
  children?: React.ReactNode;
  ref?: React.Ref<K>;
}

export default function ResponsiveComponent({
  as = 'div',
  children,
  className = '',
  ref,
  ...rest
}: ResponsiveComponentProps<typeof as>) {
  const AsElement = as;
  const [styleAttributes, setStyleAttributtes] = React.useState<string[]>();
  const [styleProperties, setStyleProperties] =
    React.useState<StyleProperties>();
  const [styleBooleans, setStyleBooleans] = React.useState<string[]>();

  React.useEffect(() => {
    const _attributtes = Object.values({ ...rest }) as StyleAttributes[];
    const _properties = { ...rest } as StyleProperties;
    const _booleans = Object.keys(rest) as (keyof StyleBooleans)[];

    if (_attributtes) {
      setStyleAttributtes(() => _attributtes.map((_att) => ' ' + _att));
    }
    if (_properties) {
      setStyleProperties(() => ({
        ...{
          background: _properties.bg,
          backgroundColor: _properties.bgColor,
          color: _properties.color,
          flexDirection: _properties.flexDir,
          marginTop:
            typeof _properties.mt === 'string'
              ? _properties.mt
              : String(_properties.mt),
          marginBottom:
            typeof _properties.mb === 'string'
              ? _properties.mb
              : String(_properties.mb),
          marginLeft:
            typeof _properties.ml === 'string'
              ? _properties.ml
              : String(_properties.ml),
          marginRight:
            typeof _properties.mr === 'string'
              ? _properties.mr
              : String(_properties.mr),
        },
        ..._properties,
      }));
    }
    if (_booleans) {
      setStyleBooleans(() => _booleans.map((key) => ' ' + key));
    }
  }, []);
  return (
    <AsElement
      ref={ref}
      className={
        className +
        styleAttributes?.map((att) => att) +
        styleBooleans?.map((boo) => boo)
      }
      style={styleProperties}
      {...(rest as React.HTMLAttributes<any>)}
    >
      {children}
    </AsElement>
  );
}
