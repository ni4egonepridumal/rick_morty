export interface ICharacterResult {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: ILocation;
  name: string;
  origin: Location;
  species: string;
  status: string;
  type: string;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
}
