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
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

export interface VolumeInfo {
  title: string;
  authors?: string[];
  publishedDate: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  printType: string;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
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
