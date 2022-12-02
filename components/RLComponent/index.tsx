import * as React from 'react';
import { StyleAttributes, StyleBooleans, StyleProperties } from '../../style';
import colors from '../../style/colors/colors';

export type asType =
  | keyof JSX.IntrinsicElements
  | React.JSXElementConstructor<any>;

export type RLComponentBaseProps = Omit<RLComponentProps, 'as'>;

interface RLComponentProps
  extends StyleAttributes,
    StyleBooleans,
    StyleProperties,
    Omit<React.HTMLAttributes<any>, 'color' | 'translate' | 'flex'> {
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

  console.log(styleAttributes);

  React.useEffect(() => {
    const _attributtes = [
      ...Object.values({ ...rest } as StyleAttributes),
      ...Object.keys({ ...rest } as StyleBooleans),
    ];

    let _properties = { ...rest } as StyleProperties;

    rest.color = colors[rest.color] ?? rest.color;

    if (_attributtes) {
      setStyleAttributtes(() => _attributtes.map((_att) => ' ' + _att));
    }
    if (_properties) {
      setStyleProperties(() => ({
        ...{
          background: _properties?.bg,
          backgroundColor: _properties?.bgColor,
          color: _properties?.color,
          flexDirection: _properties?.flexDir,
          margin: _properties?.m,
          marginTop: _properties?.my || _properties?.mt,
          marginBottom: _properties?.my || _properties?.mb,
          marginLeft: _properties?.ml,
          marginRight: _properties?.mr,
          marginInlineStart: _properties.mx || _properties?.ms,
          marginInlineEnd: _properties.mx || _properties?.me,
          padding: _properties?.p,
          paddingTop: _properties?.py || _properties?.pt,
          paddingBottom: _properties?.py || _properties?.pb,
          paddingLeft: _properties?.pl,
          paddingRight: _properties?.pr,
          paddingInlineStart: _properties?.px || _properties?.ps,
          paddingInlineEnd: _properties?.px || _properties?.pe,
        },
        ..._properties,
      }));
    }
  }, []);
  return (
    <AsElement
      ref={ref}
      className={
        'rl_component' + styleAttributes?.map((att) => att + ' ' + className)
      }
      style={styleProperties}
      {...rest}
    >
      {children}
    </AsElement>
  );
}
