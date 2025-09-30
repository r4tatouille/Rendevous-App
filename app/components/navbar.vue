<template>
  <nav
    class="flex items-center justify-between p-4 border-b border-amber-500 bg-slate-900 top-0 left-0 sticky"
  >
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
    <div class="flex items-center space-x-10">
      <NuxtLink
        to="/registration"
        class="text-white hover:text-yellow-500 transition"
        >Registration</NuxtLink
      >
      <NuxtLink to="/login" class="text-white hover:text-yellow-500 transition"
        >Logout</NuxtLink
      >
    </div>
  </nav>
</template>
