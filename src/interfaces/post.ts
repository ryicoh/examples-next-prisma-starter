/* 以下のインターフェースをバックエンドが実装して、フロントから利用できるようにする */
export interface Post {
  id: string;
  title: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostList {
  items: Post[];
  nextCursor?: string;
}
