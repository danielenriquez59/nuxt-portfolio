<template>
    <AppSection id="contact">
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 md:col-span-5">
                <div class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
                    style="background-image: url('/contact.jpg'); height: 400px">
                    <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                        style="background-color: rgba(0, 0, 0, 0.65)">
                        <div class="flex h-full items-center justify-center">
                            <div class="text-white">
                                <h2 class="mb-4 text-4xl font-semibold">Contact Me</h2>
                                <p class="mb-6 px-16">Schedule our first meeting by reaching out now!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form class="col-span-12 md:col-span-7 justify-self-center" name="contact" method="POST" data-netlify="true">
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>

    </AppSection>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
const state = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
})


function onSubmit() {
    // reset form
    state.name = '';
    state.email = '';
    state.phone = '';
    state.message = '';
}
</script>
