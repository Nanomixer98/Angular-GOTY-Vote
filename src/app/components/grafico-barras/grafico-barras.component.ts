import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.css']
})
export class GraficoBarrasComponent implements OnDestroy {
  results: any[] = [
    {
      "name": "Juego 1",
      "value": 8940
    },
    {
      "name": "Juego 2",
      "value": 5000
    },
    {
      "name": "Juego 3",
      "value": 7200
    },
    {
      "name": "Juego 4",
      "value": 3000
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'picnic';

  intervalo;

  constructor() {

    const newResutls = [...this.results];

    this.intervalo = setInterval(() =>{
      for (const i in newResutls) {
        newResutls[i].value = Math.round(Math.random() * 500);
      }
      this.results = [...newResutls];
      console.log("sefgsf");
    }, 2000);
  }

  ngOnDestroy(): void {
      clearInterval(this.intervalo);
  }

  onSelect(event) {
    console.log(event);
  }
}
