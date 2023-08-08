<template>
    <AppSection>
        <div v-if="resumeType">
            <div class="flex justify-center">
                <h2 class="mb-8 ">Teams I've Worked With </h2>
            </div>
            <div class="flex gap-8 justify-center">
                <img src="~/assets/logos/northrop.png" alt="Northrop Grumman" class="h-11" />
                <img src="~/assets/logos/talyn.webp" alt="Talyn Air" class="h-9" />
                <img src="~/assets/logos/rif.png" alt="Research In Flight" class="h-11" />
                <img src="~/assets/logos/mejzlik.png" alt="Mejzlik Propellers" class="h-11" />
            </div>
        </div>
        <div v-else>
            <div class="flex justify-center">
                <h2 class="mb-8 ">Codes I've Worked With </h2>
            </div>
            <div class="flex gap-8 justify-center">
                <img src="~/assets/logos/html.svg" alt="html" class="h-14" />
                <img src="~/assets/logos/css.svg" alt="css" class="h-14" />
                <img src="~/assets/logos/mongodb.svg" alt="mongodb" class="h-20" />
                <img src="~/assets/logos/vue.svg" alt="vue" class="h-14" />
                <img src="~/assets/logos/firebase.svg" alt="firebase" class="h-14" />
                <img src="~/assets/logos/github.svg" alt="github" class="h-14" />
            </div>
        </div>
    </AppSection>
</template>

<script setup >
const resumeType = isAerospaceState();

</script>
