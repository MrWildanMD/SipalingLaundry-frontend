import { createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from 'vuetify/labs/components'
import 'vuetify/styles';

const customTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#fe8b1d",
    "primary-darken-1": "#feac5a",
    secondary: "#b42aa5",
    "secondary-darken-1": "#e07cd7",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: "customTheme",
      themes: {
        customTheme,
      },
    },
    components: {
      ...components,
      ...labsComponents,
    },
    directives,
  });
  nuxtApp.vueApp.use(vuetify);
});
