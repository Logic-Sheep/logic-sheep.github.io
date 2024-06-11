<template>
    <section class="bg-white dark:bg-gray-900" id="team">
        <div class="container px-6 py-10 mx-auto">
            <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h1>

            <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                With a commitment to excellence and a collaborative approach, we drive technological advancements from concept to deployment.
            </p>
            <div class="grid gap-8 mt-8 xl:mt-16" :class="team_members.length <= 2 ? 'grid-cols-' : 'md:grid-cols-2 xl:grid-cols-3'">
            <!-- <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-1"> -->
                <div v-for="member in team_members" :key="member.id"
                    class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                    <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" :src="member.image"
                        :alt="member.name">
                    <h1
                        class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                        {{ member.name }}</h1>
                    <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{{ member.role
                        }}</p>
                    <div class="flex mt-3 -mx-2">
                        <a v-for="link in member.links" :key="link.id" :href="link.url"
                            class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                            :aria-label="link.label">
                            <svg class="w-6 h-6 fill-current" :viewBox="link.viewBox" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path :d="link.path"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { github_path_svg, reddit_path_svg } from './models/const';
const team_members = [
    {
        id: 1,
        name: 'Sebastian-Ion Nae',
        role: 'R&D Engineer',
        image: 'https://avatars.githubusercontent.com/u/19248295?v=4',
        links:[
            // {
            //     id: 'reddit',
            //     url: '#',
            //     label: 'Reddit',
            //     viewBox: '0 0 24 24',
            //     path: reddit_path_svg
            // },
            {
                id: 'github',
                url: 'https://github.com/SheepSeb',
                label: 'Github',
                viewBox: '0 0 24 24',
                path:github_path_svg
            }
        ]
    },
]
</script>