import * as React from 'react';
import RLComponent, { asType, RLComponentBaseProps } from '../RLComponent';

interface ButtonProps {
  as?: asType;
}

type thisElementProps = ButtonProps & RLComponentBaseProps;

function _Button({
  as = 'button',
  className = 'rl_button',
  ...rest
}: thisElementProps) {
  return (
    <RLComponent className="rl_button" as={as} {...rest}>
      {rest.children}
    </RLComponent>
  );
}

const Button = React.forwardRef<
  asType,
  thisElementProps
>((props, ref) => _Button({ ...props, ref }));

export default Button;
