import { comentario1} from "./comments.js";
import { createComment } from "./create-comment.js";

const comentarios = [comentario1];
//id,p,timeAgo,score,img,username
comentarios.forEach(createComment);
