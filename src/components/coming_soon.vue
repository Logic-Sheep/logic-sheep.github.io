<template>
    <section x-data="{ isOpen: false }" class="w-full min-h-screen bg-white dark:bg-gray-900">
        <div class="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
            <section class="flex items-center flex-1">
                <div class="flex flex-col w-full ">
                    <h1 class="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                        <span class="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                            Coming
                        </span>
    
                        <span class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                            Soon
                        </span>
                    </h1>
    
                    <p class="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
                        We are still cooking something awesome for you. Stay tuned for the launch.
                    </p>
    
                    <div class="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
    
                        <router-link to="/" class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">Home <span aria-hidden="true">→</span></router-link>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>