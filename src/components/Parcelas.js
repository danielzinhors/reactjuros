import React from 'react';
import Parcela from './Parcela';
import css from './parcela.module.css';

export default function Parcelas({ parcelas }) {
  return (
    <div className={css.flexRow}>
      {parcelas.map(({ id, valorParc, valorInicial, percJuro }) => {
        return (
          <Parcela
            key={id}
            id={id}
            valorParc={valorParc}
            valorInicial={valorInicial}
            percJuro={percJuro}
          />
        );
      })}
    </div>
  );
}
