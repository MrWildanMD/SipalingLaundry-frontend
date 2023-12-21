<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

// Register
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
// ChartJS.defaults.color = "#f97316"

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  hoverBackgroundColor: "#9333ea",
});

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
  chartOptions: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <Bar
    :style="{ height: '500px' }"
    :data="props.chartData"
    :options="props.chartOptions || chartOptions"
  >
  </Bar>
</template>
