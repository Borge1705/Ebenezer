console.log("Sistema EBENEZER cargado correctamente");


/* =================================================
   GENERALES
================================================= */

function confirmarEliminar() {

    return confirm("¿Deseas eliminar este registro?");

}


function mostrarMensaje(texto) {

    alert(texto);

}



function mostrarFechaActual(){

    let fecha = new Date();

    console.log(
        fecha.toLocaleDateString()
    );

}

mostrarFechaActual();




/* =================================================
   SIDEBAR ACTIVO
================================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


const links = document.querySelectorAll(".nav-item");


links.forEach(link=>{


    link.addEventListener(
    "click",
    function(){


        links.forEach(l=>{

            l.classList.remove("active");

        });


        this.classList.add("active");


    });


});


});






/* =================================================
   MODAL TELEFONOS
================================================= */


window.abrirModal = function(){


let modal =
document.getElementById("modalTelefono");


if(modal){

    modal.style.display="block";

}


}



window.cerrarModal = function(){


let modal =
document.getElementById("modalTelefono");


if(modal){

modal.style.display="none";

}


}





/* =================================================
   MODAL EDITAR TELEFONO
================================================= */


window.abrirModalEditarTelefono = function(
id,
modelo,
marca,
precio,
stock
){


document.getElementById("modalEditarTelefono").style.display="block";


document.getElementById("edit_id").value=id;

document.getElementById("edit_modelo").value=modelo;

document.getElementById("edit_marca").value=marca;

document.getElementById("edit_precio").value=precio;

document.getElementById("edit_stock").value=stock;


}



window.cerrarModalEditar = function(){


document.getElementById(
"modalEditarTelefono"
).style.display="none";


}






/* =================================================
   CLIENTES
================================================= */


window.abrirModalCliente=function(){


document.getElementById(
"modalCliente"
).style.display="block";


}



window.cerrarModalCliente=function(){


document.getElementById(
"modalCliente"
).style.display="none";


}





window.abrirModalEditarCliente=function(
id,nombre,telefono,email
){


document.getElementById(
"modalEditarCliente"
).style.display="block";


document.getElementById(
"edit_cliente_id"
).value=id;


document.getElementById(
"edit_cliente_nombre"
).value=nombre;


document.getElementById(
"edit_cliente_telefono"
).value=telefono;


document.getElementById(
"edit_cliente_email"
).value=email;


}





window.cerrarModalEditarCliente=function(){


document.getElementById(
"modalEditarCliente"
).style.display="none";


}







/* =================================================
   VENTAS MODALES
================================================= */


window.abrirModalVenta=function(){


document.getElementById(
"modalVenta"
).style.display="block";


}



window.cerrarModalVenta=function(){


document.getElementById(
"modalVenta"
).style.display="none";


}





window.abrirModalEditarVenta=function(
id,
producto,
cliente,
cantidad,
total
){



document.getElementById(
"modalEditarVenta"
).style.display="block";



document.getElementById(
"edit_venta_id"
).value=id;


document.getElementById(
"edit_venta_producto"
).value=producto;


document.getElementById(
"edit_venta_cliente"
).value=cliente;


document.getElementById(
"edit_venta_cantidad"
).value=cantidad;


document.getElementById(
"edit_venta_total"
).value=total;


}



window.cerrarModalEditarVenta=function(){


document.getElementById(
"modalEditarVenta"
).style.display="none";


}



/* =========================
   ACCESORIOS
========================= */


window.abrirModalAccesorio = function(){ 

    let modal = document.getElementById(
        "modalAccesorio"
    );


    if(modal){

        modal.style.display = "block";

    }

};



window.cerrarModalAccesorio = function(){ 

    let modal = document.getElementById(
        "modalAccesorio"
    );


    if(modal){

        modal.style.display = "none";

    }

};




window.abrirModalEditarAccesorio = function(
    id,
    nombre,
    tipo,
    precio,
    stock
){


    let modal = document.getElementById(
        "modalEditarAccesorio"
    );


    if(modal){

        modal.style.display = "flex";

    }



    document.getElementById(
        "edit_id"
    ).value = id;



    document.getElementById(
        "edit_nombre"
    ).value = nombre;



    document.getElementById(
        "edit_tipo"
    ).value = tipo;



    document.getElementById(
        "edit_precio"
    ).value = precio;



    document.getElementById(
        "edit_stock"
    ).value = stock;


};




