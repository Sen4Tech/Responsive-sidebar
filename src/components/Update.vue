<script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router';

  const nodo = ref("");
  const kategori = ref("");
  const itemdesc = ref("");
  const hargasatuan = ref(0);
  const subtotal = ref(0);

  const route = useRoute();  
  const NoDo = route.params.id; 

  const collection = ref(null);

  const getData = async () => {
    try {
      let result = await axios.get(`http://localhost:9381/getDB/web/getData/${NoDo}`);
      collection.value = result.data;

      if (collection.value) {
        nodo.value = collection.value.NoDo || "";
        kategori.value = collection.value.Kategori || "";
        itemdesc.value = collection.value.item_desc || "";
        hargasatuan.value = collection.value.harga_satuan || 0;
        subtotal.value = collection.value.subtotal || 0;
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };

  const editItem = async () => {
    try {
      let result = await axios.put(`http://localhost:9381/getDB/web/update/${NoDo}`, {
        NoDo: nodo.value,
        Kategori: kategori.value,
        item_desc: itemdesc.value,
        harga_satuan: hargasatuan.value,
        subtotal: subtotal.value
      });

      console.log("Update result:", result.data);
      alert("Data Updated Successfully");
    } catch (error) {
      console.error("Error while updating data:", error);
    }
  };

  onMounted(getData);
</script>

<template>
  <div class="flex justify-center items-center flex-col container">
    <h1 class="font-bold text-2xl">Update Item Details</h1>

    <form @submit.prevent="editItem"> 
      <div>
        <label for="nodo">No Do:</label>
        <input v-model="nodo" type="text" :placeholder="nodo" />
      </div>
      <div>
        <label for="kategori">Kategori:</label>
        <input v-model="kategori" type="text" :placeholder="kategori ? kategori : 'Kategori from DB'" />
      </div>
      <div>
        <label for="itemdesc">Item Description:</label>
        <input v-model="itemdesc" type="text" :placeholder="itemdesc ? itemdesc : 'Item Description from DB'" />
      </div>
      <div>
        <label for="hargasatuan">Harga Satuan:</label>
        <input v-model="hargasatuan" type="number" :placeholder="hargasatuan ? hargasatuan : 'Harga Satuan from DB'" />
      </div>
      <div>
        <label for="subtotal">Subtotal:</label>
        <input v-model="subtotal" type="number" :placeholder="subtotal ? subtotal : 'Subtotal from DB'" />
      </div>
      <div>
        <button type="submit">Update</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #00a0eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #44e3e9;
  color: black;
}


</style>
