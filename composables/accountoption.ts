import { AccountOptionItem } from "types";

export const useAccountOption = () => {
    const item = ref<AccountOptionItem[]>([
        { icon: "mdi-cog-outline", text: "Pengaturan Akun", to: ""},
        { icon: "mdi-logout-variant", text: "Logout", to: "/logout"},
    ]);
    return { item }
};