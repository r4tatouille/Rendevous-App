<template>
  <nav class="flex items-center justify-between p-4 border-b bg-slate-900">
    <!-- Logo + Icon -->
    <div class="flex items-center space-x-2">
      <NuxtLink to="/" class="flex items-center space-x-1">
        <h1 class="text-2xl font-bold italic">
          <span class="text-white">Rende</span
          ><span class="text-yellow-500">vous</span>
        </h1>
        <UIcon
          name="material-symbols:lightbulb-rounded"
          class="size-8 text-yellow-400"
        />
      </NuxtLink>
    </div>

    <!-- Menu kanan -->
    <div class="flex items-center space-x-6">
      <NuxtLink to="/" class="hover:text-yellow-500 transition">Home</NuxtLink>
      <NuxtLink to="/registration" class="hover:text-yellow-500 transition"
        >Registration</NuxtLink
      >
    </div>
  </nav>
</template>
