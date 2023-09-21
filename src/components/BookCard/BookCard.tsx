import "./BookCard.css";
import notFound from "../../assets/notFound.png";
import { Link } from "react-router-dom";
import {VolumeInfo } from "../Data";

interface Props {
  volumeInfo: VolumeInfo;
}

const BookCard = ({volumeInfo }: Props) => {
  const imgSrc = volumeInfo.imageLinks
    ? volumeInfo.imageLinks.thumbnail
    : notFound;
  const title = volumeInfo.title ? volumeInfo.title : "Unknown";
  const authors = volumeInfo.authors ? volumeInfo.authors[0] : "Unknown";

  return (
    <Link
      to={`/about/${title}`}
      className="BookCard"
    >
      <figure>
        <img src={imgSrc} alt={title} width="150%" height="100%" />
      </figure>
      <h3>{title}</h3>
      <h4>{authors}</h4>
    </Link>
  );
};
export { BookCard };
