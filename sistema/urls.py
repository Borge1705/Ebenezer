
from django.urls import path
from . import views

urlpatterns = [

path('', views.login_view, name='login'),

path('logout/', views.logout_view, name='logout'),

    # DASHBOARDS
    path('dashboard/', views.dashboard, name='dashboard'),
    path('dashboard-tecnico/',views.dashboard_tecnico,name='dashboard_tecnico'),
    path('dashboard/vendedor/',views.dashboard_vendedor,name='dashboard_vendedor'),

    # INVENTARIO
    path('inventario/', views.inventario, name='inventario'),
    path('nuevo-telefono/', views.nuevo_telefono, name='nuevo_telefono'),
    path('editar-telefono/<int:id>/', views.editar_telefono, name='editar_telefono'),
    path('eliminar-telefono/<int:id>/', views.eliminar_telefono, name='eliminar_telefono'),

    # CLIENTES
    path('clientes/', views.clientes, name='clientes'),
    path('nuevo-cliente/', views.nuevo_cliente, name='nuevo_cliente'),
    path('editar-cliente/<int:id>/', views.editar_cliente, name='editar_cliente'),
    path('eliminar-cliente/<int:id>/', views.eliminar_cliente, name='eliminar_cliente'),

    # REPARACIONES

    # Administrador
    path(
        'generar-orden/',
        views.generar_orden,
        name='generar_orden'
    ),

    path(
        'reparaciones/',
        views.reparaciones,
        name='reparaciones'
    ),


    path(
        'nueva-reparacion/',
        views.nueva_reparacion,
        name='nueva_reparacion'
    ),


    path(
        'editar-reparacion/<int:id>/',
        views.editar_reparacion,
        name='editar_reparacion'
    ),


    path(
        'eliminar-reparacion/<int:id>/',
        views.eliminar_reparacion,
        name='eliminar_reparacion'
    ),



    # Técnico

    path(
        'ordenes-tecnico/',
        views.ordenes_tecnico,
        name='ordenes_tecnico'
    ),


    path(
        'detalle-orden/<int:id>/',
        views.detalle_orden,
        name='detalle_orden'
    ),


    path(
        'editar-orden-tecnico/<int:id>/',
        views.editar_orden_tecnico,
        name='editar_orden_tecnico'
    ),

    
    # VENTAS
    path(
        'ventas/',
        views.ventas,
        name='ventas'
    ),

    path(
        'eliminar-venta/<int:id>/',
        views.eliminar_venta,
        name='eliminar_venta'
    ),



    # ACCESORIOS

    path(
        'accesorios/',
        views.accesorios,
        name='accesorios'
    ),

    path(
        'eliminar-accesorio/<int:id>/',
        views.eliminar_accesorio,
        name='eliminar_accesorio'
    ),

    # REPORTES

    path(
    'reportes/',
    views.reportes,
    name='reportes'
    ),



    path(
    'reportes/ventas/excel/',
    views.reporte_ventas_excel,
    name='reporte_ventas_excel'
    ),


    path(
    'reportes/ventas/pdf/',
    views.reporte_ventas_pdf,
    name='reporte_ventas_pdf'
    ),



    path(
    'reportes/inventario/excel/',
    views.reporte_inventario_excel,
    name='reporte_inventario_excel'
    ),


    path(
    'reportes/inventario/pdf/',
    views.reporte_inventario_pdf,
    name='reporte_inventario_pdf'
    ),




    path(
    'reportes/reparaciones/excel/',
    views.reporte_reparaciones_excel,
    name='reporte_reparaciones_excel'
    ),


    path(
    'reportes/reparaciones/pdf/',
    views.reporte_reparaciones_pdf,
    name='reporte_reparaciones_pdf'
    ),

    path(
    'reportes/general/pdf/',
    views.reporte_general_pdf,
    name="reporte_general_pdf"
    ),

]
