<template>
    <Card class="m-1 p-1 h-96 relative">
        <template #title>
            <h4 class="m-0 ">{{ slotProps.data.name }}</h4>
        </template>
        <template #content>
            <div class="flex flex-col h-full gap-y-3 items-center">
                <div class="relative">
                    <a :href="slotProps.data.link" @mouseover="showIcon = true" @mouseleave="showIcon = false">
                        <img :src="'/images/' + slotProps.data.image"
                            class="h-32 m-1 -mt-3 border border-3 border-gray-400 rounded-lg" :alt="slotProps.data.image">
                    </a>
                    <div v-if="showIcon" class="absolute bottom-1 left-2">
                        <i class="pi pi-external-link text-blue-500 dark:filter-none shadow"></i>
                    </div>
                </div>

                <div class="text-center px-1">
                    <p>{{ slotProps.data.description }}</p>
                </div>
                <div class="absolute bottom-7 flex mt-auto justify-center">
                    <img v-if="slotProps.data.logos.includes('vue')" src="~/assets/logos/vue.svg" class="h-9" alt="vue">
                    <img v-if="slotProps.data.logos.includes('mongodb')" src="~/assets/logos/mongodb.svg" class="h-9"
                        alt="mongodb">
                    <img v-if="slotProps.data.logos.includes('html')" src="~/assets/logos/html.svg" class="h-9" alt="html">
                    <img v-if="slotProps.data.logos.includes('css')" src="~/assets/logos/css.svg" class="h-9" alt="css">
                    <img v-if="slotProps.data.logos.includes('firebase')" src="~/assets/logos/firebase.svg" class="h-9"
                        alt="firebase">
                    <img v-if="slotProps.data.logos.includes('feathers')" src="~/assets/logos/feathers.svg" class="h-9"
                        alt="feathers">
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
import Card from 'primevue/card';
defineProps({
    slotProps: {
        type: Object,
        default: {},
    }
})
const showIcon = ref(false)
</script>

<style scoped>
.p-card {
    background: rgb(250, 250, 250)
}

.dark .p-card {
    background: rgb(117, 126, 138)
}
</style>