export interface Transformation {
  id: string;
  imageUrl: string;
  clientName: string;
  duration: string;
  verified: boolean;
}

export const transformations: Transformation[] = [];
