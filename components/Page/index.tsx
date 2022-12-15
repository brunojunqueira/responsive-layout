import * as React from 'react';
import RLComponent, { asType, RLComponentBaseProps } from '../RLComponent';

export interface PageProps {
  path: string;
  title?: string;
}

type thisElementProps = PageProps & RLComponentBaseProps;

function _Page({ path, title, className, ...rest }: thisElementProps) {
  const show = window.location.pathname === path;

  React.useEffect(() => {
    if (title && document.title !== title) {
      document.title = title;
    }
    return () => {
      document.title = document.baseURI.toString();
    };
  }, [title]);
  return (
    show && (
      <RLComponent className="rl_page" as={'div'} {...rest}>
        {rest.children}
      </RLComponent>
    )
  );
}

const Page = React.forwardRef<asType, thisElementProps>((props, ref) =>
  _Page({ ...props, ref })
);

export default Page;
