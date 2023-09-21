export interface Root {
  kind: string;
  totalItems: number;
  items: Item[];
}

export interface Item {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo?: VolumeInfo;
  searchInfo: SearchInfo;
}

export interface VolumeInfo {
  title: string;
  authors?: string[];
  publishedDate: string;
  printType: string;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  imageLinks?: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  subtitle?: string;
  pageCount?: number;
  categories?: string[];
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail?: string;
}

export interface SearchInfo {
  textSnippet: string;
}
