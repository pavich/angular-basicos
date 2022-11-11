import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  })
export class ListadoComponent  {

  heroeBorrado: string='';
  heroes: string [] =['Spiderman', 'Ironman','Hulk','Thor','Capitán América'];


  borrarHeroe(){
    // console.log('borrando......');
    // this.heroes.pop();
    // console.log('borrado');
    this.heroeBorrado = this.heroes.shift() || '';
    //console.log(this.heroeBorrado);
    //return this.heroes.shift()?.toString;
  }
}
