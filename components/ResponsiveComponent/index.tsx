import * as React from 'react';
import { StyleAttributes, StyleBooleans, StyleProperties } from '../../style';

export interface ResponsiveComponentProps<
  K extends
    | keyof HTMLElementTagNameMap
    | ((...any: any) => React.ReactElement<any>)
> extends StyleAttributes,
    StyleBooleans,
    StyleProperties,
    Omit<React.HTMLAttributes<K>, 'color' | 'translate'> {
  as?: keyof HTMLElementTagNameMap | ((...any: any) => React.ReactElement<any>);
  children?: React.ReactNode;
}

export default function ResponsiveComponent({
  as = 'div',
  children,
  className = '',
  ...rest
}: ResponsiveComponentProps<typeof as>) {
  const AsElement = as;

  const [styleAttributes, setStyleAttributtes] = React.useState<string[]>();
  const [styleProperties, setStyleProperties] =
    React.useState<StyleProperties>();
  const [styleBooleans, setStyleBooleans] = React.useState<string[]>();

  React.useEffect(() => {
    const _attributtes = { ...(rest as StyleAttributes) };
    const _properties = { ...(rest as StyleProperties) };
    const _booleans = { ...(rest as StyleBooleans) };

    if (_attributtes) {
      setStyleAttributtes(() =>
        Object.keys(_attributtes)?.map((key) => ' ' + _attributtes[key])
      );
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
      setStyleBooleans(() => Object.keys(_booleans).map((key) => ' ' + key));
    }
  }, []);
  return (
    <AsElement
      className={
        className +
        styleAttributes?.map((att) => att) +
        styleBooleans?.map((boo) => boo)
      }
      style={styleProperties}
      {...(rest as React.HTMLAttributes<typeof as>)}
    >
      {children}
    </AsElement>
  );
}
