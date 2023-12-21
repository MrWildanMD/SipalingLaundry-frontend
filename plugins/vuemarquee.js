import { VueMarqueeSlider } from 'vue3-marquee-slider';
import '@/node_modules/vue3-marquee-slider/dist/style.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("MarqueeSlider", VueMarqueeSlider);
});