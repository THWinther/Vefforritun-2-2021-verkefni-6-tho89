import Link from 'next/link';
import { ICharacter } from '../../types';
import s from './Person.module.scss';

type Props = {
  person: ICharacter;
};

export function Person({ person }: Props): JSX.Element {
  return (
    <div className={s.person}>
      <h1>{person.name}</h1>
      <b>Birth Year</b>
      <p>{person.birthYear}</p>
      <b>Eye Color</b>
      <p>{person.eyeColor}</p>
      <b>Hair Color</b>
      <p>{person.hairColor}</p>
      <b>Height</b>
      <p>{person.height}</p>
      <b>Mass</b>
      <p>{person.mass}</p>

      
      <Link href="/characters">Back to characters</Link>
    </div>
  );
}
