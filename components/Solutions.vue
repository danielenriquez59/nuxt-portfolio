<template>
    <AppSection class="py-8 text-center">
        <h2>
            <span>One Engineer, </span>
            <span class="text-blue-600">Many Solutions</span>
        </h2>
        <div class="text-700 mb-6">With 7+ years of experience in the aerospace industry, I have a proven record of
            success in the field.</div>
        <div class="grid grid-cols-12">
            <SolutionsCard icon="pi-book">
                <template #title>
                    <h3>Strong Design Principles</h3>
                </template>
                <template #description>
                    <span class="text-700 line-height-3"> I use foundational design principles to ground all my
                        analysis.</span>
                </template>
            </SolutionsCard>
            <SolutionsCard icon="pi-th-large">
                <template #title>
                    <h3>Systems Oriented</h3>
                </template>
                <template #description>
                    <span class="text-700 line-height-3">Understanding how a decision impacts all aspects of the system is
                        critical to good design.</span>
                </template>
            </SolutionsCard>
            <SolutionsCard icon="pi-send">
                <template #title>
                    <h3>Aerodynamic Analysis</h3>
                </template>
                <template #description>
                    <span class="text-700 line-height-3">
                        Experienced in CFD, VLM, and other aerodynamic analyses to yield
                        streamlined results.
                    </span>
                </template>
            </SolutionsCard>
            <SolutionsCard icon="pi-globe">
                <template #title>
                    <h3>Multidisciplinary Analysis</h3>
                </template>
                <template #description>
                    <span class="text-700 line-height-3">
                        I've used tools such as SUAVE, OpenMDAO, and OpenVSP to build aircraft
                        optimization pipelines.
                    </span>
                </template>
            </SolutionsCard>
            <SolutionsCard icon="pi-github">
                <template #title>
                    <h3>Software Development</h3>
                </template>
                <template #description>
                    <span class="text-700 line-height-3">
                        An experienced coder, I can build robust and reliable software
                        pipelines in a variety of languages.
                    </span>
                </template>
            </SolutionsCard>
            <SolutionsCard icon="pi-phone">
                <template #title>
                    <h3>On Demand Support</h3>
                </template>
                <template #description>
                    <span class="text-700 line-height-3">
                        I am proud of the work I deliver and will work to deliver results that
                        satisfy the project needs.
                    </span>
                </template>
            </SolutionsCard>
        </div>
    </AppSection>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>