import React from 'react'

const Medicaciones = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen  bg-red-400">
      <form className=" h-full bg-white p-8 grid grid-cols-2 gap-6 overflow-auto rounded-lg shadow-lg">
        {/* Primera columna */}
        <div className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-bold text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-bold text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-bold text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Segunda columna */}
        <div className="space-y-6">
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-bold text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-bold text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-bold text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              placeholder="Enter your country"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="zipCode"
              className="block text-sm font-bold text-gray-700"
            >
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              placeholder="Enter your ZIP code"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Botón de envío (abarca ambas columnas) */}
        <div className="col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Medicaciones