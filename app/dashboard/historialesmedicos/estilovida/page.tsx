import React from 'react'

const Estilovida = () => {
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
          <h2 className="text-xl font-bold text-gray-700">Lifestyle Habits</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Physical Activity
              </label>
              <p className="mt-1 text-gray-800">
                Exercises 3 times a week, primarily cardio
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Diet
              </label>
              <p className="mt-1 text-gray-800">
                Balanced diet with occasional fast food
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Alcohol Consumption
              </label>
              <p className="mt-1 text-gray-800">Social drinking, 2-3 times a month</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Tobacco Use
              </label>
              <p className="mt-1 text-gray-800">Non-smoker</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Sleep Patterns
              </label>
              <p className="mt-1 text-gray-800">6-7 hours per night</p>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="p-8 space-y-6">
          <h2 className="text-xl font-bold text-gray-700">Other Habits</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Stress Management
              </label>
              <p className="mt-1 text-gray-800">
                Practices yoga and meditation weekly
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Screen Time
              </label>
              <p className="mt-1 text-gray-800">
                Approximately 5 hours per day
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Hobbies
              </label>
              <p className="mt-1 text-gray-800">
                Reading, hiking, and painting
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Social Interaction
              </label>
              <p className="mt-1 text-gray-800">
                Active social life, weekly meetups with friends
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Notes from Doctor
              </label>
              <p className="mt-1 text-gray-800">
                Continue regular physical activity and monitor screen time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Estilovida