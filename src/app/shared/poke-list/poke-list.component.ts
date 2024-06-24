import { Component } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';
import { ETheme } from '../enums/Etheme.enum';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent {

  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;
  

  constructor(
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(): void{
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;

  }

  public icon: string = ETheme.ICON_MOON;
  public textTheme: string = ETheme.TEXT_MOON;

  public toggle() {
      const theme = document.body.classList.toggle('dark-theme');

      if (theme) {
        this.textTheme = ETheme.TEXT_SUN;
        return (this.icon = ETheme.ICON_SUN);
      }

      this.textTheme = ETheme.TEXT_MOON;
      return (this.icon = ETheme.ICON_MOON);
    }

}
