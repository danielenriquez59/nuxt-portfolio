<template>
    <div class="col-span-12 md:col-span-4 mb-4 px-5">
        <span class="p-3 shadow-2 inline-block surface-card" style="border-radius: 10px">
            <i :class="`pi ${icon} text-blue-500 dark:filter-none`"></i>
        </span>

        <!-- Named slot for title -->
        <slot name="title">
        </slot>

        <!-- Named slot for description -->
        <slot name="description">
        </slot>
    </div>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        default: "pi-book"
    }
})
</script>
