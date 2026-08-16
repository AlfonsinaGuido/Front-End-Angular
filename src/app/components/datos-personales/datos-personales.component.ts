import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DatosPersonales } from 'src/app/model/datos-personales';
import { DatosPersonalesService } from 'src/app/services/datos-personales.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  datos: DatosPersonales[] = [];
  isLoading = true;
  private scrollBloqueado = false;

  constructor(
    private DatosPersonales: DatosPersonalesService,
    private tokenService: TokenService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  isLogged = false;
  

  ngOnInit(): void {
    this.cargarDatosPersonales();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
  }

  cargarDatosPersonales(): void {
    this.isLoading = true;
    this.bloquearScrollGlobal();
    this.DatosPersonales.lista().subscribe(
      data => {
        this.datos = data;
        this.isLoading = false;
        this.desbloquearScrollGlobal();
      },
      err => {
        console.error('No se pudieron cargar los datos', err);
      }
    );
  
  }

  private bloquearScrollGlobal(): void {
    if (this.scrollBloqueado) {
      return;
    }

    this.document.body.classList.add('loading-scroll-lock');
    this.document.documentElement.classList.add('loading-scroll-lock');
    this.scrollBloqueado = true;
  }

  private desbloquearScrollGlobal(): void {
    if (!this.scrollBloqueado) {
      return;
    }

    this.document.body.classList.remove('loading-scroll-lock');
    this.document.documentElement.classList.remove('loading-scroll-lock');
    this.scrollBloqueado = false;
  }

  @HostListener('document:keydown', ['$event'])
  bloquearTecladoMientrasCarga(event: KeyboardEvent): void {
    if (this.isLoading) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  delete(id?: number) {
    if (confirm("Desea eliminar?") == true) {
      if (id != undefined) {
        this.DatosPersonales.delete(id).subscribe(
          data => {
            this.cargarDatosPersonales();
          }, err => {
            alert("No se pudo eliminar")
          }
        )
      }
    } else {
      alert("cancelado")
    }
  }
}
