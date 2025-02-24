<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const collection = ref([]);

const getData = async() => {
  try {
    let result = await axios.get('http://localhost:9341/getDB/web/getData')
    console.log(result.data);

    collection.value = result.data;

  } catch (error) {
    console.error(error);
  }
}

onMounted(getData);
</script>
<template>
    <main class="Home-page flex flex-col container">
        <h1 class="font-bold text-2xl flex leading-15">Data From Progress</h1>
        <div class="container">
    <table class="table border border-2 font-medium w-150 h-50">    
      <thead>
        <tr>
          <th class="border-left border-2">No Do</th>
          <th class="border-left border-2">Kategori</th>
          <th class="border-left border-2">Item Description</th>
          <th class="border-left border-2">Harga Satuan</th>
          <th class="border-left border-2">SubTotal</th>
        </tr>
      </thead>
      <tbody class="text-center border border-2 ">
        <tr class="text-black" v-for="(item) in collection" :key="item.NoDo">
          <td class="border-left border-2">{{ item.NoDo }}</td>
          <td class="border-left border-2">{{ item.Kategori }}</td>
          <td class="border-left border-2">{{ item.item_desc }}</td>
          <td class="border-left border-2">{{ item.harga_satuan}}</td>
          <td class="border-left border-2">{{ item.subtotal}}</td>
        </tr>
      </tbody>
    </table>
  </div>
    </main>

    
</template>
