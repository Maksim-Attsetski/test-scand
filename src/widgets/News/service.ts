import { INews } from './types';

// #NOTE This class is needed to send requests to API.
class NewsService {
  async getNews(): Promise<INews[]> {
    try {
      const news: INews[] = [];
      // const res = await axios.get(**endpoint**);
      console.log('Successfully get news', news);

      return news;
    } catch (error: any) {
      console.error(error?.message || error);
      throw error; // as example
    }
  }

  // #NOTE here we can write other CRUD operations
}

export const newsService = new NewsService();
