import Card from "./components/Card";

const comentario1 = {
  id: 1,
  content:
    "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  createdAt: "1 month ago",
  score: 12,
  user: {
    image: {
      png: "./images/avatars/image-amyrobson.png",
      webp: "./images/avatars/image-amyrobson.webp",
    },
    username: "amyrobson",
  },
  replies: [],
};
const comentario2 = {
  id: 2,
  content:
    "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
  createdAt: "2 weeks ago",
  score: 5,
  user: {
    image: {
      png: "./images/avatars/image-maxblagun.png",
      webp: "./images/avatars/image-maxblagun.webp",
    },
    username: "maxblagun",
    replies: [],
  },
};
const comentario3 = {
  id: 4,
  content:
    "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
  createdAt: "2 days ago",
  score: 2,
  replyingTo: "ramsesmiron",
  user: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },
    username: "juliusomo",
  },
  replies: [],
};
const comentarios = [
  comentario1,comentario2,comentario3
]
function App() {


  return (
    <>
      <section className="container-card">
        {
          comentarios.map((comentario) => 
          <Card key={comentario.id} comentario={comentario}/>)
        }
      </section>
    </>
  );
}

export default App;
