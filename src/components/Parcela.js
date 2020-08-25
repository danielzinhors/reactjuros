import React from 'react';
import css from './parcela.module.css';

import { formatCurrency, formatPerc } from '../helpers/formatHelpers';
export default function Parcela({ id, valorParc, valorInicial, percJuro }) {
  let diferenca = valorParc - valorInicial;
  let percDiferenca = (diferenca / valorInicial) * 100;
  diferenca = formatCurrency(diferenca);
  let classe = css.corPositiva;
  let classname = `${css.borderPositiva} ${css.flexRow}`;
  if (parseFloat(percJuro) < 0) {
    classe = css.corNegativa;
    classname = `${css.borderNegativa} ${css.flexRow}`;
  } else {
    diferenca = `+ ${diferenca}`;
  }
  return (
    <div className={classname}>
      <span className={css.bordaParc}>{id}ª</span>
      <div className={css.flexcolum}>
        <span className={classe}>{formatCurrency(valorParc)}</span>
        <span className={classe}>{diferenca}</span>
        <span className={css.corPercJuro}>{formatPerc(percDiferenca)}</span>
      </div>
    </div>
  );
}
