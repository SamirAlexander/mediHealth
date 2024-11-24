import React from 'react'

const Antecedentes = () => {
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
          Personal Medical History
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Chronic Diseases
            </label>
            <p className="mt-1 text-gray-800">
              Diabetes, Hypertension
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Allergies
            </label>
            <p className="mt-1 text-gray-800">Peanuts, Pollen</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Previous Surgeries
            </label>
            <p className="mt-1 text-gray-800">
              Appendectomy (2015), Knee Surgery (2018)
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Medications
            </label>
            <p className="mt-1 text-gray-800">
              Metformin, Losartan
            </p>
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="p-8 space-y-6">
        <h2 className="text-xl font-bold text-gray-700">
          Family Medical History
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Hereditary Diseases
            </label>
            <p className="mt-1 text-gray-800">
              Cardiovascular Diseases, Arthritis
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Cancer History
            </label>
            <p className="mt-1 text-gray-800">None</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Genetic Conditions
            </label>
            <p className="mt-1 text-gray-800">None</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Notes
            </label>
            <p className="mt-1 text-gray-800">
              No significant family medical issues reported.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Antecedentes