import * as React from 'react';
import ResponsiveComponent, {
  ResponsiveComponentProps,
} from '../ResponsiveComponent';

interface HeaderProps {}

export default function Header({
  as = 'div',
  children,
  ...rest
}: HeaderProps & ResponsiveComponentProps<typeof as>) {
  return (
    <ResponsiveComponent as={as} className="rl_header" {...rest}>
      {children}
    </ResponsiveComponent>
  );
}
