import React from 'react'

function barComponent() {
  const service = [
    {
      id: 1,
      tittle: " Web Design Company in Chandigarh",
    }, {
      id: 2,
      tittle: " Web Design Company in Delhi",
    }, {
      id: 3,
      tittle: " Web Design Company in Gurgaon",
    }, {
      id: 4,
      tittle: " Web Design Company in  Uttarakhand",
    }, {
      id: 5,
      tittle: " Web Design Company in Noida",
    }, {
      id: 6,
      tittle: " Web Design Company in  Greater Noida  ",
    }, {
      id: 7,
      tittle: " Web Design Company in Mumbai",
    }, {
      id: 8,
      tittle: " Web Design Company in Gujrat",
    }, {
      id: 9,
      tittle: " Web Design Company in  Uttar Pradesh",
    }
  ]

  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-12">
            Growchip AI Tecnology Location Wise Web Designing Services
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {service.map((service, index) => (
              <div
                key={index}
                className=" border-2 border-[#84DA2E] rounded-lg py-4 px-6 text-center font-medium text-white cursor-pointer transition-all duration-200 hover:bg-blue-50 hover:text-[#2596BE] ">
                {service.tittle}
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}

export default barComponent