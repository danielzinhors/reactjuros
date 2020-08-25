import React, { useState, useEffect, useRef } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Title from '../components/Title';
import Input from '../components/Input';
import Parcelas from '../components/Parcelas';

export default function App() {
  const [valorInicial, setValorInicial] = useState(0);
  const [percJuro, setPercJuro] = useState(0);
  const [qtdParc, setQtdParc] = useState(1);
  const [parcelas, setParcelas] = useState([]);
  const latestValor = useRef(valorInicial);
  const latestPerc = useRef(percJuro);
  const latestQtd = useRef(qtdParc);

  const handleValue = (newValue) => {
    setValorInicial(newValue);
  };

  const handlePerc = (newValue) => {
    setPercJuro(newValue);
  };

  const handleQtd = (newValue) => {
    setQtdParc(newValue);
  };

  useEffect(() => {
    const getValor = (valorNovo) => {
      return valorNovo * (percJuro / 100);
    };
    if (valorInicial > 0 && percJuro !== 0) {
      if (
        latestValor.current !== valorInicial ||
        latestPerc.current !== percJuro ||
        latestQtd.current !== qtdParc
      ) {
        latestValor.current = valorInicial;
        latestPerc.current = percJuro;
        latestQtd.current = qtdParc;
        let parcs = [];
        let valorNovo;
        valorNovo = parseFloat(valorInicial);
        let id = 0;
        for (let i = 0; i < qtdParc; i++) {
          id = parcs.length + 1;
          valorNovo = valorNovo + getValor(valorNovo);
          parcs.push({ id, valorParc: valorNovo, valorInicial, percJuro });
        }
        setParcelas(parcs);
      }
    }
  }, [valorInicial, percJuro, qtdParc]);

  return (
    <div className="container center">
      <Title>Calculo Juros / Depreciação</Title>
      <div style={styles.borderdiv}>
        <div className="row">
          <Input
            placeholder="Valor"
            type="number"
            title="Montante inicial:"
            id="valorinicial"
            name="valorinicial"
            classe="input-field col s4"
            value={valorInicial}
            min="0"
            max="100000"
            step="100"
            onchange={handleValue}
          />
          <Input
            placeholder="Taxa dos juros/depreciação"
            type="number"
            title="Taxa de juros/depreciação mensal:"
            id="valorjuro"
            name="valorjuro"
            classe="input-field col s4"
            value={percJuro}
            min="-12"
            max="12"
            step="0.1"
            onchange={handlePerc}
          />
          <Input
            placeholder="Qtd. parcelas"
            type="number"
            title="Período(meses):"
            id="qtdparcela"
            name="qtdparcela"
            classe="input-field col s4"
            value={qtdParc}
            min="1"
            max="36"
            step="1"
            onchange={handleQtd}
          />
        </div>
      </div>
      <Parcelas parcelas={parcelas} />
    </div>
  );
}

const styles = {
  borderdiv: {
    border: '1px solid gray',
    borderRadius: '5px',
  },
};
