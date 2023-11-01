import React from 'react'

const SurveyPage = () => {
    return (
        <div style={{
            backgroundImage: "url(/image.jpg)",
            filter: "brightness(0.9)"
        }} className='w-full h-screen bg-cover bg-center'>
            <div>
                <h2 className="p-20 text-center text-3xl font-bold leading-9 tracking-tight text-white">
                    Enter your preferences to generate recipes.
                </h2></div>
            <div className='p-10 flex items-center justify-center'>
                <fieldset className='m-10 mt-3'>
                    <legend className="text-sm font-semibold leading-6 text-white">Question 1</legend>
                    <p className="mt-1 text-sm leading-6 text-white">What's your preferred protein source for this meal?</p>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-veg"
                                name="push-source"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-veg" className="block text-sm font-medium leading-6 text-white">
                                Vegetarian (tofu, beans, etc.)
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-fish"
                                name="push-source"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-fish" className="block text-sm font-medium leading-6 text-white">
                                Fish
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-chicken"
                                name="push-source"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-chicken" className="block text-sm font-medium leading-6 text-white">
                                Chicken
                            </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset className='m-10'>
                    <legend className="text-sm font-semibold leading-6 text-white">Question 2</legend>
                    <p className="mt-1 text-sm leading-6 text-white">Which flavor profile do you prefer?</p>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-spicy"
                                name="push-flavour"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-spicy" className="block text-sm font-medium leading-6 text-white">
                                Spicy
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-sweet"
                                name="push-flavour"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-white">
                                Sweet
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-savory"
                                name="push-flavour"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-savory" className="block text-sm font-medium leading-6 text-white">
                                Savory
                            </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset className='m-10'>
                    <legend className="text-sm font-semibold leading-6 text-white">Question 3</legend>
                    <p className="mt-1 text-sm leading-6 text-white">What type of cuisine are you in the mood for?</p>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-italian"
                                name="push-cuisine"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-italian" className="block text-sm font-medium leading-6 text-white">
                                Italian
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-mexican"
                                name="push-cuisine"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-mexican" className="block text-sm font-medium leading-6 text-white">
                                Mexican
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-asian"
                                name="push-cuisine"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-asian" className="block text-sm font-medium leading-6 text-white">
                                Asian
                            </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset className='m-10'>
                    <legend className="text-sm font-semibold leading-6 text-white">Question 4</legend>
                    <p className="mt-1 text-sm leading-6 text-white">Choose your side dish:</p>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-rice"
                                name="push-side"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-rice" className="block text-sm font-medium leading-6 text-white">
                                Rice
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-salad"
                                name="push-side"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-salad" className="block text-sm font-medium leading-6 text-white">
                                Salad
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-bread"
                                name="push-side"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-bread" className="block text-sm font-medium leading-6 text-white">
                                Bread
                            </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset className='m-10'>
                    <legend className="text-sm font-semibold leading-6 text-white">Question 5</legend>
                    <p className="mt-1 text-sm leading-6 text-white">What's your cooking skill level?</p>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-beginner"
                                name="push-level"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-beginner" className="block text-sm font-medium leading-6 text-white">
                                Beginner
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-intermediate"
                                name="push-level"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-intermediate" className="block text-sm font-medium leading-6 text-white">
                                Intermediate
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-advanced"
                                name="push-level"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-[#e09740] focus:ring-[#e09740]"
                            />
                            <label htmlFor="push-advanced" className="block text-sm font-medium leading-6 text-white">
                                Advanced
                            </label>
                        </div>
                    </div>
                </fieldset>

            </div>
            <div className='flex justify-center '>
                <button
                    type="submit"
                    className="flex w-[200px] justify-center rounded-md bg-[#e09758] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#e09740] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                // onClick={}
                >
                    Generate Recipe
                </button></div>

        </div>
    )
}

export default SurveyPage