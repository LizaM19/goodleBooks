import { Link, useLocation } from "react-router-dom";
import "../aboutPage/AboutPage.css";
import useGoogleAPIRecall from "../../hooks/UseGoogleAPI";
import { VolumeInfo } from "../../components/Data";
import { useEffect, useState } from "react";
import notFound from "../../assets/notFound.png";

const AboutPage = () => {
  const location: any = useLocation();
  const { data } = location.state;
  const [items, setItems] = useState<VolumeInfo>();

  useEffect(() => {
    useGoogleAPIRecall
      .searchAboutBooks(data.id)
      .then((res) => {
        setItems(res.data.volumeInfo);
      })
      .catch();
  }, []);

  const title = items?.title ? items.title : "Без названия";
  const authors = items?.authors ? items.authors[0] : "Автор неизвестен";
  const imgSrc = items?.imageLinks ? items.imageLinks.medium : notFound;
  const dataPublish = items?.publishedDate
    ? "Дата публикации: " + items.publishedDate
    : "";
  const publisher = items?.publisher ? "Издательство: " + items.publisher : "";
  const pageCount = items?.pageCount
    ? "Количество страниц: " + items.pageCount
    : "";

  return (
    <div className="page">
      <div className="img_container">
        <figure>
          <img className="img" src={imgSrc} />
        </figure>
      </div>
      <div className="text_container">
        <p>{authors}</p>
        <h4>{title}</h4>
        <h4>{dataPublish}</h4>
        <p>{data.volumeInfo.description}</p>
        <h4>{publisher}</h4>
        <h4>{pageCount}</h4>
      </div>
    </div>
  );
};

export { AboutPage };
