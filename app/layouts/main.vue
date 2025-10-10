<template>
  <main class="bg-slate-900">
    <div>
      <Navbar></Navbar>
    </div>
    <div class="flex">
      <Sidebar></Sidebar>
      <div class="flex-auto bg-slate-950">
        <slot></slot>
      </div>
    </div>
  </main>
  <!-- <Navbar />
  <UDashboardGroup>
    <sidebar />
    <UDashboardPanel>
      <template #header>
        <slot></slot>
      </template>
    </UDashboardPanel>
  </UDashboardGroup> -->
</template>
