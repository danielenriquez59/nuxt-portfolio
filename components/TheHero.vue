<template>
    <AppSection class="md:mx-5 md:py-0">
        <div class="grid grid-cols-12 grid-nogutter text-800">
            <div class="col-span-12 md:col-span-6 p-2 text-center md:text-left flex align-items-center ">
                <section class="place-self-center">
                    <div v-if="resumeType">
                        <h1 class="block ">Your aerospace </h1>
                        <h1 class="text-primary mb-5">engineering expert!</h1>
                    </div>
                    <div v-else>
                        <h1 class="block ">Your software </h1>
                        <h1 class="text-primary mb-5">develpment expert!</h1>
                    </div>
                    <p class="mt-0 mb-5 text-700 line-height-3">Providing business & success oriented engineering for your
                        project. Specializing in aerospace and web app development. </p>
                    <div class="flex gap-3">
                        <Button label="Contact" type="button" class="p-button-raised"></Button>
                        <Button label="View Resume" type="button" class="p-button-outlined"></Button>
                    </div>
                </section>
            </div>
            <div class="col-span-12 md:col-span-6 overflow-hidden">
                <img src="~/assets/profile-pic-sq.webp" alt="Image" class="md:ml-auto block md:h-[75vh]"
                    style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
            </div>
        </div>
    </AppSection>
</template>

<script setup>
const resumeType = isAerospaceState();

</script>

<style lang="scss" scoped></style>