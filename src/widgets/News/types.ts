export interface INews {
  id: string;
  category: string[];
  preview: string;
  text: string;
  authorId: IUser; // as in mongoDB. _id or user
  createdAt: number;
}

export interface IUser {
  id: string;
  fullName: string;
  avatar: string;
}
