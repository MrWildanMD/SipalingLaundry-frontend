<script setup>
import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_semanticui.css";
import { useDisplay } from "vuetify/lib/framework.mjs";
const props = defineProps({
  tableName: String,
  data: Array,
  columns: Array,
  height: String,
  layout: {
    type: String,
    default: "fitColumns",
  },
  pagination: {
    type: Boolean,
    default: false,
  },
  paginationSize: {
    type: Number,
    default: 10,
  },
  paginationSizeSelector: {
    type: Array,
    default: [10, 20, 30, 40, 50],
  },
  printable: {
    type: Boolean,
    default: false,
  },
  exportable: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits([
  'rowClick',
  'rowDblClick',
]);

const table = ref(null);
const tabulator = ref();
const fEl = ref();
const { mdAndDown } = useDisplay();
const currentPage = ref(1);
const searchQuery = ref("");
const showPage = ref(10);
const columnName = ref("all");
const sheet = ref(false);

onMounted(() => {
  tabulator.value = new Tabulator(table.value, {
    height: props.pagination ? false : props.height,
    data: props.data,
    index: "uid",
    layout: props.layout,
    reactiveData: true,
    columns: props.columns,
    pagination: props.pagination,
    paginationSize: props.paginationSize,
    paginationSizeSelector: props.paginationSizeSelector,
    footerElement: fEl.value,
    printAsHtml: true,
    printHeader: `<h1>Data ${props.tableName}<h1>`,
    printFooter: "<h2>&copy;2023 SiPalingLaundry<h2>",
  });
  tabulator.value.on("rowClick", function (e, row) {
    const rowData = row.getData();
    triggerRowClick(rowData);
  });
  tabulator.value.on('rowDblClick', function(e, row) {
    const rowData = row.getData();
    triggerRowDblClick(rowData);
  });
});

// onUnmounted(() => {
//   tabulator.value.destroy();
// })

defineExpose({
  tabulator,
});

const maxLength = computed(() => {
  if (tabulator.value != null) {
    return Math.ceil(props.data.length / showPage.value);
  }
  return 1;
});

const filteredColumns = computed(() => {
  return props.columns.filter(column => column.visible !== false);
});

const triggerRowClick = (eventData) => {
  emits('rowClick', eventData);
}

const triggerRowDblClick = (eventData) => {
  emits('rowDblClick', eventData);
}

const nextPage = () => {
  currentPage.value++;
};

const previousPage = () => {
  currentPage.value--;
};

const paginationUpdate = (value) => {
  currentPage.value = value;
  tabulator.value.setPage(currentPage.value);
};

const updateQuery = (query) => {
  searchQuery.value = query || "";
  console.log(searchQuery.value);
  if (columnName.value === 'all') {
    tabulator.value.setFilter(function (data) {
      const query = searchQuery.value.toLowerCase();
      for (const column of props.columns) {
        if (String(data[column.field]).toLowerCase().includes(query)) {
          return true;
        }
      }
      return false;
    });
  } else {
    tabulator.value.setFilter(columnName.value, "like", searchQuery.value);
  }
};
const clearQuery = () => {
  searchQuery.value = "";
  tabulator.value.clearFilter();
};

const updateShowPage = (newVal) => {
  showPage.value = newVal;
  tabulator.value.setPageSize(showPage.value);
};

const updateFilterQuery = (value) => {
  columnName.value = value[0];
};

const printTable = () => {
  tabulator.value.print(false, true);
};

const downloadPDF = () => {
  tabulator.value.download("pdf", props.tableName + ".pdf", {
    orientation: "portrait",
    title: "Data " + props.tableName,
  });
};

const downloadXLSX = () => {
  tabulator.value.download("xlsx", props.tableName + ".xlsx", {
    sheetName: props.tableName,
  });
};

const downloadCSV = () => {
  tabulator.value.download("csv", props.tableName + ".csv");
};
</script>

<template>
  <div
    class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
  >
    <div class="flex space-x-4 justify-between">
      <v-btn v-if="props.exportable" color="primary" icon="mdi-download" @click="sheet = true"></v-btn>
      <v-bottom-sheet inset v-model="sheet">
        <v-card>
          <v-list>
            <v-list-item
              title="Export PDF"
              prepend-icon="mdi-file-pdf-box"
              @click="downloadPDF"
            >
            </v-list-item>
            <v-list-item
              title="Export XLSX"
              prepend-icon="mdi-file-excel"
              @click="downloadXLSX"
            >
            </v-list-item>
            <v-list-item
              title="Export CSV"
              prepend-icon="mdi-file-delimited"
              @click="downloadCSV"
            >
            </v-list-item>
          </v-list>
        </v-card>
      </v-bottom-sheet>
      <v-btn
        v-if="props.printable"
        color="error"
        icon="mdi-printer"
        @click="printTable"
      ></v-btn>
    </div>
    <div
      class="flex flex-col md:flex-row items-center gap-y-4 md:space-y-0 md:space-x-4"
    >
      <v-text-field
        class="w-72 md:w-[300px]"
        rounded="xl"
        density="compact"
        variant="solo-filled"
        clearable
        :label="'Cari ' + columnName"
        prepend-inner-icon="mdi-magnify"
        hide-details
        @update:model-value="updateQuery"
        @click:clear="clearQuery"
      >
        <template #append-inner>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-chip size="large" color="primary" v-bind="props">{{
                columnName
              }}</v-chip>
            </template>
            <v-list @update:selected="updateFilterQuery">
              <v-list-item
                v-for="item in [{ field: 'all', title: 'All' }, ...filteredColumns]"
                :key="item.title"
                :value="item.field"
              >
                <v-list-item-title>{{ item.field }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-text-field>
    </div>
  </div>

  <div ref="table"></div>
  <div
    ref="fEl"
    class="flex flex-col md:flex-row bg-gray-100 justify-between items-center"
  >
    <div class="w-32">
      <v-select
        v-model="showPage"
        class="md:ms-2 mt-4 md:mt-0 md:me-2"
        density="compact"
        rounded="xl"
        variant="outlined"
        :items="props.paginationSizeSelector"
        label="Tampilkan"
        @update:model-value="updateShowPage"
      ></v-select>
    </div>
    <v-pagination
      rounded="xl"
      :length="maxLength"
      @next="nextPage"
      @prev="previousPage"
      @update:model-value="paginationUpdate"
      :total-visible="!mdAndDown ? 7 : 2"
      :size="!mdAndDown ? 'default' : 'x-small'"
    ></v-pagination>
  </div>
</template>

<style>
.tabulator-paginator {
  display: none;
}

.tabulator-print-header {
  text-align: center;
}
.tabulator-print-footer {
  text-align: center;
}
</style>
