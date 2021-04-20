import Link from 'next/link';
import { title } from 'process';

import s from './Film.module.scss';

type Props = {
  title: string,
  episodeID: number
};

export function Film({ episodeID , title}: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        Episode {episodeID}: {title} 
      </h2>
    </section>
  );
}
