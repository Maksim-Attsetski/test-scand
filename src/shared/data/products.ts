import { IProduct } from 'widgets/Products';

export const products: IProduct[] = [
  {
    id: '1',
    active: true,
    currency: 'EUR',
    isLiked: false,
    level: 1,
    turnover: 2500,
    requirements: [
      { text: 'Confirm E-mail', isDone: true },
      { text: 'Confirm Phone Number', isDone: true },
      { text: 'Enter personal details', isDone: true },
    ],
  },
  {
    id: '2',
    active: true,
    currency: 'EUR',
    isLiked: true,
    level: 2,
    turnover: 30000,
    requirements: [
      { text: 'Upload Photo ID', isDone: true },
      { text: 'Upload Utility Bill', isDone: false },
    ],
  },
  {
    id: '3',
    active: false,
    currency: 'EUR',
    isLiked: false,
    level: 3,
    turnover: 100000,
    requirements: [
      { text: 'Confirm E-mail', isDone: false },
      { text: 'Confirm Phone Number', isDone: false },
      { text: 'Enter personal details', isDone: false },
    ],
  },
  {
    id: '4',
    active: false,
    currency: 'EUR',
    isLiked: true,
    level: 4,
    turnover: 1000000,
    requirements: [
      { text: 'Upload Photo ID', isDone: false },
      { text: 'Upload Utility Bill', isDone: false },
    ],
  },
];
