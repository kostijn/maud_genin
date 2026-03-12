import { useState } from 'react';
import ArchiveGallery from './ArchiveGallery'; // Importeer het nieuwe component!

export default function Archive() {
  // State om bij te houden welke categorie open is
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Data structuur
  const categories = [
    { 
      id: 'models', 
      title: 'Models', 
      cover: './images/Maquette_ex.jpg',
      images: [
        './images/Maquette_ex.jpg',
        './images/Maquette_ex.jpg',
        './images/Maquette_ex.jpg',
        './images/Maquette_ex.jpg'
      ]
    },
    { 
      id: 'drawings', 
      title: 'Drawings', 
     cover: './images/Maquette_ex.jpg',
      images: [
        './images/Maquette_ex.jpg',
        './images/Maquette_ex.jpg'
      ]
    },
    { 
      id: 'paintings', 
      title: 'Paintings', 
      cover: './images/Maquette_ex.jpg',
      images: [
       './images/Maquette_ex.jpg'
      ]
    },
    { 
      id: 'details', 
      title: 'Details', 
      cover: './images/Maquette_ex.jpg',
      images: [
        './images/Maquette_ex.jpg',
        './images/Maquette_ex.jpg'
      ]
    },
    { 
      id: 'exhibition', 
      title: 'Exhibition', 
      cover: './images/Maquette_ex.jpg',
      images: [
        './images/Maquette_ex.jpg'
      ]
    }
  ];

  // Als er een categorie is aangeklikt, renderen we het nieuwe component
  if (selectedCategory) {
    return (
      <ArchiveGallery 
        category={selectedCategory} 
        onBack={() => setSelectedCategory(null)} 
      />
    );
  }

  // Zo niet, dan tonen we de hoofd-grid
  return (
    <div className="w-full max-w-6xl animate-[fadeIn_0.5s_ease-out]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="group relative cursor-pointer overflow-hidden aspect-square"
            onClick={() => setSelectedCategory(category)}
          >
            <img 
              src={category.cover} 
              alt={category.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h2 className="text-white font-bold text-2xl md:text-3xl">{category.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}