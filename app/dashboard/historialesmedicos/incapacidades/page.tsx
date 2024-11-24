import React from 'react'

const Incapacidades = () => {
  return (
    <div
      className="flex items-center bg-gray-100"
      style={{ height: '70vh', width: '81vw' }}
    >
      <div
        className="bg-white shadow-lg rounded-lg overflow-auto"
        style={{ height: '100%', width: '100%' }}
      >
        <h2 className="text-xl font-bold text-gray-700 p-6 border-b border-gray-200">
          Patient Disabilities
        </h2>
        <table className="table-auto w-full text-left border-collapse">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Disability Type</th>
              <th className="p-4">Start Date</th>
              <th className="p-4">End Date</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="p-4">1</td>
              <td className="p-4">Medical Leave</td>
              <td className="p-4">2023-01-15</td>
              <td className="p-4">2023-01-25</td>
              <td className="p-4">10 days</td>
              <td className="p-4">Post-surgery recovery</td>
            </tr>
            <tr className="bg-white">
              <td className="p-4">2</td>
              <td className="p-4">Injury Recovery</td>
              <td className="p-4">2022-07-01</td>
              <td className="p-4">2022-07-20</td>
              <td className="p-4">20 days</td>
              <td className="p-4">Broken wrist</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="p-4">3</td>
              <td className="p-4">Mental Health</td>
              <td className="p-4">2021-11-10</td>
              <td className="p-4">2021-12-01</td>
              <td className="p-4">21 days</td>
              <td className="p-4">Stress-related leave</td>
            </tr>
            <tr className="bg-white">
              <td className="p-4">4</td>
              <td className="p-4">Medical Leave</td>
              <td className="p-4">2020-03-05</td>
              <td className="p-4">2020-03-15</td>
              <td className="p-4">10 days</td>
              <td className="p-4">Severe flu</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Incapacidades