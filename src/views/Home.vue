<script setup>
import { ref } from 'vue';

const data = ref([
  ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
  ['Data 4', 'Data 5', 'Data 6', 'Data 7']
]);
</script>
<template>
    <main class="Home-page flex flex-col">
        <h1 class="font-bold text-2xl flex leading-15">Data From Progress</h1>
        <div class="container">
    <table class="table border border-2 font-medium w-150 h-50">    
      <thead class="">
        <tr>
          <th class="border-left border-2">No Do</th>
          <th class="border-left border-2">Kategori</th>
          <th class="border-left border-2">Nama Barang</th>
          <th class="border-left border-2">Harga Satuan</th>
        </tr>
      </thead>
      <tbody class="text-center border border-2">
        <tr v-for="(row, index) in data" :key="index">
          <td class="border-left border-2">{{ row[0] }}</td>
          <td class="border-left border-2">{{ row[1] }}</td>
          <td class="border-left border-2">{{ row[2] }}</td>
          <td class="border-left border-2">{{ row[3] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
    </main>
</template>