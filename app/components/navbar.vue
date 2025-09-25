<template>
  <nav class="flex">
    <div class="logo flex">
      <NuxtLink to="/">
        <h1>Rende<span class="text-yellow-500">vous</span></h1>
        <UIcon name="material-symbols:lightbulb-rounded" class="size-8"></UIcon>
      </NuxtLink>
    </div>

    <div class="flex justify-items-center m-3">
      <NuxtLink to="/">Home</NuxtLink>
    </div>
    <div class="flex justify-items-center m-3">
      <NuxtLink to="/registration">Registration</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.logo {
  font-size: 25px;
  font-style: italic;
  font-weight: bold;
  margin: 5px;
}
</style>
