import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CarritoDeComprasService } from 'src/app/services/carrito-de-compras.service';
import { Producto } from '../../models/producto';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  cantidadDeProductos$: Observable<number>;
  productos$: Observable<Producto[]>;

  constructor(private carritoCompras: CarritoDeComprasService) { }

  ngOnInit(): void {
    this.cantidadDeProductos$ = this.carritoCompras.carrito$.pipe(
      map(productos => productos.length)
    )
    this.productos$ = this.carritoCompras.carrito$.pipe(
      map(productos => productos)
    )
  }

}