window.cerrarModalEditarAccesorio = function(){


    let modal =
    document.getElementById(
        "modalEditarAccesorio"
    );


    if(modal){

        modal.style.display = "none";

    }


};


/* =================================================
   BUSCADOR INVENTARIO
================================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


let buscador =
document.getElementById(
"buscarProducto"
);


let filtro =
document.getElementById(
"filtroProducto"
);



if(!buscador || !filtro)return;




function filtrarInventario(){


let texto =
buscador.value.toLowerCase();



let tipo =
filtro.value;



document.querySelectorAll(
".product-card"
)
.forEach(producto=>{


let marca =
(producto.dataset.marca || "").toLowerCase();


let modelo =
(producto.dataset.modelo || "").toLowerCase();


let precio =
producto.dataset.precio || "";



let contenido =
tipo==="marca"
? marca
:
tipo==="modelo"
? modelo
:
tipo==="precio"
? precio
:
marca+" "+modelo+" "+precio;



producto.style.display =
contenido.includes(texto)
?
""
:
"none";



});


}



buscador.addEventListener(
"input",
filtrarInventario
);



filtro.addEventListener(
"change",
filtrarInventario
);


});







/* =================================================
   BUSCADOR ACCESORIOS
================================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


let buscador =
document.getElementById(
"buscarAccesorio"
);



let filtro =
document.getElementById(
"filtroAccesorio"
);



if(!buscador || !filtro)return;




function filtrarAccesorios(){


let texto =
buscador.value.toLowerCase();



let tipo =
filtro.value;



document.querySelectorAll(
".product-card"
)
.forEach(producto=>{


let nombre =
(producto.dataset.nombre || "")
.toLowerCase();



let precio =
producto.dataset.precio || "";



let contenido =
tipo==="nombre"
?
nombre
:
tipo==="precio"
?
precio
:
nombre+" "+precio;



producto.style.display =
contenido.includes(texto)
?
""
:
"none";



});



}



buscador.addEventListener(
"input",
filtrarAccesorios
);



filtro.addEventListener(
"change",
filtrarAccesorios
);



});










/* =================================================
   DASHBOARD CHARTS
================================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


if(typeof Chart==="undefined")return;



let ventas =
document.getElementById(
"ventasChart"
);



if(ventas){


new Chart(
ventas,
{


type:"line",


data:{


labels:[
"Ventas"
],


datasets:[{


label:"Ingresos",


data:[
window.dashboardData?.sales || 0
],


borderWidth:3,

tension:0.4


}]

},


options:{


responsive:true,

maintainAspectRatio:false


}



});


}







let reparaciones =
document.getElementById(
"reparacionesChart"
);



if(reparaciones){


new Chart(
reparaciones,
{


type:"doughnut",


data:{


labels:[

"Pendientes",
"Completadas",
"Entregadas"

],



datasets:[{

data:[


window.dashboardData?.active || 0,

window.dashboardData?.completed || 0,

window.dashboardData?.delivered || 0


],


borderWidth:1


}]


},



options:{


responsive:true,

maintainAspectRatio:false


}


});


}



});








/* =================================================
   DETALLE ORDEN - COTIZACION
================================================= */


window.abrirCotizacion=function(){


document.getElementById(
"modalCotizacion"
).style.display="block";


}




window.cerrarCotizacion=function(){


document.getElementById(
"modalCotizacion"
).style.display="none";


}









/* =================================================
   VENTAS - FACTURA
================================================= */


let totalFactura = 0;




window.actualizarPrecio=function(){


let select =
document.getElementById(
"productoSelect"
);



if(!select)return;



let opcion =
select.options[
select.selectedIndex
];



document.getElementById(
"precioProducto"
).value =
opcion.dataset.precio || 0;


}






window.agregarProductoFactura=function(){



let select =
document.getElementById(
"productoSelect"
);



let opcion =
select.options[
select.selectedIndex
];



if(!opcion.value){

alert("Seleccione producto");

return;

}




let cantidad =
parseInt(
document.getElementById(
"cantidadProducto"
).value
);




let stock =
parseInt(
opcion.dataset.stock
);



if(cantidad > stock){

alert(
"No hay suficiente stock"
);

return;

}





let precio =
parseFloat(
opcion.dataset.precio
);




let subtotal =
precio*cantidad;




let tabla =
document.getElementById(
"detalleFactura"
);





if(totalFactura===0){

tabla.innerHTML="";

}




let fila =
document.createElement("tr");



fila.innerHTML=`


<td>${opcion.dataset.nombre}</td>

<td>${cantidad}</td>

<td>$${subtotal.toFixed(2)}</td>


<td>

<button
type="button"
class="btn-delete"
onclick="eliminarProducto(this,${subtotal})">

🗑

</button>

</td>


`;




tabla.appendChild(fila);





document.getElementById(
"inputsVenta"
).innerHTML += `


<input type="hidden"
name="productos[]"
value="${opcion.value}">


<input type="hidden"
name="cantidades[]"
value="${cantidad}">

`;




totalFactura += subtotal;



document.getElementById(
"totalVenta"
).innerHTML =
totalFactura.toFixed(2);



}




