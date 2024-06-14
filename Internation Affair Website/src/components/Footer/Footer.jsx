import React from 'react'

export function Footer() {
  return (
    <section className="relative overflow-hidden bg-white py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
          <div className="inline-flex items-center">
                <div className="inline-flex items-center">
                <span className="ml-4 text-lg font-bold"><img src="data:image/jpeg;base64,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" className="w-16 h-12"alt="" /></span>
              </div>
              </div>
          </div>
          <div className="w-auto p-8">
            <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5">
                <a className="font-normal text-xs text-gray-600 hover:text-gray-700" href="#">
                  Join IIITD
                </a>
              </li>
              <li className="p-5">
                <a className="font-normal text-xs text-gray-600 hover:text-gray-700" href="#">
                  Visitors Resource
                </a>
              </li>
              <li className="p-5">
                <a className="font-normal text-xs text-gray-600 hover:text-gray-700" href="#">
                  Community
                </a>
              </li>
              <li className="p-5">
                <a className="font-normal text-xs text-gray-600 hover:text-gray-700" href="#">
                 Important Links
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
