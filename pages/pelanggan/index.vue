<script setup>
definePageMeta({
  layout: "dashboard",
});

const tableData = ref([
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Bob Johnson", age: 35 },
  { id: 4, name: "John Doe", age: 30 },
  { id: 5, name: "Jane Smith", age: 25 },
  { id: 6, name: "Bob Johnson", age: 35 },
  { id: 7, name: "John Doe", age: 30 },
  { id: 8, name: "Jane Smith", age: 25 },
  { id: 9, name: "Bob Johnson", age: 35 },
  { id: 10, name: "John Doe", age: 30 },
  { id: 11, name: "Jane Smith", age: 25 },
  { id: 12, name: "Bob Johnson", age: 35 },
  { id: 13, name: "John Doe", age: 30 },
  { id: 14, name: "Jane Smith", age: 25 },
  { id: 15, name: "Bob Johnson", age: 35 },
  { id: 16, name: "John Doe", age: 30 },
]);
const tableColumns = ref([
  { title: "ID", field: "id" },
  { title: "Name", field: "name" },
  { title: "Age", field: "age" },
]);

const rowValue = ref();
const tableInstance = ref(null);

const paginationSizeSelector = ref([10, 20, 30, 40, 50]);

const isAlertShow = ref(true);
const dialog = ref(false);

const handleRowClick = (data) => {
  dialog.value = true;
  rowValue.value = data;
};

const handleSubmit = () => {
  tableInstance.value?.tabulator.updateData([
    {
      id: rowValue.value?.id,
      name: "SUCKS",
    },
  ]);
  dialog.value = false;
};
</script>

<template>
  <v-container fluid class="min-h-full">
    <v-alert
      v-model="isAlertShow"
      type="warning"
      title="Alert title"
      variant="tonal"
      class="mb-8"
    >
      <template #text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
        at placeat totam, magni doloremque veniam neque porro libero rerum unde
        voluptatem!
      </template>
    </v-alert>
    <v-card rounded="xl">
      <div class="p-4 md:p-8">
        <v-card-title class="text-slate-500"> Data Pelanggan </v-card-title>
        <v-card-item>
          <Table
            ref="tableInstance"
            table-name="produksi"
            :data="tableData"
            :columns="tableColumns"
            pagination
            :pagination-size-selector="paginationSizeSelector"
            exportable
            printable
            @rowClick="handleRowClick"
          >
          </Table>
        </v-card-item>
      </div>
    </v-card>
    <v-dialog v-model="dialog" width="auto">
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="handleSubmit"
            >Close Dialog</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
