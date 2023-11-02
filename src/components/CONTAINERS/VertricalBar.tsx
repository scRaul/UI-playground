interface VerticalBarProps {
  className?: string;
  children: React.ReactNode;
}
function VerticalBar(props: VerticalBarProps) {
  return (
    <div
      className={`flex flex-col gap-1 items-center w-fit h-full p-3 justify-between ${props.className}`}
    >
      {props.children}
    </div>
  );
}
export default VerticalBar;
