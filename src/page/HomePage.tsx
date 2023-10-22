import { useEffect, useState } from "react";
import useGoogleAPIRecall from "../hooks/UseGoogleAPI";
import BooksConteiners from "../components/BooksConteiners/BooksConteiners";
import { Item } from "../components/Data";
import "../components/Header/Header.css";
import { VolumeInfo } from "../components/Data";
import "../components/BooksConteiners/BooksConteiners.css";
import { Link } from "react-router-dom";

function HomePage() {
  const [items, setItems] = useState<Item[]>([]);
  const [message, setMessage] = useState<string>("");
  const [updated, setUpdated] = useState<string>(message);
  const [start, setStart] = useState(1);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    if (updated) {
      useGoogleAPIRecall
        .searchBooks(updated, start)
        .then((res) => {
          setItems(res.data.items);
          setTotal(res.data.totalItems);
        })
        .catch();
    }
  }, [updated]);

  useEffect(() => {
    if (start) {
      useGoogleAPIRecall
        .searchBooks(updated, start)
        .then((res) => {
          setItems(res.data.items);
        })
        .catch();
    }
  }, [start]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    return setUpdated(message);
  };

  const handleClickNext = () => {
    setStart(start + 15);
  };

  const handleClickBack = () => {
    if (start == 15) {
      return setStart(0);
    } else {
      return setStart(start - 15);
    }
  };

  const Button = () => {
    if (total > 0 && total > 15) {
      if (start > 15) {
        return (
          <div>
            <button className="button" onClick={handleClickBack}>
              Назад
            </button>
            <button className="button" onClick={handleClickNext}>
              Вперед
            </button>
          </div>
        );
      } else {
        return (
          <div>
            <button className="button" onClick={handleClickNext}>
              Вперед
            </button>
          </div>
        );
      }
    }
  };

  return (
    <div>
      <div className="component"><button className="button">
        <Link  className="link" to={`/favorites/`}>
          Избранное
        </Link></button>
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
      {total == 0 ? (
        <div className="text">Поиск не дал результатов. Попробуйте еще</div>
      ) : (
        <div> {<BooksConteiners books={items} />}</div>
      )}
      <div>
        <Button />
      </div>
    </div>
  );
}
export default HomePage;
