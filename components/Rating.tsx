import React from 'react'

function Rating(    { rating }: { rating: number }) {
  return (
     <div className="flex gap-1">
      {[1,2,3,4,5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          className={`w-5 h-5 ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
        >
          <path d="M12 2l2.94 6.63L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.06-.64L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default Rating