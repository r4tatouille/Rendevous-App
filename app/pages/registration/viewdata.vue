<script setup lang="ts">
import { ref } from "vue";

// Data dummy awal
const users = ref([
  { id: 1, name: "Rheiya", email: "memento mori@wahoo.com" },
  { id: 2, name: "r4tatouille", email: "callyouback25@wahoo.com" },
]);

// State form
const newUser = ref({ id: 0, name: "", email: "" });
const editingId = ref<number | null>(null);

// Edit data
function editUser(user: any) {
  editingId.value = user.id;
  newUser.value = { ...user };
}

// Hapus data
function deleteUser(id: number) {
  users.value = users.value.filter((u) => u.id !== id);
}
</script>

<template>
  <div class="items-center m-5">
    <UCard class="w-full max-w-2xl bg-slate-900 border-gray-700">
      <div class="flex justify-between mb-5">
        <h1 class="text-white font-bold text-xl">Input Data</h1>
        <UButton
          class=""
          to="/registration/inputdata"
          variant="subtle"
          color="primary"
          >Add New
        </UButton>
      </div>
      <!-- Table -->
      <div class="overflow-auto">
        <table class="w-full border border-gray-700 text-left">
          <thead class="bg-gray-800">
            <tr>
              <th class="p-2 border-b border-gray-700">Name</th>
              <th class="p-2 border-b border-gray-700">Email</th>
              <th class="p-2 border-b border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in users"
              :key="user.id"
              class="border-b border-gray-700 text-white"
            >
              <td class="p-2 text-white">{{ user.name }}</td>
              <td class="p-2 text-white">{{ user.email }}</td>
              <td class="p-2 space-x-2 text-black">
                <UButton size="xs" variant="subtle" @click="editUser(user)">
                  Edit
                </UButton>
                <UModal title="Confirm Delete">
                  <UButton size="xs" label="Delete" variant="subtle" />

                  <template #body>
                    <Placeholder class="h-48">
                      <UButton
                        size="xs"
                        variant="subtle"
                        @click="deleteUser(user.id)"
                      >
                        Confirm
                      </UButton>
                      <UButton
                        size="xs"
                        variant="subtle"
                        @click="deleteUser(user.id)"
                      >
                        Cancel
                      </UButton>
                    </Placeholder>
                  </template>
                </UModal>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </UCard>
  </div>
</template>
