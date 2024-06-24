import { Component, OnInit } from '@angular/core';
import { ETheme } from '../enums/Etheme.enum';

@Component({
  selector: 'poke-header',
  templateUrl: './poke-header.component.html',
  styleUrl: './poke-header.component.scss'
})
export class PokeHeaderComponent implements OnInit{
  ngOnInit(): void {}

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
