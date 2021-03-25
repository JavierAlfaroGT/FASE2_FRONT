import {Productos} from '../productos/productos'
export class Carrito {

    item: Productos
    cantidad: number
    tienda:string

    constructor(_producto:Productos,_tienda:string) { 

        this.item=_producto
        this.cantidad=1
        this.tienda=_tienda
    }
}
