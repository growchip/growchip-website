"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-red-600">
        Something went wrong
      </h2>

      <p className="mt-2 text-white">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-black text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}