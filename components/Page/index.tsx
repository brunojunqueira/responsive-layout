import * as React from 'react';
import ResponsiveComponent, {
  ResponsiveComponentProps,
} from '../ResponsiveComponent';

interface PageProps {
  title?: string;
  iconSrc?: string;
}

export default function Page({
  title,
  iconSrc,
  ...rest
}: PageProps & ResponsiveComponentProps<'div'>) {
  const [oldIcon, setOldIcon] = React.useState('');
  React.useEffect(() => {
    let link: HTMLLinkElement = document.querySelector('#icon');
    if (document.title !== title) {
      document.title = title;
    }
    if (link) {
      setOldIcon(link.href);
      link.rel = 'icon';
      link.href = iconSrc;
    } else {
      if (iconSrc) {
        link = document.createElement('link');
        link.id = 'icon';
        link.rel = 'icon';
        link.href = iconSrc;
        document.head.appendChild(link);
      }
    }
    return () => {
      try {
        document.title = document.baseURI.toString();
        link.href = oldIcon;
      } catch {}
    };
  }, [title, iconSrc]);
  return (
    <ResponsiveComponent className="rl_page" as={'div'} {...rest}>
      {rest.children}
    </ResponsiveComponent>
  );
}
