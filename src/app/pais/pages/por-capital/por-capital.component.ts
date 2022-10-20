import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino : string = ''
  hayError: boolean = false
  paises : Pais[] = [];

  constructor( private paisService: PaisService ) { }

  buscar(termino:string){
    this.hayError= false;
    this.termino = termino;
    console.log(this.termino)

    this.paisService.buscarCapital(this.termino).subscribe((paises) =>{
      console.log(paises);
      this.paises = paises;
    }, (err)=>{
      this.hayError=true;
      this.paises =[];
    })
  }
  sugerencias(termino:string){
    this.hayError = false;
    
    console.log(termino)
  }

}
