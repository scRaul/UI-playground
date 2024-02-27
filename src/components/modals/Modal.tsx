interface ModalProps {
  modalOpen: boolean;
  trigger: React.ReactElement;
  children: React.ReactNode;
  xOffset?: number;
  yOffset?: number;
}

export default function Modal(props: ModalProps) {
  const x = props.xOffset || 0;
  const y = props.yOffset || 0;
  return (
    <div className="relative">
      {props.trigger}
      <div
        style={{
          width: "100%",
          backgroundColor: "transparent",
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
        }}
        hidden={!props.modalOpen}
      >
        {props.children}
      </div>
    </div>
  );
}
//ex use:
/*
<Modal
    modalOpen={modalOpen[5]}
    xOffset={-20}
    yOffset={-80}
    trigger={<MousePointerClick onClick={() => toggleModal(5)} />}
>
<div className="w-10 h-20 bg-amber-600">Hello</div>
</Modal>

*/
