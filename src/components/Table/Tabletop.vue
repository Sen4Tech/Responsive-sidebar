<script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import { Edit, Trash } from 'lucide-vue-next';  

  const collection = ref([]);

  const getData = async () => {
    try {
      let result = await axios.get('http://localhost:9381/getDB/web/getData');
      console.log(result.data);
      collection.value = result.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (dataDelete) => {
    try{
      let result = await axios.delete(`http://localhost:9381/getDB/web/update/${dataDelete}`);
      console.log("Delete Successfully" , result);
      getData()
      alert("Delete Successfully")
    } catch(error){
      console.error(error);
    }
  } 

  onMounted(getData);
</script>

<template>
  <main class="Home-page flex flex-col container py-6 px-4">
    <div class="font-bold text-2xl text-center text">Data From Progress</div>

    <div class="overflow-x-auto bg-white rounded-lg shadow-lg border border-gray-200">
      <table class="min-w-full table-auto">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="px-4 py-3 text-center border-b font-semibold">No Do</th>
            <th class="px-4 py-3 text-center border-b font-semibold">Kategori</th>
            <th class="px-4 py-3 text-center border-b font-semibold">Item Description</th>
            <th class="px-4 py-3 text-center border-b font-semibold">Harga Satuan</th>
            <th class="px-4 py-3 text-center border-b font-semibold">SubTotal</th>
            <th class="px-4 py-3 text-center border-b font-semibold">Actions</th> 
          </tr>
        </thead>
        
        <tbody class="text-gray-700">
          <tr v-for="(item) in collection" :key="item.NoDo" class="hover:bg-gray-100">
            <td class="px-6 py-4 border-b text-center">{{ item.NoDo }}</td>
            <td class="px-6 py-4 border-b text-center">{{ item.Kategori }}</td>
            <td class="px-6 py-4 border-b text-center">{{ item.item_desc }}</td>
            <td class="px-6 py-4 border-b text-center">{{ item.harga_satuan }}</td>
            <td class="px-6 py-4 border-b text-center">{{ item.subtotal }}</td>
            <td class="px-6 py-4 border-b text-gray-500">
              <div class="flex space-x-4 justify-center gap-3">
                <Edit class="cursor-pointer hover:text-blue-600" size="20" /> 
                <Trash class="cursor-pointer hover:text-red-600" size="20" @click="deleteItem(item.NoDo)"/> 
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
  .table-auto th {
    text-transform: uppercase;
  }

  .table-auto td {
    font-size: 14px;
  }

  .hover\:bg-gray-100:hover {
    background-color: #f7fafc;
  }

  .text{
    margin-bottom: 2rem
  }
</style>
