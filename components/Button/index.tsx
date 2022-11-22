import * as React from 'react';
import { Icon } from '@iconify/react';
import ResponsiveComponent, {
  ResponsiveComponentProps,
} from '../ResponsiveComponent';

export interface ButtonProps {}

export default function Button({
  as = 'button',
  className = 'rl_button',
  ...rest
}: ButtonProps & ResponsiveComponentProps<typeof as>) {
  return (
    <ResponsiveComponent className="rl_button" as={as} {...rest}>
      {rest.children}
    </ResponsiveComponent>
  );
}
