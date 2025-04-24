// src/pages/Branding.jsx
const colors = [
  { name: 'Eco Green', class: 'bg-ecoGreen', hex: '#97FF00' },
  { name: 'Carbon Gray', class: 'bg-carbonGray', hex: '#3C3C46' },
  { name: 'Midnight', class: 'bg-midnight', hex: '#1C1537' },
  { name: 'Blurple', class: 'bg-blurple', hex: '#6E00FF' },
  { name: 'Tangerine', class: 'bg-tangerine', hex: '#FF9700' },
  { name: 'Cosmic Indigo', class: 'bg-cosmicIndigo', hex: '#3C0096' },
];

const Branding = () => {
  return (
    <div className="p-10 text-white">
      <h2 className="text-3xl font-bold mb-6">Brand Colors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {colors.map((color) => (
          <div key={color.name} className={`${color.class} p-6 rounded-xl shadow-lg`}>
            <h3 className="font-bold">{color.name}</h3>
            <p className="text-sm">{color.hex}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branding;
