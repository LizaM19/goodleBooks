export interface Root {
  totalItems: number;
  items: Item[];
  volumeInfo: VolumeInfo;
}

export interface Item {
  id: string;
  etag: string;
  volumeInfo?: VolumeInfo;
}

export interface About {
  volumeInfo?: VolumeInfo;
}

export interface VolumeInfo {
  title: string;
  authors?: string[];
  publishedDate: string;
  publisher: string;
  imageLinks: ImageLinks;
  pageCount?: number;
  categories?: string[];
}

export interface ImageLinks {
  thumbnail: string;
  medium: string;
}
