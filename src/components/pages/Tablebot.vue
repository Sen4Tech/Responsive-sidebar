<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { Edit, Trash } from 'lucide-vue-next'; 

const collection = ref([]);

const getData = async() => {
  try {
    let result = await axios.get('http://localhost:9341/getDB/web/getDB/CNCSTI-001')
    console.log(result.data);

    collection.value = result.data;

  } catch (error) {
    console.error(error);
  }
}

onMounted(getData);
</script>
<template>
    <main class="Home-page flex flex-col">
        <h1 class="font-bold text-2xl flex leading-15">Data From Progress</h1>
        
        <div class="container overflow-x-auto">
    <table class="w-270 table-auto border-collapse bg-white shadow-lg rounded-lg">    
      <thead class="bg-gray-100 text-gray-700">
        <tr>
          <th class="px-4 py-3 text-left border-b font-semibold">No Contract</th>
          <th class="px-4 py-3 text-left border-b font-semibold">Kode Customer</th>
          <th class="px-4 py-3 text-left border-b font-semibold">Nama Customer</th>
          <th class="px-4 py-3 text-left border-b font-semibold">Nama Divisi</th>
          <th class="px-4 py-3 text-left border-b font-semibold">Nama Sub Divisi</th>
          <th class="px-4 py-3 text-left border-b font-semibold">Item No</th>
          <th class="px-4 py-3 text-left border-b font-semibold">Description</th>
          <th class="px-4 py-3 text-left border-b font-semibold">Actions</th> 
        </tr>
      </thead>

      <tbody class="text-gray-700">
        <tr class="text-black">
          <td class="px-4 py-3 border-b">{{ collection.No_Contract }}</td>
          <td class="px-4 py-3 border-b">{{ collection.Cust_KD }}</td>
          <td class="px-4 py-3 border-b">{{ collection.cust_name }}</td>
          <td class="px-4 py-3 border-b">{{ collection.divisi_nm}}</td>
          <td class="px-4 py-3 border-b">{{ collection.sub_divisi_nm}}</td>
          <td class="px-4 py-3 border-b">{{ collection.itemno}}</td>
          <td class="px-4 py-3 border-b">{{ collection.item_desc}}</td>
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
