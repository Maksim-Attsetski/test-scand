import { IQuery, allFakeNews } from 'shared';
import { INews } from './types';

const maxCountOfNews = 14;

// #NOTE This class is needed to send requests to API.
class NewsService {
  async getNews(query?: IQuery): Promise<INews[]> {
    try {
      // const res = await axios.get(**endpoint**);
      console.log('Successfully get news', allFakeNews);
      const limit = query?.limit || 7;

      return allFakeNews.slice(
        0,
        limit >= maxCountOfNews ? maxCountOfNews : limit
      );
    } catch (error: any) {
      console.error(error?.message || error);
      throw error; // as example
    }
  }

  // #NOTE here we can write other CRUD operations
}

export const newsService = new NewsService();
