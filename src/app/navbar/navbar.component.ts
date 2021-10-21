import { Component, OnInit,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() tipoCategoria = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarCategoria(categoria: string) {
    this.tipoCategoria.emit(categoria)
  }
}
