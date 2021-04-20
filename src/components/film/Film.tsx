import Link from 'next/link';

import s from './Film.module.scss';

type Props = {
  title: string,
};

export function Film({ title }: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        {title}
      </h2>
    </section>
  );
}
