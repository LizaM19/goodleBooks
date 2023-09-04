import { useEffect, useState} from "react";


function useGoogleAPIRecall  (paramType: string)  {

    const [data, setData] = useState<any>([]);
    const googleBooksData = async () => {
    
            let url = `https://www.googleapis.com/books/v1/volumes?q=${paramType}&langRestrict=ru&maxResults=10`;
            const response = await fetch(url);
            const responseJson = await response.json();
            setData(responseJson.items)
    }

    useEffect(() => {
      googleBooksData()
  }, [])

    return { data};
}

export { useGoogleAPIRecall }