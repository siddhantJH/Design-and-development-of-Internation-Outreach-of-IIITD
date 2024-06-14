import React from 'react'

export function Footer() {
  return (
    <section className="relative overflow-hidden bg-white py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="inline-flex items-center">
                <span className="ml-4 text-lg font-bold">IIITD</span>
              </div>
            </a>
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
