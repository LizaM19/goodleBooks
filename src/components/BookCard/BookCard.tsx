import "./BookCard.css";
import notFound from "../../assets/notFound.png";
import noLike from "../../assets/noLike.png";
import like from "../../assets/like.png";
import { Link } from "react-router-dom";
import { Item, VolumeInfo } from "../Data";
import { useEffect, useState } from "react";

interface Props {
  book: Item;
  volumeInfo: VolumeInfo;
}

let img: string = "";
const BookCard = ({ volumeInfo, book }: Props) => {
  const [imgBool, setImg] = useState<number>(0);
  useEffect(() => {}, [imgBool]);

  const favorites = () => {
    if (localStorage.getItem(book.id) != id) {
      localStorage.setItem(book.id, book.id);
      setImg(-1);
    } else {
      localStorage.removeItem(book.id);
      setImg(+1);
    }
  };

  function likeImg(value: string) {
    if (localStorage.getItem(value) != id) {
      img = noLike;
    } else {
      img = like;
    }
  }

  const LikeImgButton = () => {
    if (localStorage.getItem(id) != id) {
      return (
        <figure>
          <img className="like" id="image" onClick={favorites} src={img} />
        </figure>
      );
    } else {
      return (
        <figure>
          <img className="like" id="image" onClick={favorites} src={img} />
        </figure>
      );
    }
  };

  const id = book.id;
  const imgSrc = volumeInfo.imageLinks
    ? volumeInfo.imageLinks.thumbnail
    : notFound;
  const title = volumeInfo.title ? volumeInfo.title : "Без названия";
  const authors = volumeInfo.authors
    ? volumeInfo.authors[0]
    : "Автор неизвестен";

  return (
    <>
      {likeImg(id)}
      <div className="bookCard">
        <LikeImgButton />
        <Link className="link" to={`/about/${id}`} state={{ data: book }}>
          <figure>
            <img src={imgSrc} alt={title} />
          </figure>
          <h4>{title}</h4>
          <h5>{authors}</h5>
        </Link>
      </div>
    </>
  );
};
export { BookCard, type Props };
