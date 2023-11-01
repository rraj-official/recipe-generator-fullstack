import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Register', href: '/register', current: false },
    { name: 'Login', href: '/login', current: false },
    { name: 'Profile', href: '/userprofile', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = (props) => {
    const {loginUser}=props;
    const {itemIndex}=props;

    const [selectedItem, setSelectedItem] = useState(navigation[itemIndex]);
    const handleItemClick = (item) => {
        // Update the selected item when a link is clicked
        setSelectedItem(item);
    };

    const navigate = useNavigate();
    // this implementation does not work yet for navbar to catch ids
    const location = useLocation();
    return (
        <Disclosure as="nav" className="bg-[#6b3e17]">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://i.imgur.com/T395W7g.png"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                className={classNames(
                                                    item.name == selectedItem.name ? 'bg-[#af6625] text-white hover:cursor-pointer' : 'text-gray-300 hover:bg-[#93541d] hover:text-white hover:cursor-pointer',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                onClick={() => {
                                                    setSelectedItem(item);
                                                    // this implementation does not work yet for navbar to catch ids
                                                    navigate(item.href, { state: location.state });
                                                }}
                                                aria-current={item.name == selectedItem.name ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
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
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={classNames(active ? 'bg-gray-100 hover:cursor-pointer' : '', 'block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer')}
                                                        onClick={() => {
                                                            setSelectedItem(navigation[3]);
                                                            navigate(navigation[3].href);
                                                        }}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={classNames(active ? 'bg-gray-100 hover:cursor-pointer' : '', 'block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer')}
                                                    >
                                                        Recipe Generator
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={classNames(active ? 'bg-gray-100 hover:cursor-pointer' : '', 'block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer')}
                                                        onClick={() => {
                                                            setSelectedItem(navigation[2]);
                                                            loginUser();
                                                            navigate(navigation[2].href);
                                                        }}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar