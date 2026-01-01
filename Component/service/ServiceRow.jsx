import React from 'react'


function ServiceRow({ service }) {
  const isRight = service.side === "right";
  const Icon = service.icon;

  return (
    <> <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 2xl:px-20 py-12 sm:py-16 lg:py-20">
  <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">

    {/* LINE (hidden on mobile & tablet) */}
    <div
      className={`hidden lg:block absolute h-1 bg-gray-500 transition-all duration-300 
        w-40 xl:w-[320px] 2xl:w-[420px]
        ${isRight ? "right-[5%]" : "left-[5%]"}`}
    />

    {/* CENTER DIAMOND */}
    <div className="relative flex-shrink-0">
      <div
        className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 
          lg:w-52 lg:h-52 2xl:w-60 2xl:h-60
          border-8 rotate-45 rounded-lg 
          flex items-center justify-center shadow-lg
          transition-transform duration-300 hover:scale-105
          ${service.color}`}
      >
        <div className="-rotate-45 text-white">
          <Icon
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
            lg:w-16 lg:h-16 2xl:w-20 2xl:h-20
            transition-transform duration-300 hover:scale-125"
          />
        </div>
      </div>

      {/* ID BADGE */}
      <span
        className={`absolute -bottom-4 
          ${service.side === "right" ? "right-6" : "left-6"}
          sm:right-8 sm:left-8
          bg-white text-black rounded-full
          w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
          flex items-center justify-center font-semibold
          transition-transform duration-300 hover:scale-110`}
      >
        {service.id}
      </span>
    </div>

    {/* TEXT CARD */}
    <div
      className={`relative md:absolute w-full max-w-sm sm:max-w-md
        bg-white rounded-md shadow-md p-4 sm:p-5
        text-left transition-transform duration-300 hover:scale-105
        mt-6 md:mt-0
        ${isRight ? "md:right-[5%]" : "md:left-[5%]"}`}
    >
      <h4 className="text-center font-semibold text-slate-700 mb-2 text-sm sm:text-base">
        {service.title.toUpperCase()}
      </h4>
      <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
        {service.description}
      </p>
    </div>

  </div>
</div>
    
    </>
  );
}

export default ServiceRow