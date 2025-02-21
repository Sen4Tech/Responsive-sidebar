<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const collection = ref([]);

const getData = async() => {
  try {
    let result = await axios.get('http://localhost:9341/getDB/web/get-DB/DOSTI000001')
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
    <table class="table border border-2 font-medium w-150 h-30">    
      <thead>
        <tr>
          <th class="border-left border-2">No Contract</th>
          <th class="border-left border-2">Kode Customer</th>
          <th class="border-left border-2">Nama Customer</th>
          <th class="border-left border-2">Nama Divisi</th>
          <th class="border-left border-2">Nama Sub Divisi</th>
        </tr>
      </thead>
      <tbody class="text-center border border-2 ">
        <tr class="text-black">
          <td class="border-left border-2">{{ collection.NoDo }}</td>
          <td class="border-left border-2">{{ collection.Kategori }}</td>
          <td class="border-left border-2">{{ collection.nm_barang }}</td>
          <td class="border-left border-2">{{ collection.harga_satuan}}</td>
          <td class="border-left border-2">{{ collection.subtotal}}</td>
        </tr>
      </tbody>
    </table>
  </div>
    </main>

    
</template>
