<template>
    <TheHero />
    <Teams class="bg-slate-100 dark:bg-slate-600" />
    <Solutions v-if="resumeType" />
    <HowItWorks v-else />
    <Experience v-if="resumeType" class="bg-slate-100 dark:bg-slate-600" />
    <SoftwareExperience v-else class="bg-slate-100 dark:bg-slate-600" />
    <Contact />
</template>

<script setup>
const darkMode = darkModeState()
const resumeType = isAerospaceState();

definePageMeta({
    title: 'EZngineering - Aerospace & Web Development Specialist',
})

</script>
