import * as React from 'react';
import ResponsiveComponent, {
  ResponsiveComponentProps,
} from '../ResponsiveComponent';

export interface ButtonProps {}

let exass: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;

function _Button({
  as = 'button',
  className = 'rl_button',
  ...rest
}: ButtonProps & ResponsiveComponentProps<typeof as>) {
  exass = as;
  return (
    <ResponsiveComponent className="rl_button" as={as} {...rest}>
      {rest.children}
    </ResponsiveComponent>
  );
}

const Button = React.forwardRef<
  JSX.IntrinsicElements | React.JSXElementConstructor<any>,
  ButtonProps & ResponsiveComponentProps<typeof exass>
>((props, ref) => _Button({ ...props, ref }));

export default Button;
