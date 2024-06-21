import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrl: './poke-search.component.scss'
})
export class PokeSearchComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor(){}

  public search(value: string){
    this.emmitSearch.emit(value);
  }
}
