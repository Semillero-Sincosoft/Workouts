import Card from "./components/Card";
import { comentarios } from "./components/data";
function App() {
  return (
    <>
      <section className="container-card">
        {comentarios.map((comentario) => (
          <Card key={comentario.id} comentario={comentario} />
        ))}
      </section>
    </>
  );
}
export default App;