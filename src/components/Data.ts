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
  maturityRating: string;
  allowAnonLogging: boolean;
  imageLinks: ImageLinks;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  pageCount?: number;
  categories?: string[];
}

export interface ImageLinks {
  thumbnail: string;
  medium: string;
}
