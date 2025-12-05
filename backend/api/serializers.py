# backend/api/serializers.py
from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    # Le 'ModelSerializer' s'occupe de la majorité du travail.
    class Meta:
        model = Project
        # '__all__' inclut tous les champs du modèle (title, image, description...)
        fields = '__all__'