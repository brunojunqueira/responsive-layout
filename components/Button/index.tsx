import * as React from 'react';
import { Icon } from '@iconify/react';
import ResponsiveComponent, {
  ResponsiveComponentProps,
} from '../ResponsiveComponent';

interface ButtonProps {}

export default function Button({
  as = 'button',
  ...rest
}: ButtonProps & ResponsiveComponentProps<typeof as>) {
  return (
    <ResponsiveComponent className="rl_button" as={as} {...rest}>
      {rest.children}
    </ResponsiveComponent>
  );
}
