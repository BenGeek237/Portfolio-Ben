// src/components/ProjectList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // L'URL de notre API Django créée à l'Étape 5
        axios.get('http://localhost:8000/api/projects/')
            .then(response => {
                setProjects(response.data); // Stocke les données dans l'état
                setLoading(false);
            })
            .catch(error => {
                console.error('Erreur lors du fetch des projets :', error);
                setLoading(false);
            });
    }, []); // Le tableau vide garantit que l'effet s'exécute une seule fois (au montage)

    if (loading) {
        return <div className="text-center mt-10 text-xl text-gray-600">Chargement des projets...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        {/* L'image. Notez l'URL complète pour pointer vers Django */}
                        {project.image && (
                            <img
                                src={`http://localhost:8000${project.image}`}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                        )}
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{project.title}</h3>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <p className="text-sm text-gray-500 font-medium">Techs: {project.technologies}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;