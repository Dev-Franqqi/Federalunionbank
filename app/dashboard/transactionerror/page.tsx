import React from 'react';

const SecurityBreachMessage = () => {
  return (
    <div className="bg-white border-2 border-red-600 rounded-lg p-6 max-w-lg mx-auto text-center shadow-lg mt-5">
      <svg
        className="w-12 h-12 text-red-600 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Important Security Notice
      </h2>
      <p className="text-gray-700 mb-6">
        We have detected a potential security issue affecting some accounts. As a precaution, all affected accounts have been temporarily locked until further notice. We are working diligently to resolve this issue and will notify you when access is restored.
      </p>
    </div>
  );
};

export default SecurityBreachMessage;