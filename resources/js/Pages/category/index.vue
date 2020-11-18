<template>
  <app-layout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Manage Post - (Laravel 8 Inertia JS CRUD with Jetstream & Tailwind CSS -
        ItSolutionStuff.com)
      </h2>
    </template>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-4 py-4">
          <!-- <button @click="openModal()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">Create New Post</button> -->
          <!-- <jet-nav-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3" :href="route('category.create')" :active="route().current('category.create')" method="post" as="button" type="button">Logout</jet-nav-link> -->
          <inertia-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3" :href="route('category.create')" :active="route().current('category.create')" method="get" as="button" type="button">Add</inertia-link>

          <table class="table-fixed w-full">
            <thead>
              <tr class="bg-gray-100">
                <th class="px-4 py-2 w-20">No.</th>
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in data">
                <td class="border px-4 py-2">{{ row.id }}</td>
                <td class="border px-4 py-2">{{ row.name }}</td>
                <!-- <td class="border px-4 py-2">{{ row.title }}</td>
                                <td class="border px-4 py-2">{{ row.body }}</td> -->
                <td class="border px-4 py-2">
                  <button
                    @click="edit(row)"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteRow(row)"
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </app-layout>
</template>
<script>
import AppLayout from "./../../Layouts/AppLayout";
import JetNavLink from '@/Jetstream/NavLink'

export default {
  components: {
    AppLayout,
    JetNavLink,
  },
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    edit: function (data) {
      this.form = Object.assign({}, data);
      this.editMode = true;
      this.openModal();
    },
    deleteRow: function (data) {
      if (!confirm("Are you sure want to remove?")) return;
      data._method = "DELETE";
      this.$inertia.post("/posts/" + data.id, data);
      this.reset();
      this.closeModal();
    },
  },
};
</script>