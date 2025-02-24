<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

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
        <div class="container">
    <table class="table border border-2 font-medium w-250 h-30">    
      <thead>
        <tr>
          <th class="border-left border-2">No Contract</th>
          <th class="border-left border-2">Kode Customer</th>
          <th class="border-left border-2">Nama Customer</th>
          <th class="border-left border-2">Nama Divisi</th>
          <th class="border-left border-2">Nama Sub Divisi</th>
          <th class="border-left border-2">Item No</th>
          <th class="border-left border-2">Description</th>
        </tr>
      </thead>
      <tbody class="text-center border border-2 ">
        <tr class="text-black">
          <td class="border-left border-2">{{ collection.No_Contract }}</td>
          <td class="border-left border-2">{{ collection.Cust_KD }}</td>
          <td class="border-left border-2">{{ collection.cust_name }}</td>
          <td class="border-left border-2">{{ collection.divisi_nm}}</td>
          <td class="border-left border-2">{{ collection.sub_divisi_nm}}</td>
          <td class="border-left border-2">{{ collection.itemno}}</td>
          <td class="border-left border-2">{{ collection.item_desc}}</td>
        </tr>
      </tbody>
    </table>
  </div>
    </main>

    
</template>
