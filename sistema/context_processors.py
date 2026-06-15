from .views import obtener_estadisticas

def estadisticas_globales(request):
    return obtener_estadisticas()