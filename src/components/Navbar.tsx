import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const user = {
  name: '',
  email: '',
  imageUrl:
    '../assets/connections_logo.png',
}
const navigation = [
  { name: 'Home', href: '/'},
  { name: 'Query', href: '/query'},
  { name: 'About Us', href: '/about'},
  { name: 'Contact', href: '/contact'},
]
const userNavigation = [
  { name: 'Sign out', href: '/login' },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}


function Navbar({ loginInfo }: { loginInfo: UserLogin | null }) {
  let userInfo: any;
  // let location = useLocation();
  if (loginInfo) {

     userInfo = <div>
                  <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <span className='text-white'>{loginInfo?.name}</span>
                </Menu.Button>
              </div>

  } else {
     /*
     if (location.pathname=='/login'){
         userInfo = <Link to='/login'>
                        <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded">
                         Sign In
                        </button>
                    </Link> 
     } else {
         userInfo = <Link to='/login'>
                        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                         Sign In
                        </button>
                    </Link> 
         }
         */
         userInfo = <Link to='/login'>
                        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                         Sign In
                        </button>
                    </Link> 
  }
  return (
    <>
        <Disclosure as="nav" className="bg-gray-800 z-40">
          {({ open }) => (
            <>
              <div className="mx-auto px-2 sm:px-4 lg:px-6">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to='/'>
                      <img
                        className="h-8 w-18"
                        src="https://i.ibb.co/QY73W0F/connections-logo.png"
                        alt="Connections"
                      />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              (location.pathname == item.href)
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={(location.pathname == item.href) ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        {userInfo}
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
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

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        (location.pathname == item.href) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={(location.pathname == item.href) ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={
                             loginInfo
                                    ? loginInfo?.photo
                                    : user.imageUrl
                        } alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{loginInfo ? loginInfo?.name : user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{loginInfo ? loginInfo?.userName : user.email}</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </>
  )
}

export default Navbar;
