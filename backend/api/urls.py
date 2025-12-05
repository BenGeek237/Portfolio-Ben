# backend/api/urls.py
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet

router = DefaultRouter()
# Enregistre notre ViewSet : l'URL sera /projects/
router.register(r'projects', ProjectViewSet, basename='project')

urlpatterns = router.urls