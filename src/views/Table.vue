<script setup>
import { onMounted, ref } from 'vue';
import Tabletop from '../components/Table/Tabletop.vue'
import Tablemid from '../components/Table/Tablemid.vue';
import Tablebot from '../components/Table/Tablebot.vue'
</script>
<template>
    <div class="flex flex-col ">
    <Tabletop class="tabletop"/>
    <tablemid class="tablemid"/>
    <Tablebot class="tablebot"/>
</div>
</template>

<style scoped>
.tablemid{
    margin-top: -10rem;
}

.tablebot{
    margin-top: -10rem;
}
</style>