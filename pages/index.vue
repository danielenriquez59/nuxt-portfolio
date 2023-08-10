<template>
    <TheHero />
    <Teams class="bg-slate-100 dark:bg-slate-600" />
    <Solutions v-if="resumeType" />
    <HowItWorks v-else />
    <Experience v-if="resumeType" class="bg-slate-100 dark:bg-slate-600" id="experience" />
    <SoftwareExperience v-else class="bg-slate-100 dark:bg-slate-600" id="experience" />
    <Contact />
</template>

<script setup>
const darkMode = darkModeState()
const resumeType = isAerospaceState();

useSeoMeta({
    title: 'EZngineering - Aerospace & Web Development Specialist',
    ogTitle: 'EZngineering - Aerospace & Web Development Specialist',
    description: 'I specialize in contract work for aerospace industry as well as web app development.',
    ogDescription: 'I specialize in contract work for aerospace industry as well as web app development.',
    ogImage: 'https://ezngineering.com/profile-pic-sq.webp',
    twitterCard: 'summary_large_image',
})

</script>
