import { MenuItem } from "types";

export const useDrawerItem = () => {
  const items = ref<MenuItem[]>([
    { text: "Dashboard", icon: "mdi-view-dashboard-outline", to: "/dashboard" },
    { text: "Produksi", icon: "mdi-washing-machine", to: "/produksi" },
    {
      text: "Layanan",
      icon: "mdi-iron-outline",
      to: "",
      submenu: [
        { text: "Item Satuan", icon: "mdi-weight-pound" , to: "/layanan/satuan" },
        { text: "Pewangi", icon: "mdi-scent" ,to: "/layanan/pewangi" },
        { text: "Jenis Layanan", icon: "mdi-dishwasher" ,to: "/layanan/jenis" },
        { text: "Waktu dan Harga Kiloan", icon: "mdi-timer-edit-outline" ,to: "/layanan/kiloan" },
      ],
    },
    { text: "Kasir", icon: "mdi-cash-register", to: "/kasir" },
    { text: "Pelanggan", icon: "mdi-account-group-outline", to: "/pelanggan" },
    {
      text: "Operasional",
      icon: "mdi-clipboard-flow-outline",
      to: "/operasional",
    },
    {
      text: "Laporan",
      icon: "mdi-book-open-page-variant-outline",
      to: "",
      submenu: [
        { text: "Transaksi", icon: "mdi-swap-horizontal", to: "/laporan/transaksi" },
        { text: "Arus Kas", icon: "mdi-finance", to: "/laporan/kas" },
      ],
    },
    {
      text: "Marketing",
      icon: "mdi-bullhorn-outline",
      to: "",

      submenu: [
        { text: "Broadcast", icon: "mdi-broadcast" ,to: "/marketing/broadcast" },
        { text: "Voucher/Promo", icon: "mdi-ticket-percent-outline" , to: "/marketing/promo" },
      ],
    },
  ]);

  return { items }
};
