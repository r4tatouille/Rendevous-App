<script setup lang="ts">
// You might choose this based on an API call or logged-in status
const layout = "main";
</script>
<template>
  <UApp>
    <NuxtLayout :name="layout">
      <div class="min-h-screen bg-slate-950">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </UApp>
</template>
