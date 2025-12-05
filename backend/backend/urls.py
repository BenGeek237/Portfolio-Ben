# backend/backend/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings # Importé pour la config Media
from django.conf.urls.static import static # Importé pour la config Media

urlpatterns = [
    path('admin/', admin.site.urls),
    # Le point d'accès principal de notre API sera /api/...
    path('api/', include('api.urls')),
]

# Servi les fichiers média (images) UNIQUEMENT en mode DEBUG (développement)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)