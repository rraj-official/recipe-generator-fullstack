import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

const LandingPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div style={{
            backgroundImage: "url(/image.jpg)",
            filter: "brightness(0.9)"
        }} className='w-full h-screen bg-cover bg-center'>
            <div className="flex h-screen flex-1 flex-col">
                <div className="">
                    <div className="mx-auto max-w-2xl pt-16 sm:pt-48 lg:pt-48">
                        <div className="text-center">
                            <h1 className="text-4xl tracking-tight text-white font-normal sm:text-6xl">
                                Welcome to the world of foodies!
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-white">
                                Register now and get free recipes by giving food surveys!
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="/register"
                                    className="rounded-md bg-[#af6625] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#ffa352] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Register
                                </a>
                                <a href="/login" className="text-sm font-semibold leading-6 text-white">
                                    Log In
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage