export type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  likes: number;
  user: {
    name: string;
    links: {
      html: string;
    };
  };
};
