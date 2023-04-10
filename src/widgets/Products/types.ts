export interface IProductRequirement {
  text: string;
  isDone: boolean;
}
export interface IProduct {
  level: number;
  active: boolean;
  isLiked: boolean;
  requirements: IProductRequirement[];
  turnover: number;
  currency: string;
}
