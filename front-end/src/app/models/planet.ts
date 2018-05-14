export class Planet {
  _id: string; //ID Type supported by MongoDb
  location: {
    x: number,
    y: number
  };
  type: string;
  name: string;
  stats: {
    space: number,
    energy: number,
    defense: number
  };
  owner: string;
};
