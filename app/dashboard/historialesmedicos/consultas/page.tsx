import React from 'react'

const Consultas = () => {
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
          Patient Consultations
        </h2>
        <table className="table-auto w-full text-left border-collapse">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Date</th>
              <th className="p-4">Specialty</th>
              <th className="p-4">Doctor</th>
              <th className="p-4">Reason</th>
              <th className="p-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="p-4">1</td>
              <td className="p-4">2023-10-15</td>
              <td className="p-4">Cardiology</td>
              <td className="p-4">Dr. John Smith</td>
              <td className="p-4">Routine Checkup</td>
              <td className="p-4">Patient in good health</td>
            </tr>
            <tr className="bg-white">
              <td className="p-4">2</td>
              <td className="p-4">2023-08-10</td>
              <td className="p-4">Dermatology</td>
              <td className="p-4">Dr. Jane Doe</td>
              <td className="p-4">Skin Rash</td>
              <td className="p-4">Prescribed topical cream</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="p-4">3</td>
              <td className="p-4">2023-05-05</td>
              <td className="p-4">General Medicine</td>
              <td className="p-4">Dr. Mike Johnson</td>
              <td className="p-4">Persistent Cough</td>
              <td className="p-4">Ordered chest X-ray</td>
            </tr>
            <tr className="bg-white">
              <td className="p-4">4</td>
              <td className="p-4">2023-01-20</td>
              <td className="p-4">Neurology</td>
              <td className="p-4">Dr. Sarah Brown</td>
              <td className="p-4">Frequent Headaches</td>
              <td className="p-4">Recommended MRI scan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Consultas