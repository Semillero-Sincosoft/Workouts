import { createPortal } from "react-dom";
import { Card } from "./components/Comment";
import Modal from "./components/Modal";
import { useState } from "react";
import { comments } from "./components/data";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && createPortal(<Modal />, document.body)}
      {comments.map((comentario) => (
        <Card key={comentario.id} comentario={comentario} />
      ))}
    </>
  );
}

export default App;
