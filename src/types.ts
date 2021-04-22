// Hér eru þær týpur sem við skilgreinum á móti GraphQL endapunkti

export interface ICharacter {
  id: string;
  name?: string;
  birthYear : string;
  eyeColor : string;
  hairColor : string;
  height : number;
  mass : number;
}


export interface ICharacterConnection {
    characters : [ICharacter];
}

export interface IFilm {
  episodeID: number;
  title: string;
  openingCrawl : string;
  characterConnection : ICharacterConnection;
}

export interface IFilms {
  [index : number]: {
    films : IFilm;
  }
}

export interface IAllFilms {
  films : IFilms;
}

export interface IPeopleResponse{
  people : [ICharacter];
}

// TODO hér ættum við að útbúa interface fyrir öll gögn sem við vinnum með (t.d. IFilm, IPaging)
// og svör sem við fáum frá GraphQL endapunkti
