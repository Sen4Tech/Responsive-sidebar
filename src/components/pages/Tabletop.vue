<script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import { Edit, Trash } from 'lucide-vue-next';  

  const collection = ref([]);

  const getData = async () => {
    try {
      let result = await axios.get('http://localhost:9341/getDB/web/getData');
      console.log(result.data);
      collection.value = result.data;
    } catch (error) {
      console.error(error);
    }
  };

  onMounted(getData);
</script>

<template>
  <main class="Home-page flex flex-col container py-6">
    <h1 class="font-bold text-2xl mb-4">Data From Progress</h1>
    
    <div class="overflow-x-auto">
      <table class="min-w-full table-auto border-collapse bg-white shadow-lg rounded-lg">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="px-4 py-3 text-left border-b font-semibold">No Do</th>
            <th class="px-4 py-3 text-left border-b font-semibold">Kategori</th>
            <th class="px-4 py-3 text-left border-b font-semibold">Item Description</th>
            <th class="px-4 py-3 text-left border-b font-semibold">Harga Satuan</th>
            <th class="px-4 py-3 text-left border-b font-semibold">SubTotal</th>
            <th class="px-4 py-3 text-left border-b font-semibold">Actions</th> 
          </tr>
        </thead>
        
        <tbody class="text-gray-700">
          <tr v-for="(item) in collection" :key="item.NoDo" class="hover:bg-gray-50">
            <td class="px-4 py-3 border-b">{{ item.NoDo }}</td>
            <td class="px-4 py-3 border-b">{{ item.Kategori }}</td>
            <td class="px-4 py-3 border-b">{{ item.item_desc }}</td>
            <td class="px-4 py-3 border-b">{{ item.harga_satuan }}</td>
            <td class="px-4 py-3 border-b">{{ item.subtotal }}</td>
            <td class="px-4 py-3 border-b text-gray-500 flex justify-start space-x-2"> 
              <Edit class="cursor-pointer hover:text-blue-500" size="18"/> 
              <Trash class="cursor-pointer hover:text-red-500" size="18"/> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
