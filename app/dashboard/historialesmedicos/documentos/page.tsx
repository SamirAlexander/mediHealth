import React from 'react'

const Documentos = () => {
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
        <h2 className="text-xl font-bold text-gray-700">Uploaded Documents</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Blood Test Results
            </label>
            <p className="mt-1 text-gray-800">
              <a
                href="#"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                blood_test_results.pdf
              </a>
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              X-ray Report
            </label>
            <p className="mt-1 text-gray-800">
              <a
                href="#"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                xray_report.jpg
              </a>
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Prescription
            </label>
            <p className="mt-1 text-gray-800">
              <a
                href="#"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                prescription.pdf
              </a>
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              MRI Scan
            </label>
            <p className="mt-1 text-gray-800">
              <a
                href="#"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                mri_scan.jpg
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="p-8 space-y-6">
        <h2 className="text-xl font-bold text-gray-700">Other Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Insurance Policy
            </label>
            <p className="mt-1 text-gray-800">
              <a
                href="#"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                insurance_policy.pdf
              </a>
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Vaccination Record
            </label>
            <p className="mt-1 text-gray-800">
              <a
                href="#"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                vaccination_record.pdf
              </a>
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Discharge Summary
            </label>
            <p className="mt-1 text-gray-800">
              <a
                href="#"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                discharge_summary.pdf
              </a>
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Billing Information
            </label>
            <p className="mt-1 text-gray-800">
              <a
                href="#"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                billing_info.pdf
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Documentos