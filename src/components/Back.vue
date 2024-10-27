<script setup>
  import { defineProps } from "vue";
  import { RouterLink } from "vue-router";

  defineProps({
    link: String,
  });
</script>

<template>
  <!-- Go Back -->
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        :to="link"
        class="text-green-500 hover:text-green-600 flex items-center">
        <i class="pi pi-arrow-left mr-2"></i> Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>
