import React from "react";
import "./modal.css";

const Background = ({ children, onClick }) => (
  <div className="background" onClick={onClick}>
    {children}
  </div>
);

const ClickCapturer = ({ onClick, children }) => (
  <div className="click-capturer" onClick={(e) => e.stopPropagation()}>
    <CloseButton onClick={onClick} />
    {children}
  </div>
);

const CloseButton = ({ onClick }) => (
  <button type="button" onClick={onClick} className="close"></button>
);

const Modal = ({ children, close }) => {
  return (
    <Background onClick={close}>
      <ClickCapturer onClick={close}>{children}</ClickCapturer>
    </Background>
  );
};

export default Modal;
