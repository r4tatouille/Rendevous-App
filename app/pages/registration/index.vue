<script setup lang="ts">
import { ref } from "vue";

// Data dummy awal
const users = ref([
  { id: 1, name: "Frederick", email: "frederick@mail.com" },
  { id: 2, name: "Nathaniel", email: "nathaniel@mail.com" },
]);

// State form
const newUser = ref({ id: 0, name: "", email: "" });
const editingId = ref<number | null>(null);

// Tambah data
function addUser() {
  if (!newUser.value.name || !newUser.value.email) return;
  users.value.push({
    id: Date.now(),
    name: newUser.value.name,
    email: newUser.value.email,
  });
  newUser.value = { id: 0, name: "", email: "" };
}

// Edit data
function editUser(user: any) {
  editingId.value = user.id;
  newUser.value = { ...user };
}

// Update data
function updateUser() {
  users.value = users.value.map((u) =>
    u.id === editingId.value ? { ...newUser.value } : u
  );
  editingId.value = null;
  newUser.value = { id: 0, name: "", email: "" };
}

// Hapus data
function deleteUser(id: number) {
  users.value = users.value.filter((u) => u.id !== id);
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <UCard class="w-full max-w-2xl p-6 bg-slate-900 border-gray-700">
      <template #header>
        <h1 class="text-xl font-bold tetx-black">Input Data</h1>
      </template>

      <!-- Form -->
      <div class="space-y-4 mb-6">
        <UInput v-model="newUser.name" placeholder="Name" class="w-full" />
        <UInput v-model="newUser.email" placeholder="Email" class="w-full" />

        <div class="flex space-x-2">
          <UButton v-if="editingId === null" @click="addUser" color="primary">
            Add User
          </UButton>
          <UButton v-else @click="updateUser"> Update User </UButton>
        </div>
      </div>

      <!-- Table -->
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
              <UButton size="xs" @click="editUser(user)"> Edit </UButton>
              <UButton size="xs" @click="deleteUser(user.id)"> Delete </UButton>
            </td>
          </tr>
        </tbody>
      </table>
    </UCard>
  </div>
</template>
