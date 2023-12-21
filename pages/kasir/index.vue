<script setup>
import { useForm, useField } from 'vee-validate';
definePageMeta({
  layout: "dashboard",
});

const columns = ref([
  { title: "UID", field: "uid", visible: false },
  { title: "Nama", field: "nama" },
  { title: "Harga", field: "harga" },
  { title: "Kategori", field: "kategori" },
  { title: "Waktu", field: "waktu" },
  { title: "Catatan", field: "catatan" },
  { title: "Status", field: "status" },
  { title: "Diperbaharui", field: "updated_at" },
]);

const tableData = ref([
  {
    uid: "abcdef1121",
    nama: "Test1",
    harga: 10.0,
    kategori: "Pakaian",
    waktu: "1 Hari",
    catatan: "",
    status: "Aktif",
    updated_at: "2023-09-21",
  },
  {
    uid: "abcdef1122",
    nama: "Test2",
    harga: 10.0,
    kategori: "Pakaian",
    waktu: "1 Hari",
    catatan: "",
    status: "Aktif",
    updated_at: "2023-09-21",
  },
  {
    uid: "abcdef1123",
    nama: "Test3",
    harga: 14.0,
    kategori: "Pakaian",
    waktu: "1 Hari",
    catatan: "",
    status: "Aktif",
    updated_at: "2023-09-21",
  },
  {
    uid: "abcdef1124",
    nama: "Test4",
    harga: 16.0,
    kategori: "Pakaian",
    waktu: "1 Hari",
    catatan: "",
    status: "Aktif",
    updated_at: "2023-09-21",
  },
  {
    uid: "abcdef1125",
    nama: "Test5",
    harga: 15.0,
    kategori: "Pakaian",
    waktu: "1 Hari",
    catatan: "Oke",
    status: "Aktif",
    updated_at: "2023-09-21",
  },
  {
    uid: "abcdef1126",
    nama: "Test6",
    harga: 11.0,
    kategori: "Pakaian",
    waktu: "1 Hari",
    catatan: "",
    status: "Non-Aktif",
    updated_at: "2023-09-21",
  },
]);

const tableInstance = ref(null);
const dialog = ref(false);
const isAlertShow = ref(true);

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    nama(value) {
      if (value) return true
      return "Nama tidak boleh kosong!"
    },
    harga(value) {
      if (value) return true
      return "Harga tidak boleh kosong!"
    },
    kategori(value) {
      if (value) return true
      return "Kategori harus dipilih!"
    },
    waktu(value) {
      if (value) return true
      return "Waktu tidak boleh kosong!"
    },
  },
});
const nama = useField("nama");
const harga = useField("harga");
const kategori = useField("kategori");
const waktu = useField("waktu");
const catatan = useField("catatan");
const status = useField("status");

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
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
        <v-card-title class="text-slate-500"> Data Kasir </v-card-title>
        <v-card-item>
          <v-btn
            color="primary"
            variant="outlined"
            prepend-icon="mdi-plus"
            rounded="xl"
            @click="dialog = true"
            >Tambah</v-btn
          >
          <Table
            ref="tableInstance"
            table-name="satuan"
            :data="tableData"
            :columns="columns"
          >
          </Table>
        </v-card-item>
      </div>
    </v-card>
    <!-- Dialog Tambah -->
    <v-dialog v-model="dialog" width="800" persistent>
      <v-card rounded="xl">
        <div class="p-4 md:p-8">
          <v-card-title class="text-slate-500">Tambah Data Kasir</v-card-title>
          <v-card-item>
            <div class="p-4">
              <form @submit.prevent="submit">
                <v-text-field
                color="primary"
                  variant="outlined"
                  v-model="nama.value.value"
                  :error-messages="nama.errorMessage.value"
                  label="Nama"
                ></v-text-field>

                <v-text-field
                variant="outlined"
                color="primary"
                  v-model="harga.value.value"
                  :error-messages="harga.errorMessage.value"
                  label="Harga"
                ></v-text-field>

                <v-text-field
                variant="outlined"
                color="primary"
                  v-model="kategori.value.value"
                  :error-messages="kategori.errorMessage.value"
                  label="Kategori"
                ></v-text-field>

                <v-text-field
                variant="outlined"
                color="primary"
                  v-model="waktu.value.value"
                  :error-messages="waktu.errorMessage.value"
                  label="Waktu"
                ></v-text-field>

                <v-text-field
                variant="outlined"
                color="primary"
                  v-model="catatan.value.value"
                  :error-messages="catatan.errorMessage.value"
                  label="Catatan"
                ></v-text-field>

                <v-switch
                color="primary"
                  inset
                  label="Status"
                  v-model="status.value.value"
                  :error-messages="status.errorMessage.value"
                ></v-switch>

                <div class="flex flex-row justify-between">
                  <div class="flex flex-col gap-4 md:flex-row">
                    <v-btn type="submit" color="success"> Submit </v-btn>
                    <v-btn @click="handleReset" color="warning"> Reset </v-btn>
                  </div>
                  <div class="flex flex-col gap-4 md:flex-row">
                    <v-btn color="error"> Hapus </v-btn>
                    <v-btn @click="dialog = false"> Tutup </v-btn>
                  </div>
                </div>
              </form>
            </div>
          </v-card-item>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>
