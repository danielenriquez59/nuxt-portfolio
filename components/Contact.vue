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
            <form class="col-span-12 md:col-span-7 px-5 space-y-4" name="contact" method="POST" data-netlify="true">
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-100 ">Your Name:</label>
                    <input class="mt-1 p-2 w-full border rounded-md text-black" type="text" name="name" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-100">Your Email:</label>
                    <input class="mt-1 p-2 w-full border rounded-md text-black" type="email" name="email" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-100">Message:</label>
                    <textarea class="mt-1 p-2 w-full h-32 border rounded-md text-black" name="message"></textarea>
                </div>
                <div>
                    <button
                        class="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                        type="submit">
                        <div class="flex gap-2 items-center"><i class="pi pi-send text-black "></i>Send</div>
                    </button>
                </div>
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
