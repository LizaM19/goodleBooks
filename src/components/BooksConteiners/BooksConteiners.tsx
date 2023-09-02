import { BookCard } from '../../components/BookCard/BookCard';
import "./BooksConteiners.css"

interface PropTypes {
    books: any[],
};

const BooksConteiners = ({books}: PropTypes) => {
    
    return (
    <div >
                        <div className="bookList__list">
                            {books.map((book) => {
                                return <BookCard
                                    key={book.id}
                                    volumeInfo={book.volumeInfo}
                                />
                            })}
                        </div>
    </div>
    )
    
}

export default BooksConteiners