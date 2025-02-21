<script setup>
import { onMounted, ref } from 'vue';
import Tabletop from '../components/pages/Tabletop.vue'
import Tablebot from '../components/pages/Tablebot.vue'
</script>
<template>
    <div class="flex flex-col ">
    <Tabletop class="tabletop"/>
    <Tablebot class="tablebot"/>
</div>
</template>

<style scoped>
.tablebot{
    margin-top: -10rem;
}
</style>