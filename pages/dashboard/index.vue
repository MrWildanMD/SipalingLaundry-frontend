<template>
  <v-container fluid class="min-h-full">
    <v-alert type="warning" title="Alert title" variant="tonal" class="mb-8">
      <template #text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
        at placeat totam, magni doloremque veniam neque porro libero rerum unde
        voluptatem!
      </template>
    </v-alert>
    <div class="grid grid-cols-1">
      <v-card rounded="xl" style="overflow: visible">
        <div class="flex pa-4 items-center">
          <div v-if="!mdAndDown">
            <v-avatar size="40" color="red">
              <img
                src="https://randomuser.me/api/portraits/men/60.jpg"
                alt="alt"
              />
            </v-avatar>
            <span class="text-sm px-2 font-bold text-slate-500"
              >Danz Laundry</span
            >
          </div>
          <div class="ms-auto w-full md:w-80">
            <VueDatePicker
              input-class-name="date"
              v-model="date"
              :teleport="true"
              range
              :enable-time-picker="false"
              :format="formatDate"
              :clearable="false"
            >
            </VueDatePicker>
          </div>
        </div>
      </v-card>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8"
    >
      <!-- Card 1 -->
      <Card
        icon="mdi-chart-line"
        title="Card 1"
        subtitle="Subtitle 1"
        value="Value 1"
      ></Card>

      <!-- Card 2 -->
      <Card
        icon="mdi-chart-line"
        title="Card 2"
        subtitle="Subtitle 2"
        value="Value 2"
      ></Card>

      <!-- Card 3 -->
      <Card
        icon="mdi-chart-line"
        title="Card 3"
        subtitle="Subtitle 3"
        value="Value 3"
      ></Card>

      <!-- Card 4 -->
      <Card
        icon="mdi-chart-line"
        title="Card 4"
        subtitle="Subtitle 4"
        value="Value 4"
      ></Card>
    </div>
    <div class="grid grid-cols-4 xl:grid-cols-12 pt-8">
      <div class="col-span-8 md:me-4" :class="mdAndDown ? 'mb-4' : ''">
        <v-card rounded="xl">
          <div class="p-4">
            <v-card-title class="text-slate-500"> Statistik </v-card-title>
            <v-card-item>
              <BarChart :chartData="chartData"> </BarChart>
            </v-card-item>
          </div>
        </v-card>
      </div>
      <div class="col-span-4 md:ms-4" :class="mdAndDown ? 'mt-4' : ''">
        <div class="grid grid-rows-2 gap-4">
          <v-card rounded="xl">
            <div class="p-4">
              <v-card-title class="text-slate-500"> Laundry </v-card-title>
              <v-card-item>
                <table class="table-auto w-full border-separate text-slate-500">
                  <tbody>
                    <tr>
                      <td>Malcolm Lockyer</td>
                      <td>1961</td>
                    </tr>
                    <tr>
                      <td>Witchy Woman</td>
                      <td>1972</td>
                    </tr>
                    <tr>
                      <td>Shining Star</td>
                      <td>1975</td>
                    </tr>
                    <tr>
                      <td>Shining Star</td>
                      <td>1975</td>
                    </tr>
                    <tr>
                      <td>Shining Star</td>
                      <td>1975</td>
                    </tr>
                  </tbody>
                </table>
              </v-card-item>
            </div>
          </v-card>
          <v-card rounded="xl">
            <div class="p-4">
              <v-card-title class="text-slate-500"> Transaksi </v-card-title>
              <v-card-item>
                <table class="table-auto w-full border-separate text-slate-500">
                  <tbody>
                    <tr>
                      <td>Malcolm Lockyer</td>
                      <td>1961</td>
                    </tr>
                    <tr>
                      <td>Witchy Woman</td>
                      <td>1972</td>
                    </tr>
                    <tr>
                      <td>Shining Star</td>
                      <td>1975</td>
                    </tr>
                    <tr>
                      <td>Shining Star</td>
                      <td>1975</td>
                    </tr>
                    <tr>
                      <td>Shining Star</td>
                      <td>1975</td>
                    </tr>
                    <tr>
                      <td>Shining Star</td>
                      <td>1975</td>
                    </tr>
                  </tbody>
                </table>
              </v-card-item>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style>
.date {
  border: none;
  padding-right: 0;
}

/* .dp__arrow_top {
  display: none;
} */
</style>

<script lang="ts" setup>
import { useDisplay } from "vuetify/lib/framework.mjs";

definePageMeta({
  layout: "dashboard",
});

const { mdAndDown } = useDisplay();

const date = ref([new Date(), new Date()]);
const selectedDates = ref();

const chartData = ref({
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "2023",
      backgroundColor: "#f97316",
      data: [40, 20, 12, 50, 10, 12, 34, 56, 89, 11, 33, 44],
    },
  ],
});

const formatDate = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day1 = date.value[0].getDate();
  const monthName1 = monthNames[date.value[0].getMonth()];
  const year1 = date.value[0].getFullYear();

  const day2 = date.value[1].getDate();
  const monthName2 = monthNames[date.value[1].getMonth()];
  const year2 = date.value[1].getFullYear();

  return `${monthName1} ${day1}, ${year1} - ${monthName2} ${day2}, ${year2}`;
};

onMounted(() => {
  const currentDate = new Date();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  date.value = [firstDayOfMonth, currentDate];
  updateSelectedDates();
});

watch(date, () => {
  updateSelectedDates();
});

const updateSelectedDates = () => {
  const start = date.value[0];
  const end = date.value[1];
  const dates = [];

  // Iterate through the date range and add each date to the 'dates' array
  for (
    let currentDate = new Date(start);
    currentDate <= end;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    dates.push(new Date(currentDate));
  }

  selectedDates.value = dates;
};
</script>
