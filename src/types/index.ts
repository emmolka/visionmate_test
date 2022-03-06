export type UserResponse = {
  email: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    street: {
      name: string;
      number: number;
    };
    postcode: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  login: {
    username: string;
  };
};

export type UserComponent = {
  lastName: string;
  firstName: string;
  email?: string;
  imageSrc: string;
  city: string;
  username?: string;
  street?: {
    name: string;
    number: number;
  };
  postcode?: string;
  onClick?: () => void;
};
