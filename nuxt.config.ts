// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js',
          integrity: 'sha512-V/C9Axb8EEL4ix79ERIJmpRd6Mp1rWVSxa2PIBCdCxqhEsfCBWp/R0xJ4U495czhcuDWrGOFYo8+QI3lJ9DK5g==',
          crossorigin: 'anonymous',
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.20/jspdf.plugin.autotable.min.js',
          integrity: 'sha512-NWK/s2RcUO/6cGrckJAo9313PVqX/cWmWSLIPU4as7H0Xm6mzhcuYrjtxlsmqy8Xt2gmCCQhcENKuX+R4Il/OA==',
          crossorigin: 'anonymous',
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/xlsx.full.min.js',
          integrity: 'sha512-jiCdY4o2Kt0K31mcj/8eCo6/3JArPaGns4P5VAYiTy+89bxg6zcz64bYlL/1IZg0xbwYieJyhEl9ChwbAC9gWQ==',
          crossorigin: 'anonymous',
        },
      ]
    },
    layoutTransition: {
      name: "slide",
    },
  },
  devtools: { enabled: false },
  css: ['~/assets/css/main.scss','@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify','chart.js','vue-chartjs', '@vuepic/vue-datepicker'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt'],
})
