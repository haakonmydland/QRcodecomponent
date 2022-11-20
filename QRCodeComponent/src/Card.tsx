import { CardInterface } from "./types";
import style from "./Card.module.css";

export default function Card({ image, title, body }: CardInterface) {
  return (
    <div className={style.card}>
      <img className={style.image} src={image} alt="Qr code to link" />
      <h1 className={style.title}>{title}</h1>
      <p className={style.body}>{body}</p>
    </div>
  );
}
