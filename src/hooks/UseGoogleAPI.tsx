import { useState, useEffect } from 'react';
import BooksConteiners from '../components/BooksConteiners/BooksConteiners';



const UseGoogleAPIRecall = () => {
    const [data, setBooks] = useState([]);

    useState(() => {
        fetch(
          "https://www.googleapis.com/books/v1/volumes?q=Комнатные цветы&langRestrict=ru&maxResults=10",
        )
          .then((res) => res.json())
          .then((json) => setBooks(json["items"]));
      });

    useEffect(() => {
    },)

    return (
        <div>
        <BooksConteiners books={data} />
      </div>
    );
}

export { UseGoogleAPIRecall }