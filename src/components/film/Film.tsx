import Link from 'next/link';
import { title } from 'process';

import s from './Film.module.scss';

type Props = {
  title: string,
  episodeID: number
  openingCrawl: string
  Characters: any[];
};

export function Film({ episodeID , title, openingCrawl, Characters}: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        Episode {episodeID}: {title} 
      </h2>
      <p>
        {openingCrawl}
      </p>
      <h3>
        Characters
      </h3>
      
      {
        Characters.map(function(d, idx){
          return (<Link href={"/"+d.id} key={idx}>{d.name}</Link>)
        })}
      
    </section>
  );
}
