<script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import { Edit, Trash } from 'lucide-vue-next';  

  const collection = ref([]);

  const getData = async () => {
    try {
      let result = await axios.get('http://localhost:9341/getDB/web/getCust');
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
    <h1 class="font-bold text-2xl text-center text">Data From Customer</h1>
    
    <div class="overflow-x-auto bg-white rounded-lg shadow-lg border border-gray-200">
      <table class="min-w-full table-auto">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="px-4 py-3 text-center border-b font-semibold">ID Customer</th>
            <th class="px-4 py-3 text-center border-b font-semibold">Nama</th>
            <th class="px-4 py-3 text-center border-b font-semibold">Email</th>
            <th class="px-4 py-3 text-center border-b font-semibold">Date Pembelian</th>
            <th class="px-4 py-3 text-center border-b font-semibold">ID Product</th>
            <th class="px-4 py-3 text-center border-b font-semibold">Qty Order</th> 
            <th class="px-4 py-3 text-center border-b font-semibold">Actions</th> 
          </tr>
        </thead>
        
        <tbody class="text-gray-700">
          <tr v-for="(item) in collection" :key="item.NoDo" class="hover:bg-gray-50">
            <td class="px-4 py-3 border-b text-center">{{ item.id_cust }}</td>
            <td class="px-4 py-3 border-b text-center">{{ item.cust_nm }}</td>
            <td class="px-4 py-3 border-b text-center">{{ item.cust_email }}</td>
            <td class="px-4 py-3 border-b text-center">{{ item.date_buy }}</td>
            <td class="px-4 py-3 border-b text-center">{{ item.id_product }}</td>
            <td class="px-4 py-3 border-b text-center">{{ item.qty }}</td>
            <td class="flex space-x-4 justify-center gap-3"> 
              <Edit class="cursor-pointer hover:text-blue-500" size="18"/> 
              <Trash class="cursor-pointer hover:text-red-500" size="18"/> 
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
    margin-bottom: 1rem;
    margin-top: 1rem;
  }


</style>
