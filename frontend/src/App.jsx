// src/App.jsx
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* On peut utiliser nos classes Tailwind ici pour le style global */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Mon Portfolio Moderne</h1>
        </div>
      </header>
      <main>
        <ProjectList />
      </main>
    </div>
  );
}

export default App;