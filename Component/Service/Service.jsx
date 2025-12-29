import React from 'react'


function ServiceRow({ service }) {
  const isRight = service.side === "right";
  const Icon = service.icon;

  return (
    <> 
    <div className="relative md:w-6xl   bg-gray-700 mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
  <div className="relativ   flex flex-col   md:flex-row items-center justify-center">
  

    {/* LINE (hidden on mobile) */}
    <div
      className={`
        hidden md:block
        absolute
        h-1
        bg-gray-400
        transition-all duration-300
        w-40 lg:w-[400px]
        ${isRight ? "right-[3%]" : "left-[3%]"}
      `}
    />

    {/* CENTER DIAMOND */}
    <div className="relative my-10">
      <div
        className={`
          w-32 h-32
          sm:w-46 sm:h-46
          md:w-46  md:h-46
          lg:w-56 lg:h-56
          border-8
          rotate-45
          rounded-lg
          flex items-center justify-center
          shadow-lg
          transition-transform duration-300
          hover:scale-105
          ${service.color}
        `}
      >
        <div className="-rotate-45 text-white">
          <Icon className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 transition-transform duration-300 hover:scale-125" />
        </div>
      </div>

      {/* ID BADGE */}
      <span
        className={`
          absolute -bottom-4
          ${service.side === "right" ? "right-10" : "left-10"}
          bg-white
          text-black
          rounded-full
          w-10 h-10
          sm:w-12 sm:h-12
          flex items-center justify-center
          font-semibold
          transition-transform duration-300
          hover:scale-110
        `}
      >
        {service.id}
      </span>
    </div>

    {/* TEXT CARD */}
    <div
      className={`
        relative md:absolute
        max-w-xs
        bg-white
        rounded-md
        shadow-md
        p-4
        text-left
        transition-transform duration-300
        hover:scale-105
        md:mt-0
        ${isRight ? "md:right-[3%]" : "md:left-[3%]"}
      `}
    >
      <h4 className="text-center font-semibold text-slate-700 mb-1">
        {service.title.toUpperCase()}
      </h4>
      <p className="text-sm text-gray-500 leading-relaxed">
        {service.description}
      </p>
    </div>

  </div>
</div>
    
    </>
  );
}

export default ServiceRow