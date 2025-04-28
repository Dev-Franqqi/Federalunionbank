import { FiLock } from 'react-icons/fi';

export default function SecurityBreachNotice() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <div className="bg-orange-100 border border-orange-400 rounded-2xl p-8 shadow-lg max-w-md text-center">
        <div className="flex justify-center mb-4">
          <FiLock className="text-orange-500 w-16 h-16" />
        </div>
        <h1 className="text-2xl font-bold text-black mb-2">
          Security Breach Resolved
        </h1>
        <p className="text-black mb-4">
          Dear Kevin Costner,
        </p>
        <p className="text-gray-700 mb-6">
          We detected unauthorized activity, but rest assured — an amount of <span className="text-orange-500 font-semibold">$600,000</span> has been securely returned to your account.
        </p>
        <p className="text-gray-700 mb-6 font-semibold">
          For your protection, your account has been temporarily <span className="text-orange-500">locked</span>.  
          Please contact customer support to restore full access.
        </p>
        <p className="text-sm text-gray-500">
          Thank you for trusting our bank. Your security is our top priority.
        </p>
      </div>
    </div>
  );
}
