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

export interface IPeopleResponse {
  name : string;
}

export interface ICharacterConnection {
  [index : number]: {
    characters : ICharacter;
  }
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

// TODO hér ættum við að útbúa interface fyrir öll gögn sem við vinnum með (t.d. IFilm, IPaging)
// og svör sem við fáum frá GraphQL endapunkti
