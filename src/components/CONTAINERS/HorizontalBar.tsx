interface HorizontalBarProps {
  className?: string;
  children: React.ReactNode;
}
function HorizontalBar(props: HorizontalBarProps) {
  return (
    <div
      className={`flex gap-1 items-center w-full h-fit p-3 justify-between ${props.className}`}
    >
      {props.children}
    </div>
  );
}
export default HorizontalBar;
