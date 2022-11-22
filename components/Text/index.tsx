import * as React from 'react';
import ResponsiveComponent, {
  ResponsiveComponentProps,
} from '../ResponsiveComponent';

interface TextProps extends React.StyleHTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

export default function Text({
  as = 'span',
  ...rest
}: TextProps & ResponsiveComponentProps<typeof as>) {
  return (
    <ResponsiveComponent as={as} className={'rl_text'} {...rest}>
      {rest.children}
    </ResponsiveComponent>
  );
}
