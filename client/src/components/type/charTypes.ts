export type PersonType = {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
};

export type FilterPeopleType = { results: PersonType[] };

export type LocationType = { id: number; name: string };
