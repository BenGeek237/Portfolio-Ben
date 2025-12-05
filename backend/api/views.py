# backend/api/views.py
from rest_framework import viewsets
from .models import Project
from .serializers import ProjectSerializer

# ModelViewSet offre les fonctions CRUD complètes (Create, Read, Update, Delete)
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-created_at') # Récupère tous les projets, triés par date
    serializer_class = ProjectSerializer