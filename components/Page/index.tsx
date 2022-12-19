import * as React from 'react';
import { useRLContext } from '../../contexts/LayoutContext';
import RLComponent, { asType, RLComponentBaseProps } from '../RLComponent';

export interface PageProps {
  path: string;
  title?: string;
}

type thisElementProps = PageProps & RLComponentBaseProps;

function _Page({ path, title, className, ...rest }: thisElementProps) {
  const { currentPath } = useRLContext();
  React.useEffect(() => {
    if (title && document.title !== title && path === currentPath) {
      document.title = title;
    }
    return () => {
      document.title = document.baseURI.toString();
    };
  }, []);
  return (
    path === currentPath && (
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
