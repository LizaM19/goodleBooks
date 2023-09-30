import "./BookCard.css";
import notFound from "../../assets/notFound.png";
import { Link } from "react-router-dom";
import { Item, VolumeInfo } from "../Data";

interface Props {
  book: Item;
  volumeInfo: VolumeInfo;
}

const BookCard = ({ volumeInfo, book }: Props) => {
  const id = book.id;
  const imgSrc = volumeInfo.imageLinks
    ? volumeInfo.imageLinks.thumbnail
    : notFound;
  const title = volumeInfo.title ? volumeInfo.title : "Без названия";
  const authors = volumeInfo.authors
    ? volumeInfo.authors[0]
    : "Автор неизвестен";

  return (
    <div className="bookCard">
      <Link className="link" to={`/about/${id}`} state={{ data: book }}>
        <figure>
          <img src={imgSrc} alt={title} />
        </figure>
        <h4>{title}</h4>
        <h5>{authors}</h5>
      </Link>
    </div>
  );
};
export { BookCard, type Props };
