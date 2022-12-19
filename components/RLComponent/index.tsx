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
  flex,
  flexColumn,
  justifyAround,
  justifyBetween,
  justifyEvenly,
  location,
  ...rest
}: RLComponentProps) {
  const AsElement = as;
  const [styleAttributes, setStyleAttributtes] = React.useState<string[]>([]);
  const [styleProperties, setStyleProperties] = React.useState<{}>();

  React.useEffect(() => {
    rest.color = colors[rest.color] ?? rest.color;

    setStyleAttributtes(() => {
      let att: string[] = [];
      if (flex) att.push('flex');
      if (flexColumn) att.push('flexColumn');
      if (justifyEvenly) att.push('justifyEvenly');
      if (justifyAround) att.push('justifyAround');
      if (justifyBetween) att.push('justifyBetween');

      return att;
    });

    setStyleProperties(() => {
      let props = [];
      if (rest.bg) props.push(['background', rest.bg]);
      if (rest.bgColor) props.push(['backgroundColor', rest.bgColor]);
      if (rest.color) props.push(['color', rest.color]);
      if (rest.flexDir) props.push(['flexDirection', rest.flexDir]);
      if (rest.m) props.push(['margin', rest.m]);
      if (rest.my || rest.mt) props.push(['marginTop', rest.my || rest.mt]);
      if (rest.my || rest.mb) props.push(['marginBottom', rest.my || rest.mb]);
      if (rest.ml) props.push(['marginLeft', rest.ml]);
      if (rest.mr) props.push(['marginRight', rest.mr]);
      if (rest.mx || rest.ms)
        props.push(['marginInlineStart', rest.mx || rest.ms]);
      if (rest.mx || rest.me)
        props.push(['marginInlineEnd', rest.mx || rest.me]);
      if (rest.p) props.push(['padding', rest.p]);
      if (rest.py || rest.pt) props.push(['paddingTop', rest.py || rest.pt]);
      if (rest.py || rest.pb) props.push(['paddingBottom', rest.py || rest.pb]);
      if (rest.pl) props.push(['paddingLeft', rest.pl]);
      if (rest.pr) props.push(['paddingRight', rest.pr]);
      if (rest.px || rest.ps)
        props.push(['paddingInlineStart', rest.px || rest.ps]);
      if (rest.px || rest.pe)
        props.push(['paddingInlineEnd', rest.px || rest.pe]);
      return { ...Object.fromEntries(props), ...rest };
    });
  }, []);
  return (
    <AsElement
      ref={ref}
      className={className + styleAttributes.map((att) => ' ' + att)}
      style={styleProperties}
      {...rest}
    >
      {children}
    </AsElement>
  );
}
