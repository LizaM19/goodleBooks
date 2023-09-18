
import axios, { AxiosResponse } from 'axios';
import { Root } from '../components/Data';

class UseGoogleAPIRecall  {
    
  private url = `https://www.googleapis.com/books/v1/volumes`;
      
  public searchBooks(val: string): Promise<AxiosResponse<Root>> {
    console.log("Watch out!!! "+ val);
    return axios.get<Root>(this.url+"?q="+val);
}


}
const useGoogleAPIRecall = new UseGoogleAPIRecall();
export default useGoogleAPIRecall;