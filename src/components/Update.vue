<script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  
  const nodo = ref(""); 
  const kategori = ref(""); 
  const itemdesc = ref(""); 
  const hargasatuan = ref(0);
  const subtotal = ref(0);
  const loading = ref(true);
  const route = useRoute();  
  const NoDo = route.params.id;
  
  const getData = async () => {
    loading.value = true;
    try {
      console.log("Fetching data for ID:", NoDo);
      const result = await axios.get(`http://localhost:9371/getDB/web/getData/${NoDo}`);
      console.log("API Response:", result.data);
      
      if (Array.isArray(result.data)) {
        const item = result.data.find(item => item.NoDo === NoDo);
        if (item) {
          console.log("Found item in array:", item);
          nodo.value = item.NoDo || "";
          kategori.value = item.Kategori || "";
          itemdesc.value = item.item_desc || "";
          hargasatuan.value = item.harga_satuan || 0;
          subtotal.value = item.subtotal || 0;
        } else {
          console.error("Item not found in array");
        }
      } 

      else if (result.data && typeof result.data === 'object') {
        console.log("Data is object:", result.data);
        nodo.value = result.data.NoDo || "";
        kategori.value = result.data.Kategori || "";
        itemdesc.value = result.data.item_desc || "";
        hargasatuan.value = result.data.harga_satuan || 0;
        subtotal.value = result.data.subtotal || 0;
      }
      
      console.log("After assignment - values:", {
        nodo: nodo.value,
        kategori: kategori.value,
        itemdesc: itemdesc.value,
        hargasatuan: hargasatuan.value,
        subtotal: subtotal.value
      });
    } catch (error) {
      console.error("Error while fetching data:", error);
    } finally {
      loading.value = false;
    }
  };
  
  const editItem = async () => {
    try {
      const result = await axios.put(`http://localhost:9371/getDB/web/update/${NoDo}`, {
        NoDo: nodo.value,
        Kategori: kategori.value,
        item_desc: itemdesc.value,
        harga_satuan: Number(hargasatuan.value),
        subtotal: Number(subtotal.value)
      });
      console.log("Update result:", result.data);
      alert("Data Updated Successfully");
    } catch (error) {
      console.error("Error while updating data:", error);
      alert("Error updating data: " + (error.message || "Unknown error"));
    }
  };
  
  onMounted(() => {
    console.log("Component mounted, calling getData()");
    getData();
  });
</script>

<template>
  <div class="flex justify-center items-center flex-col container">
    <h1 class="font-bold text-2xl mb-4">Update Item Details</h1>
    
    <div v-if="loading" class="w-full max-w-600 p-4 bg-blue-100 rounded text-center mb-4">
      <p>Mengambil data dari database...</p>
    </div>
    
    <form @submit.prevent="editItem"> 
      <div>
        <label for="nodo">No Do:</label>
        <input 
          v-model="nodo" 
          type="text" 
          id="nodo"
          :placeholder="loading ? 'Loading...' : 'Masukkan No Do'"
        />
        <p class="text-sm text-gray-500">Current value: {{ nodo }}</p>
      </div>
      
      <div>
        <label for="kategori">Kategori:</label>
        <input 
          v-model="kategori" 
          type="text" 
          id="kategori"
          :placeholder="loading ? 'Loading...' : 'Masukkan Kategori'"
        />
        <p class="text-sm text-gray-500">Current value: {{ kategori }}</p>
      </div>
      
      <div>
        <label for="itemdesc">Item Description:</label>
        <input 
          v-model="itemdesc" 
          type="text" 
          id="itemdesc"
          :placeholder="loading ? 'Loading...' : 'Masukkan Item Description'"
        />
        <p class="text-sm text-gray-500">Current value: {{ itemdesc }}</p>
      </div>
      
      <div>
        <label for="hargasatuan">Harga Satuan:</label>
        <input 
          v-model="hargasatuan" 
          type="number" 
          id="hargasatuan"
          :placeholder="loading ? 'Loading...' : 'Masukkan Harga Satuan'"
        />
        <p class="text-sm text-gray-500">Current value: {{ hargasatuan }}</p>
      </div>
      
      <div>
        <label for="subtotal">Subtotal:</label>
        <input 
          v-model="subtotal" 
          type="number" 
          id="subtotal"
          :placeholder="loading ? 'Loading...' : 'Masukkan Subtotal'"
        />
        <p class="text-sm text-gray-500">Current value: {{ subtotal }}</p>
      </div>
      
      <div class="bottom">
        <button type="button" @click="getData" class="mr-2 bg-gray-500">Refresh Data</button>
        <button type="submit" :disabled="loading">Update</button>
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

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.bottom{
  display: flex;
  gap: 5rem;
}

</style>