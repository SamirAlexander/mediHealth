"use client"; // This is a client component
import React from 'react'

const Personalinfo = () => {
  return (
    <div
      className="flex flex-col items-center bg-gray-100"
      style={{ height: '70vh', width: '81vw' }}
    >
      <div
        className="grid grid-cols-2 bg-white shadow-lg rounded-lg"
        style={{ height: '100%', width: '100%' }}
      >
        {/* Columna izquierda */}
        <div className="p-8 space-y-6 border-r border-gray-200">
          <h2 className="text-xl font-bold text-gray-700">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <p className="mt-1 text-gray-800">John Doe</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Date of Birth
              </label>
              <p className="mt-1 text-gray-800">January 1, 1980</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Gender
              </label>
              <p className="mt-1 text-gray-800">Male</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Contact Number
              </label>
              <p className="mt-1 text-gray-800">+1 234 567 890</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Address
              </label>
              <p className="mt-1 text-gray-800">
                1234 Elm Street, Springfield, USA
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="p-8 space-y-6">
          {/* Área superior para fotografía */}
          <div
            className="flex justify-center items-center bg-gray-200 rounded-lg border border-gray-300"
            style={{ height: '50%', width: '100%' }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33E16yBrvG6VXi9sIhHpCLPtVJWlafKI2P1sirtXzmSzyj1y9lxo4ayurbx38BAaHFII&usqp=CAU"
              alt="Patient Photograph"
              className="h-40 w-40 rounded-full border border-gray-400"
            />
          </div>

          {/* Área inferior para más información */}
          <div
            className="space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-300"
            style={{ height: '50%', width: '100%' }}
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Emergency Contact
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Contact Name
              </label>
              <p className="mt-1 text-gray-800">Jane Doe</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Relationship
              </label>
              <p className="mt-1 text-gray-800">Spouse</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Contact Number
              </label>
              <p className="mt-1 text-gray-800">+1 987 654 321</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personalinfo
