import BooksConteiners from "../components/BooksConteiners/BooksConteiners";
import { useGoogleAPIRecall } from "../hooks/UseGoogleAPI";

interface ApiData {
  data: any[]
}

function HomePage  (paramType: any)  {
  const { data}: ApiData = useGoogleAPIRecall(paramType);

  return (
    <div>
    <BooksConteiners books={data}/>
    </div>
  );
};

export default HomePage;
