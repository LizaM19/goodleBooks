import axios, { AxiosResponse } from "axios";
import { Root } from "../components/Data";

class UseGoogleAPIRecall {
  private url = `https://www.googleapis.com/books/v1/volumes`;

  public searchBooks(val: string, start: number): Promise<AxiosResponse<Root>> {
    return axios.get<Root>(
      this.url + "?q=" + val + "&startIndex=" + start + "&maxResults=15",
    );
  }

  public searchAboutBooks(id: string): Promise<AxiosResponse<Root>> {
    return axios.get<Root>(this.url + "/" + id);
  }
}
const useGoogleAPIRecall = new UseGoogleAPIRecall();
export default useGoogleAPIRecall;
