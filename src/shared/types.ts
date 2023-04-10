export enum routes {
  Home = '/',
  News = '/news/',
  Product = '/product',
  Services = '/services',
  About = '/about',
  Auth = '/auth',
  Careers = '/careers',
  NotFound = '/*',
}

export interface IQuery {
  limit?: number;
}
