<script setup lang="ts">
import DataTable from "datatables.net-vue3";
import DataTableBs5 from "datatables.net-bs5";
DataTable.use(DataTableBs5);
const data = [
  [1, 2],
  [3, 4],
];
</script>

<template>
  <div class="container">
    <DataTable class="display" :data="data">
      <thead>
        <tr>
          <th>First</th>
          <th>Second</th>
        </tr>
      </thead>
    </DataTable>
  </div>
</template>

<style>
@import "datatables.net-bs5";
</style>
