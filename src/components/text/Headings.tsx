interface textProps {
  children: React.ReactNode;
  className?: string;
}

export function H1(props: textProps) {
  return (
    <h1 className={`inline-block text-4xl md:text-7xl ${props.className}`}>
      {props.children}
    </h1>
  );
}

export function H2(props: textProps) {
  return (
    <h2 className={`inline-block text-3xl md:text-6xl ${props.className}`}>
      {props.children}
    </h2>
  );
}
export function H3(props: textProps) {
  return (
    <h3 className={`inline-block text-2xl md:text-5xl ${props.className}`}>
      {props.children}
    </h3>
  );
}
export function H4(props: textProps) {
  return (
    <h4 className={`inline-block text-xl md:text-4xl ${props.className}`}>
      {props.children}
    </h4>
  );
}
export function H5(props: textProps) {
  return (
    <h5 className={`inline-block text-lg md:text-3xl ${props.className}`}>
      {props.children}
    </h5>
  );
}
export function H6(props: textProps) {
  return (
    <h6 className={`inline-block text-base md:text-2xl ${props.className}`}>
      {props.children}
    </h6>
  );
}
