<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
import type { success } from "zod";

const items = ref<DropdownMenuItem[]>([
  {
    label: "Profile",
    icon: "i-lucide-user",
  },
  {
    label: "Billing",
    icon: "i-lucide-credit-card",
  },
  {
    label: "Settings",
    icon: "i-lucide-cog",
  },
]);
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{
      align: 'end',
      side: 'bottom',
      sideOffset: 8,
    }"
    :ui="{
      content: 'w-25',
    }"
    color="red"
  >
    <UButton
      label="Menu"
      icon="i-lucide-menu"
      color="success"
      variant="outline"
    />
  </UDropdownMenu>
</template>
