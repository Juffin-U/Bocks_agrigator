interface UserBook {
  author: string;
  id: number;
  name: string;
  overview: string;
  pathToPoster: string;
  isRead: boolean;
}

interface Book {
  author: string;
  id: number;
  name: string;
  overview: string;
  pathToPoster: string;
  isAdded: boolean;
}

export { UserBook, Book };
