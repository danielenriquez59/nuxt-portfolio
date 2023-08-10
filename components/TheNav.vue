<template>
    <Menubar :model="items" class="-mx-0 shadow-sm " :class="[darkMode ? 'dark' : '']">
        <template #start>
            <div class="flex gap-20 items-center px-8 md:pl-[10vw]">
                <h2>EZngineering</h2>
                <div class="flex gap-3">
                    <div v-if="resumeType">
                        <img src="~/assets/airplane.svg" class="w-10 filter dark:invert">
                    </div>
                    <div v-else>
                        <img src="~/assets/computer.svg" class="w-10  filter dark:invert">
                    </div>
                    <ToggleButton v-model="resumeType" onLabel="Aerospace" offLabel="Software" class="text-sm w-32" />
                </div>
                <div class="flex gap-2 items-start mt-1 ">
                    <i class="pi pi-sun mx-1"></i>
                    <InputSwitch v-model="darkMode" size="sm" :pt="{ slider: { class: 'h-5' } }" />
                </div>
            </div>
        </template>
    </Menubar>
</template>

<script setup>
// composition API
import Menubar from 'primevue/menubar';
import ToggleButton from 'primevue/togglebutton';
import InputSwitch from 'primevue/inputswitch';
const resumeType = isAerospaceState();
const darkMode = darkModeState()
const items = ref([]);
const colorMode = useColorMode()

watch(darkMode, () => {
    if (darkMode.value) {
        colorMode.preference = "dark"
    } else {
        colorMode.preference = "light"

    }
})

</script>

<style scoped>
.p-menubar {
    background-color: rgb(241, 245, 249);
    border: 0;
}

.dark .p-menubar {
    background-color: rgb(51 65 85);
    border: 0;
}
</style>