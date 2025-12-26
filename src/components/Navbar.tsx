'use client';
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const navigation = [
  { 
    name: 'Home', 
    href: '/' 
  },
  { 
    name: 'About Us', 
    href: '/about',
    dropdown: [
      { name: 'Our Mission', href: '/about/mission' },
      { name: 'Our History', href: '/about/history' },
      { name: 'Leadership Team', href: '/about/leadership' }
    ]
  },
  { 
    name: 'Academics', 
    href: '/academics',
    dropdown: [
      { name: 'Curriculum', href: '/academics/curriculum' },
      { name: 'Departments', href: '/academics/departments' }
    ]
  },
  { 
    name: 'Admissions', 
    href: '/admissions',
    dropdown: [
      { name: 'Admission Process', href: '/admissions/process' },
      { name: 'Fee Structure', href: '/admissions/fees' },
      { name: 'Scholarships', href: '/admissions/scholarships' },
      { name: 'Apply Now', href: '/admissions/apply' }
    ]
  },
  { 
    name: 'Facilities', 
    href: '/facilities' 
  },
  { 
    name: 'News', 
    href: '/news' 
  },
  { 
    name: 'Gallery', 
    href: '/gallery' 
  },
  { 
    name: 'Notice Board', 
    href: '/notice-board' 
  },
  { 
    name: 'Contact Us', 
    href: '/contact' 
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-indigo-950 via-blue-900 to-indigo-950 shadow-2xl sticky top-0 z-50 border-b border-indigo-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="flex items-center group">
                    <div className="relative overflow-hidden rounded-full border-2 border-blue-400 shadow-lg shadow-blue-500/20">
                      <Image
                        src="/images/academics/school.png"
                        alt="Rajput Public School"
                        width={60}
                        height={60}
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                        priority
                      />
                    </div>
                    {/* <div className="ml-3 hidden md:block">
                      <h1 className="text-white font-bold text-xl">Rajput Public School</h1>
                      <p className="text-blue-200 text-xs">Excellence in Education</p>
                    </div> */}
                  </Link>
                </div>
                <div className="hidden sm:ml-8 sm:flex sm:space-x-1">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative group">
                      <Link
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? 'text-white border-b-2 border-yellow-400 bg-blue-800/30'
                            : 'text-blue-100 hover:text-white hover:bg-blue-800/20',
                          'inline-flex items-center px-4 pt-1 border-b-2 border-transparent text-sm font-medium transition-all duration-300 rounded-t-md'
                        )}
                      >
                        {item.name}
                        {item.dropdown && (
                          <ChevronDownIcon className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                        )}
                      </Link>
                      
                      {item.dropdown && (
                        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                          <div className="py-2 rounded-md bg-gradient-to-b from-white to-blue-50">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-500"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-3">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-full text-blue-200 hover:text-white hover:bg-blue-800/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
                
                <Link
                  href="/apply"
                  className="inline-flex items-center px-4 py-2 border border-yellow-400 text-sm font-medium rounded-md text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-all duration-200"
                >
                  Apply Now
                </Link>
              </div>
              
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-800/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400 transition-colors duration-200">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="bg-blue-900/90 backdrop-blur-sm border-t border-blue-700 px-4 py-3 shadow-inner">
              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for courses, news, events..."
                    className="w-full px-4 py-2 pl-10 pr-4 text-blue-100 bg-blue-800/50 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-blue-300"
                  />
                  <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-blue-300" />
                </div>
              </div>
            </div>
          )}

          <Disclosure.Panel className="sm:hidden bg-gradient-to-b from-blue-900 to-indigo-950">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Disclosure.Button
                    as="a"
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? 'bg-blue-800/50 border-yellow-400 text-white'
                        : 'border-transparent text-blue-100 hover:bg-blue-800/30 hover:text-white',
                      'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                  
                  {item.dropdown && (
                    <div className="pl-8 pr-4 py-2 space-y-1 bg-blue-950/50">
                      {item.dropdown.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as="a"
                          href={subItem.href}
                          className="block pl-3 pr-4 py-2 text-base font-medium text-blue-200 hover:text-white hover:bg-blue-800/30 rounded-md"
                        >
                          {subItem.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 pb-3 border-t border-blue-700">
                <div className="mt-3 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="/login"
                    className="block px-4 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/30"
                  >
                    Login
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/apply"
                    className="block px-4 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/30"
                  >
                    Apply Now
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}