import * as React from 'react';
import RLComponent, { asType, RLComponentBaseProps } from '../RLComponent';

export interface PageProps {
  title?: string;
}

type thisElementProps = PageProps & RLComponentBaseProps;

function _Page({ title, className, ...rest }: thisElementProps) {
  React.useEffect(() => {
    if (title && document.title !== title) {
      document.title = title;
    }
    return () => {
      document.title = document.baseURI.toString();
    };
  }, [title]);
  return (
    <RLComponent className="rl_page" as={'div'} {...rest}>
      {rest.children}
    </RLComponent>
  );
}

const Page = React.forwardRef<asType, thisElementProps>((props, ref) =>
  _Page({ ...props, ref })
);

export default Page;
