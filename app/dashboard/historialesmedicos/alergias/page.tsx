import React from 'react'

const Alergias = () => {
  return (
    <div
    className="flex items-center bg-gray-100"
    style={{ height: '70vh', width: '81vw' }}
  >
    <div
      className="grid grid-cols-2 bg-white shadow-lg rounded-lg"
      style={{ height: '100%', width: '100%' }}
    >
      {/* Columna izquierda */}
      <div className="p-8 space-y-6 border-r border-gray-200">
        <h2 className="text-xl font-bold text-gray-700">Food Allergies</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Peanuts
            </label>
            <p className="mt-1 text-gray-800">
              Severe reaction: Anaphylaxis
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Dairy Products
            </label>
            <p className="mt-1 text-gray-800">Mild reaction: Stomach upset</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Shellfish
            </label>
            <p className="mt-1 text-gray-800">
              Moderate reaction: Rash and swelling
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Gluten
            </label>
            <p className="mt-1 text-gray-800">
              Intolerance: Abdominal pain
            </p>
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="p-8 space-y-6">
        <h2 className="text-xl font-bold text-gray-700">Other Allergies</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Medications
            </label>
            <p className="mt-1 text-gray-800">
              Penicillin: Severe rash and breathing difficulty
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Environmental Allergies
            </label>
            <p className="mt-1 text-gray-800">
              Pollen: Sneezing and itchy eyes
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Insect Bites
            </label>
            <p className="mt-1 text-gray-800">
              Bee stings: Swelling and redness
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Notes from Doctor
            </label>
            <p className="mt-1 text-gray-800">
              Carry an EpiPen for severe allergies.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Alergias