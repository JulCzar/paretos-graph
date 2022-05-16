import { ChartData } from 'chart.js';
import { Chart } from 'react-chartjs-2';
const labels = [
  'Comida fria',
  'Demora na entrega',
  'Cabelo na comida',
  'Comida muito salgada',
  'Pedido cancelado',
  'Travamento no App',
  'Comida estragada',
];

export const data: ChartData = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Percentual acumulado',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [28.2, 53.8, 66.6, 78.1, 87.1, 94.8, 100],
      yAxisID: 'x2',
    },
    {
      type: 'bar',
      label: 'Quantidade',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [22, 20, 10, 9, 7, 6, 4],
      borderColor: 'white',
      borderWidth: 2,
      yAxisID: 'x1',
    },
  ],
};

export function App() {
  return (
    <Chart
      type='bar'
      data={data}
      title='Gráfico de pareto'
      options={{
        scales: {
          x2: {
            position: 'right',
            ticks: {
              // @ts-ignore
              callback: function (v: number) {
                return `${this.getLabelForValue(v)}%`;
              },
            },
          },
        },
      }}
    />
  );
}
