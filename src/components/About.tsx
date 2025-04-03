import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Sobre Mí</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            Aquí irá una breve descripción sobre ti, tu experiencia y tus intereses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Educación</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">Título o Certificación</h4>
                  <p className="text-sm">Institución - Año</p>
                </li>
              </ul>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Experiencia</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">Puesto</h4>
                  <p className="text-sm">Empresa - Período</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 