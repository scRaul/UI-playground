interface HoverBttnProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export default function HoverBttn(props: HoverBttnProps) {
  function handleClick() {
    if (props.onClick) props.onClick();
  }
  return (
    <div
      className="hover:bg-slate-400 transition-colors rounded-xl p-1"
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
}
