import { fakeImgs } from 'assets';
import { INews } from 'widgets/News';
import { users } from './users';

export const allFakeNews: INews[] = [
  {
    id: '1',
    authorId: users[0],
    text: 'See my other project on my GitHub!',
    category: ['Content'],
    createdAt: Date.now(),
    preview: fakeImgs.bg1,
  },
  {
    id: '2',
    authorId: users[1],
    text: 'ChatGPT takes over the world!',
    category: ['IT', 'Technologies'],
    createdAt: Date.now(),
    preview: fakeImgs.bg2,
  },
  {
    id: '3',
    authorId: users[2],
    text: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    category: ['Sales', 'Technologies'],
    createdAt: Date.now(),
    preview: fakeImgs.bg3,
  },
  {
    id: '4',
    authorId: users[0],
    text: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    category: ['Design'],
    createdAt: Date.now(),
    preview: fakeImgs.bg4,
  },
  {
    id: '5',
    authorId: users[1],
    text: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    category: ['Sales', 'Technologies'],
    createdAt: Date.now(),
    preview: fakeImgs.bg5,
  },
  {
    id: '6',
    authorId: users[2],
    text: 'Pitch termsheet backing validation focus release.',
    category: ['Content'],
    createdAt: Date.now(),
    preview: fakeImgs.bg6,
  },
  {
    id: '7',
    authorId: users[0],
    text: 'Pitch termsheet backing validation focus release.',
    category: ['Content'],
    createdAt: Date.now(),
    preview: fakeImgs.bg7,
  },
];
