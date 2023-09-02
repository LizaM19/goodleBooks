import "./BookCard.css";
import notFound from "../../assets/notFound.png";

interface PropTypes {
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

const BookCard = ({ volumeInfo }: PropTypes) => {
  const imgSrc = volumeInfo.imageLinks
    ? volumeInfo.imageLinks.thumbnail
    : notFound;
  const title = volumeInfo.title ? volumeInfo.title : "Unknown";
  const authors = volumeInfo.authors ? volumeInfo.authors[0] : "Unknown";

  return (
    <div className="BookCard">
      <figure>
        <img src={imgSrc} alt={title} />
      </figure>
      <h3>{title}</h3>
      <h4>{authors}</h4>
    </div>
  );
};
export { BookCard };
