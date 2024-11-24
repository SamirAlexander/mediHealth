import React from 'react'

const Explorfisica = () => {
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
        <h2 className="text-xl font-bold text-gray-700">
          General Information
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Height
            </label>
            <p className="mt-1 text-gray-800">175 cm</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Weight
            </label>
            <p className="mt-1 text-gray-800">70 kg</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              BMI (Body Mass Index)
            </label>
            <p className="mt-1 text-gray-800">22.9</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Blood Pressure
            </label>
            <p className="mt-1 text-gray-800">120/80 mmHg</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Heart Rate
            </label>
            <p className="mt-1 text-gray-800">72 bpm</p>
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="p-8 space-y-6">
        <h2 className="text-xl font-bold text-gray-700">Physical Findings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Skin
            </label>
            <p className="mt-1 text-gray-800">Normal, no lesions</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Eyes
            </label>
            <p className="mt-1 text-gray-800">
              Pupils equal, round, reactive to light
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Chest
            </label>
            <p className="mt-1 text-gray-800">
              Clear to auscultation, no wheezing
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Abdomen
            </label>
            <p className="mt-1 text-gray-800">Soft, non-tender</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Extremities
            </label>
            <p className="mt-1 text-gray-800">No edema, normal movement</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Explorfisica