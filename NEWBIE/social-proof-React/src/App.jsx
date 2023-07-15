import "./social-proof.css";
import ContentStars from "./components/ContentStars";
function App() {
  return (
    <main className="container">
      <section className="content flex-and-direction">
        <header className="title">
          <ContentStars classContentStars  />
        </header>
      </section>
    </main>
  );
}

export default App;
