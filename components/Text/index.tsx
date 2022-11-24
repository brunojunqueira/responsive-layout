import * as React from 'react';
import RLComponent, { asType, RLComponentBaseProps } from '../RLComponent';

export interface TextProps {
  as?: asType;
}

type thisElementProps = TextProps & RLComponentBaseProps;

function _Text({ as = 'span', ...rest }: thisElementProps) {
  return (
    <RLComponent as={as} className={'rl_text'} {...rest}>
      {rest.children}
    </RLComponent>
  );
}

const Text = React.forwardRef<asType, thisElementProps>((props, ref) =>
  _Text({ ...props, ref })
);

export default Text;
