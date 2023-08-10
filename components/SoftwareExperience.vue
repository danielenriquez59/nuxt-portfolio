
<template>
    <AppSection>
        <h2 class="text-center">Portfolio</h2>
        <Carousel :value="jobs" :numVisible="3" :numScroll="3">
            <template #item="slotProps">
                <CardExperience :slotProps="slotProps" :key="slotProps.data.name" />
            </template>
        </Carousel>
    </AppSection>
</template>

<script setup>
import Carousel from 'primevue/carousel';

const jobs = [
    {
        "name": "Airfolio Search",
        "image": "airfolio.webp",
        "description": "Database search web app for finding and displaying airfoils. Built on Vue with Mongo DB.",
        "link": "https://airfoliosearch.com/",
        "logos": [
            "vue",
            "mongodb",
            "feathers",
        ]
    },
    {
        "name": "Instant Nourish",
        "image": "instantnourish.webp",
        "description": "Charity web app for donating food to children in need. Built with Vue, Nuxt, Stripe, and Firestore DB.",
        "link": "https://instantnourish.com/",
        "logos": [
            "vue",
            "firebase",
            "mongodb",
        ]
    },
    {
        "name": "Farprobe",
        "image": "farprobe.webp",
        "description": "Basic landing page for promoting a business. Built only with HTML, CSS, and JS.",
        "link": "https://farprobe.com/",
        "logos": [
            "html",
            "css",
        ]
    },
    {
        "name": "Ferrara Therapy",
        "image": "ferraratherapy.webp",
        "description": "Basic landing page for promoting a business. Built with Elementor CMS.",
        "link": "https://amandaferraratherapy.com/",
        "logos": [
            "html",
            "css",
        ]
    },
]

</script>