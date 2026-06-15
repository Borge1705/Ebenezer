# admin.py

from django.contrib import admin
from .models import *
from django.contrib.auth.models import Group
from django.db.utils import OperationalError, ProgrammingError


# Crear grupos solo cuando la BD ya esté disponible
try:
    Group.objects.get_or_create(name='Administrador')
    Group.objects.get_or_create(name='Tecnico')

except (OperationalError, ProgrammingError):
    pass


admin.site.register(Telefono)
admin.site.register(Cliente)
admin.site.register(Reparacion)
admin.site.register(Venta)
admin.site.register(Accesorio)