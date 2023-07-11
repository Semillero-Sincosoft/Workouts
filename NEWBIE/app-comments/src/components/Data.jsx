const comentario1 = {
  id: 1,
  content:
    "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  createdAt: "1 month ago",
  score: 12,
  user: {
    image: {
      png: "./src/assets/avatars/image-amyrobson.png",
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
      png: "./src/assets/avatars/image-maxblagun.png",
      webp: "./images/avatars/image-maxblagun.webp",
    },
    username: "maxblagun",
    replies: [
      {
        id: 3,
        content:
          "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        createdAt: "1 week ago",
        score: 4,
        replyingTo: "maxblagun",
        user: {
          image: {
            png: "./images/avatars/image-ramsesmiron.png",
            webp: "./images/avatars/image-ramsesmiron.webp",
          },
        },
      },
    ],
  },
};

export const comentarios = [comentario1, comentario2];