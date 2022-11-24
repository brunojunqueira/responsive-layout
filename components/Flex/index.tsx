import * as React from 'react';
import RLComponent, { asType, RLComponentBaseProps } from '../RLComponent';

interface FlexProps {
  as?: asType;
}

type thisElementProps = FlexProps & RLComponentBaseProps;

function _Flex({
  as = 'div',
  className = 'rl_flex',
  ...rest
}: thisElementProps) {
  return (
    <RLComponent className="rl_flex" as={as} {...rest}>
      {rest.children}
    </RLComponent>
  );
}

const Flex = React.forwardRef<asType, thisElementProps>((props, ref) =>
  _Flex({ ...props, ref })
);

export default Flex;
