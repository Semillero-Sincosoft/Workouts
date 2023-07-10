import { createPortal } from "react-dom";
import { Card } from "./components/Card";
import Modal from "./components/Modal";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && createPortal(<Modal />, document.body)}
      <Card />
      <Card />
    </>
  );
}

export default App;
