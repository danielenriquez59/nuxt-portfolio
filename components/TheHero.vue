<template>
    <nuxt-img preload src="/images/coding.jpg" alt="coding" class="hidden" />
    <nuxt-img preload src="/images/aircraft.jpg" alt="aircraft" class="hidden" />
    <AppSection class=" md:py-0 hero " :class="computedClass">
        <div class="grid grid-cols-12 grid-nogutter text-800 bg-center bg-cover bg-no-repeat px-[3vw]">
            <div class="col-span-12 md:col-span-6 p-2 text-center md:text-left flex align-items-center">
                <section class="place-self-center filter-none">
                    <transition name="swipe" mode="out-in">
                        <div v-if="resumeType">
                            <h1 class="block ">Your aerospace </h1>
                            <h1 class="mb-5 ">engineering expert!</h1>
                        </div>
                        <div v-else>
                            <h1 class="block ">Your software </h1>
                            <h1 class="text-primary mb-5 ">development expert!</h1>
                        </div>
                    </transition>
                    <div v-if="resumeType">
                        <p class="mt-0 mb-5 text-700 line-height-3 ">I specialize in aerospace and software development.
                            <br> Contact me now to start engineering your vision.
                        </p>
                    </div>
                    <div v-else>
                        <p class="mt-0 mb-5 text-700 line-height-3 ">Let me help you bring your vision to the web. <br>
                            Contact
                            me now to get started desiging yours! </p>
                    </div>
                    <div class="flex gap-3">
                        <Button label="Contact" type="button" class="p-button-raised" @click="scrollToContact"></Button>
                        <a href="/contact.jpg" download>
                            <Button label="View Resume" type="button" class="p-button-outlined"></Button>
                        </a>
                    </div>
                </section>
            </div>
            <div class="col-span-12 md:col-span-6">
                <nuxt-img preload src="/images/profile-pic-sq.webp" alt="Image"
                    class="md:ml-auto block md:h-[75vh] filter-none"
                    style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" />
            </div>
        </div>
    </AppSection>
</template>

<script setup>

const resumeType = isAerospaceState();

// Initialize the class based on the initial value of resumeType
const computedClass = ref(resumeType.value ? 'hero-aerospace' : 'hero-coding');

// Watch resumeType for changes and update computedClass accordingly
watch(resumeType, (newValue) => {
    computedClass.value = newValue ? 'hero-aerospace' : 'hero-coding';
});

scrollToContact() {
    const element = document.querySelector('#contact');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

</script>

<style scoped>
.hero {
    background-position: 0px center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}

.hero-coding {
    background-image: linear-gradient(to right, rgba(244, 244, 244, 0.85) 0%,
            rgba(244, 244, 244, 1.0) 60%,
            rgba(244, 244, 244, 1.0) 90%,
            rgba(244, 244, 244, 0.85) 100%), url(/images/coding.jpg);
}

.hero-aerospace {
    background-image: linear-gradient(to right, rgba(244, 244, 244, 0.85) 0%,
            rgba(244, 244, 244, 1.0) 60%,
            rgba(244, 244, 244, 1.0) 90%,
            rgba(244, 244, 244, 0.85) 100%), url(/images/aircraft.jpg);
}

.dark .hero-coding {
    /* You may also need to adjust the dark mode background-image as per your requirements */
    background-image: linear-gradient(to right, rgba(51, 65, 85, 0.85) 0%,
            rgba(51, 65, 85, 1.0) 60%,
            rgba(51, 65, 85, 1.0) 90%,
            rgba(51, 65, 85, 0.85) 100%), url(/images/coding.jpg);
}

.dark .hero-aerospace {
    /* You may also need to adjust the dark mode background-image as per your requirements */
    background-image: linear-gradient(to right, rgba(51, 65, 85, 0.85) 0%,
            rgba(51, 65, 85, 1.0) 60%,
            rgba(51, 65, 85, 1.0) 90%,
            rgba(51, 65, 85, 0.85) 100%), url(/images/aircraft.jpg);
}
</style>