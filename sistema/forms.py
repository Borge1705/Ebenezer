from django import forms
from .models import *


class TelefonoForm(forms.ModelForm):
    class Meta:
        model = Telefono
        fields = '__all__'


class ClienteForm(forms.ModelForm):
    class Meta:
        model = Cliente
        fields = '__all__'


class ReparacionForm(forms.ModelForm):
    class Meta:
        model = Reparacion
        fields = '__all__'


class VentaForm(forms.ModelForm):
    class Meta:
        model = Venta
        fields = '__all__'


class AccesorioForm(forms.ModelForm):
    class Meta:
        model = Accesorio
        fields = '__all__'