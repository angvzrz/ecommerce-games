interface Cover {
  id: number;
  url: string;
}

export interface Game {
  id: number;
  cover: Cover;
  first_release_date: number;
  genres: number[];
  name: string;
  platforms: number[];
}
