import * as React from 'react';
import { StyleAttributes, StyleBooleans, StyleProperties } from '../../style';

export type asType =
  | keyof JSX.IntrinsicElements
  | React.JSXElementConstructor<any>;

export type RLComponentBaseProps = Omit<RLComponentProps, 'as'>;

interface RLComponentProps
  extends StyleAttributes,
    StyleBooleans,
    StyleProperties,
    Omit<React.HTMLAttributes<any>, 'color' | 'translate'> {
  as: asType;
  children?: React.ReactNode;
  ref?: React.Ref<any>;
}

export default function RLComponent({
  as,
  children,
  className = '',
  ref,
  ...rest
}: RLComponentProps) {
  const AsElement = as;
  const [styleAttributes, setStyleAttributtes] = React.useState<string[]>();
  const [styleProperties, setStyleProperties] = React.useState<{}>();

  React.useEffect(() => {
    const _attributtes = [...Object.values({ ...rest }), ...Object.keys(rest)];
    const _properties: StyleProperties = { ...rest } as StyleProperties;

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
          marginTop: _properties.mt,
          marginBottom: _properties.mb,
          marginLeft: _properties.ml,
          marginRight: _properties.mr,
        },
        ..._properties,
      }));
    }
  }, []);
  return (
    <AsElement
      ref={ref}
      className={
        'rl_component ' + className + styleAttributes?.map((att) => att)
      }
      style={styleProperties}
      {...rest}
    >
      {children}
    </AsElement>
  );
}
