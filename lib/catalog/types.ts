export type Complex = {
  id: string;
  name: string;
  shortDescription: string;
  lat: number;
  lng: number;
  image: string;
};

export type Unit = {
  id: string;
  complexId: string;
  rooms: number;
  areaSqm: number;
  priceRub: number;
  discountPercent: number;
  available: boolean;
  title: string;
  description: string;
  planSvg: string;
  image: string;
};

export type Benefit = {
  id: string;
  title: string;
  body: string;
};

export type RouteStart = {
  id: string;
  name: string;
  lat: number;
  lng: number;
};
