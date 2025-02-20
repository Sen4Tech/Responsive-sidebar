<script setup>
import { ref } from 'vue';

const data = ref([
  ['Data 1', 'Data 2', 'Data 3'],
  ['Data 4', 'Data 5', 'Data 6']
]);
</script>
<template>
    <main class="Home-page flex flex-col">
        <h1 class="font-bold text-2xl flex">Data From Progress</h1>
        <div class="container">
    <table class="table border border-2 font-medium w-150 h-50">    
      <thead class="">
        <tr>
          <th class="border-left border-2">Kolom 1</th>
          <th class="border-left border-2">Kolom 2</th>
          <th class="border-left border-2">Kolom 3</th>
        </tr>
      </thead>
      <tbody class="text-center border border-2">
        <tr v-for="(row, index) in data" :key="index">
          <td class="border-left border-2">{{ row[0] }}</td>
          <td class="border-left border-2">{{ row[1] }}</td>
          <td class="border-left border-2">{{ row[2] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
    </main>
</template>