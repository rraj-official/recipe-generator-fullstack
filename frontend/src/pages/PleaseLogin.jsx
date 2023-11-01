import React from 'react'

const PleaseLogin = () => {
    return (
        <>
            <div style={{
                backgroundImage: "url(/image.jpg)",
                filter: "brightness(0.9)"
            }} className='w-full h-screen bg-cover bg-center'>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
                    <div className='text-5xl text-white text-center'>
                        Please Log in to access user profile.
                    </div>
                </div>
            </div>
        </>
    )
}

export default PleaseLogin