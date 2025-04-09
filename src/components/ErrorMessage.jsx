// components/ErrorMessage.jsx

const ErrorMessage = ({ message, retryFn }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-red-50 border-l-4 border-red-400 p-4 max-w-md">
        <div className="flex">
          <div className="flex-shrink-0">{/* Error icon */}</div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{message}</p>
            {retryFn && (
              <button
                onClick={retryFn}
                className="mt-2 text-sm font-medium text-red-600 hover:text-red-500"
              >
                Retry
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
