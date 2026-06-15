from django.db import models
from django.contrib.auth.models import User



# =========================
# TELEFONOS
# =========================

class Telefono(models.Model):

    ESTADOS = [
        ('Disponible', 'Disponible'),
        ('Agotado', 'Agotado'),
    ]

    marca = models.CharField(max_length=100)
    modelo = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=0)
    imagen = models.ImageField(upload_to='telefonos/',blank=True,null=True)

    estado = models.CharField(
        max_length=20,
        choices=ESTADOS,
        default='Disponible'
    )

    def save(self, *args, **kwargs):

        if self.stock <= 0:
            self.estado = 'Agotado'
        else:
            self.estado = 'Disponible'

        super().save(*args, **kwargs)

    def __str__(self):
        return self.modelo


# =========================
# CLIENTES
# =========================

class Cliente(models.Model):

    nombre = models.CharField(max_length=100)
    telefono = models.CharField(max_length=20)
    email = models.EmailField()
    direccion = models.CharField(max_length=200)

    def __str__(self):
        return self.nombre


class Reparacion(models.Model):


    ESTADOS = [
        ('Pendiente', 'Pendiente'),
        ('En proceso', 'En proceso'),
        ('Completado', 'Completado'),
        ('Entregado', 'Entregado'),
    ]


    # =====================
    # DATOS DE LA ORDEN
    # Agregar un campo equipo 
    # =====================


    cliente = models.ForeignKey(
        Cliente,
        on_delete=models.CASCADE
    )


    fecha = models.DateTimeField(
        auto_now_add=True
    )


    estado = models.CharField(
        max_length=50,
        choices=ESTADOS,
        default='Pendiente'
    )


    # =====================
    # DATOS DEL EQUIPO RECIBIDO
    # (lo llena ADMIN)
    # =====================


    marca = models.CharField(
        max_length=100
    )


    modelo = models.CharField(
        max_length=100
    )


    serie = models.CharField(
        max_length=100,
        blank=True
    )


    accesorios_recibidos = models.TextField(
        blank=True
    )


    defecto_cliente = models.TextField(
        verbose_name="Defecto según cliente",
        blank=True
    )


    notas = models.TextField(
        blank=True
    )


    informacion_taller = models.TextField(
        blank=True
    )



    # =====================
    # PARTE DEL TECNICO
    # =====================


    caracteristicas = models.TextField(
        verbose_name="Características del equipo",
        blank=True
    )


    razon_visita = models.TextField(
        verbose_name="Razón de visita",
        blank=True
    )


    observaciones = models.TextField(
        verbose_name="Observaciones",
        blank=True
    )


    diagnostico = models.TextField(
        verbose_name="Diagnóstico del técnico",
        blank=True
    )


    proceso_realizado = models.TextField(
        verbose_name="Proceso realizado",
        blank=True
    )

    # =====================
    # COTIZACIÓN
    # =====================


    cotizacion_servicio = models.TextField(
        verbose_name="Detalle de cotización",
        blank=True,
        null=True
    )


    precio_cotizacion = models.DecimalField(
        verbose_name="Precio cotización",
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True
    )


    tecnico = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )



    def __str__(self):

        return f"Orden #{self.id} - {self.cliente.nombre}"
# =========================
# VENTAS
# =========================

class Venta(models.Model):

    cliente = models.ForeignKey(
        Cliente,
        on_delete=models.CASCADE
    )

    total = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    fecha_venta = models.DateField(
        auto_now_add=True
    )

    usuario = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    def __str__(self):
        return f"Venta #{self.id}"




class DetalleVenta(models.Model):

    venta = models.ForeignKey(
        Venta,
        related_name="detalles",
        on_delete=models.CASCADE
    )


    producto = models.CharField(
        max_length=150
    )


    tipo_producto = models.CharField(
        max_length=50
    )


    cantidad = models.IntegerField()


    precio_unitario = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )


    subtotal = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )


    def __str__(self):

        return self.producto

# =========================
# ACCESORIOS
# =========================
class Accesorio(models.Model):

    nombre = models.CharField(max_length=100)

    tipo = models.CharField(
        max_length=100
    )

    precio = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    stock = models.IntegerField(default=0)


    imagen = models.ImageField(
        upload_to='accesorios/',
        blank=True,
        null=True
    )


    def __str__(self):
        return self.nombre


