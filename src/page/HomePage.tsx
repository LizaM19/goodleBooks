import { useEffect, useState } from "react";
import useGoogleAPIRecall from "../hooks/UseGoogleAPI";
import BooksConteiners from "../components/BooksConteiners/BooksConteiners";
import store from "../components/Header/Search/Store";
import { addedSearchResult } from "../components/Header/Search/SearchResultsAppState";
import { Item } from "../components/Data";
import "../components/Header/Header.css";
import "../components/BooksConteiners/BooksConteiners.css";

function HomePage() {
  const [items, setItems] = useState<Item[]>([]);
  const [message, setMessage] = useState<string>("");
  const [updated, setUpdated] = useState<string>(message);

  useEffect(() => {
    if (updated) {
      store.dispatch(addedSearchResult(updated));
      useGoogleAPIRecall
        .searchBooks(updated)
        .then((res) => {
          console.log(res.data.items);
          setItems(res.data.items);
        })
        .catch();
    }
  }, [updated]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setUpdated(message);
  };

  return (
    <div>
      <div className="component">
        <input
          placeholder="Введите название книги или автора"
          type="text"
          className="message"
          onChange={handleChange}
          value={message}
        />
        <button className="button" onClick={handleClick}>
          Найти
        </button>
      </div>
      <div>{<BooksConteiners books={items} />}</div>
    </div>
  );
}

export default HomePage;
