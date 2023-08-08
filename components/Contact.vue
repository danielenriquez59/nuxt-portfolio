<template>
    <AppSection>
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
            <form class="col-span-12 md:col-span-7 justify-self-center" @submit="onSubmit">
                <div class="flex flex-column gap-2 my-2">
                    <InputText id="name" v-model="state.name" placeholder="Name" :pt="{
                        root: { class: 'w-3/4' }
                    }" />
                </div>
                <div class="flex flex-column gap-2 my-2">
                    <InputText id="email" v-model="state.email" placeholder="Email" :pt="{
                        root: { class: 'w-3/4' }
                    }" />
                </div>
                <div class="flex flex-column gap-2 my-2">
                    <InputText id="phone" v-model="state.phone" placeholder="Phone" :pt="{
                        root: { class: 'w-3/4' }
                    }" />
                </div>
                <div class="flex flex-column gap-2 my-2">
                    <Textarea autoresize v-model="state.message" rows="5" cols="52" placeholder="Send Me a Message...." />
                </div>
                <Button label="Send" type="submit" class="p-button-raised my-4" icon="pi pi-send"></Button>
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

<style lang="scss" scoped></style>