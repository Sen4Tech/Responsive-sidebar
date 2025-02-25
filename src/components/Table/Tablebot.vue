<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { Edit, Trash } from 'lucide-vue-next'; 

const collection = ref([]);

const getData = async() => {
  try {
    let result = await axios.get('http://localhost:9381/getDB/web/getDB/CNCSTI-001')
    console.log(result.data);

    collection.value = result.data;

  } catch (error) {
    console.error(error);
  }
}

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
    <main class="Home-page flex flex-col">
        <h1 class="font-bold text-2xl text-center text">Data From Company</h1>
        
        <div class="overflow-x-auto bg-white rounded-lg shadow-lg border border-gray-200">
    <table class=" ">    
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
        <tr class="text-black hover:bg-gray-50">
          <td class="px-4 py-3 border-b">{{ collection.No_Contract }}</td>
          <td class="px-4 py-3 border-b">{{ collection.Cust_KD }}</td>
          <td class="px-4 py-3 border-b">{{ collection.cust_name }}</td>
          <td class="px-4 py-3 border-b">{{ collection.divisi_nm}}</td>
          <td class="px-4 py-3 border-b">{{ collection.sub_divisi_nm}}</td>
          <td class="px-4 py-3 border-b">{{ collection.itemno}}</td>
          <td class="px-4 py-3 border-b">{{ collection.item_desc}}</td>
          <td class="flex space-x-4 justify-center gap-3"> 
              <Edit class="cursor-pointer hover:text-blue-500" size="18"/> 
              <Trash class="cursor-pointer hover:text-red-500" size="18"  @click="deleteItem(item.NoDo)"/> 
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