export enum routes {
  Home = '/',
  News = '/news/',
  Product = '/product',
  Services = '/services',
  About = '/about',
  Auth = '/auth',
  Blog = '/blog',
  Careers = '/careers',
}

export interface IQuery {
  limit?: number;
}
