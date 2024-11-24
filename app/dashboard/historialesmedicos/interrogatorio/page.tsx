import React from 'react'

const Interrogatorio = () => {
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
          <h2 className="text-xl font-bold text-gray-700">Current Symptoms</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Chief Complaint
              </label>
              <p className="mt-1 text-gray-800">
                Persistent headache and fatigue
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Onset
              </label>
              <p className="mt-1 text-gray-800">Started 2 weeks ago</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Frequency
              </label>
              <p className="mt-1 text-gray-800">Daily</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Aggravating Factors
              </label>
              <p className="mt-1 text-gray-800">Stress, lack of sleep</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Relieving Factors
              </label>
              <p className="mt-1 text-gray-800">Rest, painkillers</p>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="p-8 space-y-6">
          <h2 className="text-xl font-bold text-gray-700">Medical Questions</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Do you have a history of similar symptoms?
              </label>
              <p className="mt-1 text-gray-800">No</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Are there any associated symptoms?
              </label>
              <p className="mt-1 text-gray-800">
                Occasional nausea and light sensitivity
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Recent lifestyle changes?
              </label>
              <p className="mt-1 text-gray-800">
                Increased workload and reduced sleep
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Current stress level
              </label>
              <p className="mt-1 text-gray-800">High</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Notes from doctor
              </label>
              <p className="mt-1 text-gray-800">
                Recommend stress management and further diagnostic tests
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interrogatorio