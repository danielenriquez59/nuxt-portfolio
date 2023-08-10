<template>
    <AppSection class="py-8 text-center">
        <h2>
            <span>How It Works </span>
        </h2>
        <div class="text-700 mb-6 px-2">My design process helps you quickly bring your app or website to life.</div>
        <div class="grid grid-cols-12">
            <SolutionsCard icon="pi-book">
                <template #title>
                    <h3>1. Initial Consultation</h3>
                </template>
                <template #description>
                    <span class="text-700 line-height-3">We sit down to discuss your vision and goals for the project.
                        Together we outline an action plan that meets your needs. </span>
                </template>
            </SolutionsCard>
            <SolutionsCard icon="pi-th-large">
                <template #title>
                    <h3>2. Wireframe / Prototype </h3>
                </template>
                <template #description>
                    <span class="text-700 line-height-3">I layout an initial wireframe and we discuss features to include.
                        Here we select images, copywrite, and more.
                    </span>
                </template>
            </SolutionsCard>
            <SolutionsCard icon="pi-send">
                <template #title>
                    <h3>3. Implementation</h3>
                </template>
                <template #description>
                    <span class="text-700 line-height-3">
                        I set to work implementing the project, while sending you regular updates to ensure you are
                        satisfied with the end product.
                    </span>
                </template>
            </SolutionsCard>
        </div>
    </AppSection>
</template>

<script setup>

</script>
