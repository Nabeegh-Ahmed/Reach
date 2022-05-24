import React from "react"
import SignIn from "../signIn"
import { HeaderProps } from "./types"
import SignUp from "../signUp"
import Link from "next/link"
import { UserContext } from "../../contexts/UserContext"
import SignOut from "../signOut"

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  const {state} = React.useContext(UserContext)
    return (
        <div className="relative bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/" passHref>
                  <div className="text-xl font-bold">{title}</div>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                  <span className="sr-only">Open menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <div className="header-buttons hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {
                links.map(({ name, path }, index) => (
                    <a href={path} key={index} className="font-medium text-gray-500 mx-5 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        {name}
                    </a>
                ))
                }
                {
                  !state.isAuth ? 
                  <>
                    <div className="mx-5">
                      <SignIn />
                    </div>
                    <SignUp />
                  </> : 
                  
                  <SignOut />
                }
                
              </div>
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                  </div>
                  <div className="-mr-2">
                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Help Center </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Guides </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Events </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Security </a>
                </div>
                <div>
                  <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a href="#" className="text-indigo-600 hover:text-indigo-500"> Sign in </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

Header.defaultProps = {
    title: "Sample Title",
    links: [
        {
            name: "Home",
            path: "/"
        },
    ]
}

export default Header