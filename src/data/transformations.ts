export interface Transformation {
  id: string;
  imageUrl: string;
  clientName: string;
  duration: string;
  verified: boolean;
}

export const transformations: Transformation[] = [
  {
    id: "tori-4mo",
    imageUrl: "/src/assets/transformation-tori-4mo.png",
    clientName: "Tori",
    duration: "4 months",
    verified: true,
  },
  {
    id: "steven-4mo",
    imageUrl: "/src/assets/transformation-steven-4mo.jpg",
    clientName: "Steven",
    duration: "4 months",
    verified: true,
  },
  {
    id: "kieth-4mo",
    imageUrl: "/src/assets/transformation-kieth-4mo.png",
    clientName: "Kieth",
    duration: "4 months",
    verified: true,
  },
  {
    id: "anon-4mo",
    imageUrl: "/src/assets/transformation-anon-4mo.jpg",
    clientName: "Client",
    duration: "4 months",
    verified: true,
  },
  {
    id: "anon-2.5mo",
    imageUrl: "/src/assets/transformation-anon-2.5mo.jpg",
    clientName: "Client",
    duration: "2.5 months",
    verified: true,
  },
  {
    id: "split",
    imageUrl: "/src/assets/transformation-split.jpg",
    clientName: "Client",
    duration: "16 weeks",
    verified: true,
  },
  {
    id: "result",
    imageUrl: "/src/assets/transformation-result.png",
    clientName: "Client",
    duration: "12 weeks",
    verified: true,
  },
];
