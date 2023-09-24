import { BookCard } from "../../components/BookCard/BookCard";
import "./BooksConteiners.css";

interface PropTypes {
  books: any[];
}

const BooksConteiners = ({ books }: PropTypes) => {
  return (
    <div className="bookList">
      <div className="bookList__list">
        {books.map((book) => {
          return (
            <div className="test">
              <BookCard
                key={book.id}
                volumeInfo={book.volumeInfo}
                book={book}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BooksConteiners;
