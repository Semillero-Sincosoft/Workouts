import { useState } from "react";
import CardComment from "./components/CardComment";
import { comentarios } from "./components/data";
import { TextArea } from "./components/TextArea";

function App() {
  const [coments, setComents] = useState(comentarios);

  return (
    <>
      <section className="container-card">
        {coments.map((comentario) => (
          <section className="container-card" key={comentario.id}>
            <CardComment comentario={comentario} />
            {comentario.replies.length > 0 && (
              <section className="container-replies">
                <CardComment comentario={comentario.replies[0]} />
                <CardComment comentario={comentario.replies[1]} />
              </section>
            )}
          </section>
        ))}
      </section>
      <TextArea />
    </>
  );
}

export default App;
