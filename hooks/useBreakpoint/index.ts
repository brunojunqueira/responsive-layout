import * as React from 'react';

export interface sizesProps {
  xs?: React.ReactNode;
  sm?: React.ReactNode;
  md?: React.ReactNode;
  lg?: React.ReactNode;
  xl?: React.ReactNode;
  '2xl'?: React.ReactNode;
}

const breakpoints = {
  xs: 0,
  sm: 360,
  md: 720,
  lg: 1080,
  xl: 1440,
  '2xl': 2160,
};

export default function useBreakpoint(sizes: sizesProps) {
  const [value, setValue] = React.useState<React.ReactNode>();
  React.useEffect(() => {
    const keys = Object.keys(sizes);
    setValue(sizes[keys[0]]);
    function handleResize() {
      const { innerWidth: width } = window;
      keys.map((key) => {
        if (width > breakpoints[key]) {
          setValue(sizes[key]);
        }
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return value;
}