window.eliminarProducto=function(btn,subtotal){


btn.closest("tr").remove();


totalFactura -= subtotal;



document.getElementById(
"totalVenta"
).innerHTML =
totalFactura.toFixed(2);



}





window.guardarVenta=function(){


if(totalFactura<=0){


alert("Agregue productos");


return;


}



document.getElementById(
"formVenta"
).submit();


}




window.abrirFactura=function(id){


document.getElementById(
"factura"+id
).style.display="block";


}




window.cerrarFactura=function(id){


document.getElementById(
"factura"+id
).style.display="none";


}







/* =================================================
   CERRAR MODALES AL CLICK AFUERA
================================================= */


window.addEventListener(
"click",
function(event){


document.querySelectorAll(
".modal"
)
.forEach(modal=>{


if(event.target===modal){


modal.style.display="none";


}


});


});


/* =========================
   DASHBOARD CHARTS
========================= */


let ventasChartInstance = null;
let reparacionesChartInstance = null;



document.addEventListener("DOMContentLoaded",()=>{



const ventas =
document.getElementById("ventasChart");



if(ventas){


    if(ventasChartInstance){
        ventasChartInstance.destroy();
    }



    ventasChartInstance = new Chart(ventas,{


        type:"line",


        data:{


            labels:["Ventas"],


            datasets:[{

                label:"Ingresos",

                data:[Number(ventas.dataset.total)],

                borderWidth:3,

                tension:0.4

            }]


        },


        options:{


            responsive:true,

            maintainAspectRatio:false


        }


    });


}





const reparaciones =
document.getElementById("reparacionesChart");



if(reparaciones){



    if(reparacionesChartInstance){
        reparacionesChartInstance.destroy();
    }





    reparacionesChartInstance = new Chart(reparaciones,{


        type:"doughnut",


        data:{


            labels:[

                "Pendientes",
                "Completadas",
                "Entregadas"

            ],



            datasets:[{


                data:[

                    Number(reparaciones.dataset.pendientes),

                    Number(reparaciones.dataset.completadas),

                    Number(reparaciones.dataset.entregadas)

                ],


                borderWidth:2


            }]


        },



        options:{


            responsive:true,

            maintainAspectRatio:false


        }


    });



}


});

/* =========================
   DASHBOARD GRAFICAS
========================= */


document.addEventListener("DOMContentLoaded", function(){


    const ventasCanvas = document.getElementById("ventasChart");
    const reparacionesCanvas = document.getElementById("reparacionesChart");


    if(!ventasCanvas || !reparacionesCanvas){
        return;
    }



    // evitar duplicados de Chart.js

    if(window.ventasChartInstance){
        window.ventasChartInstance.destroy();
    }


    if(window.reparacionesChartInstance){
        window.reparacionesChartInstance.destroy();
    }





    window.ventasChartInstance = new Chart(
        ventasCanvas,
        {

        type:"line",

        data:{


            labels:[
                "Ventas"
            ],


            datasets:[{

                label:"Ingresos",

                data:[
                    Number(ventasCanvas.dataset.valor || 0)
                ],

                borderWidth:3,

                tension:0.4

            }]

        },


        options:{

            responsive:true,

            maintainAspectRatio:false

        }


    });







    window.reparacionesChartInstance = new Chart(

        reparacionesCanvas,

        {


        type:"doughnut",


        data:{


            labels:[

                "Pendientes",
                "Completadas",
                "Entregadas"

            ],


            datasets:[{


                data:[

                    Number(reparacionesCanvas.dataset.pendientes || 0),

                    Number(reparacionesCanvas.dataset.completadas || 0),

                    Number(reparacionesCanvas.dataset.entregadas || 0)

                ],


                borderWidth:1


            }]

        },



        options:{


            responsive:true,

            maintainAspectRatio:false


        }


    });



});