export interface LoginResult {
  status: string;
  token: string;
}

export interface Result {
  status: string;
  message: string;
}

export interface LoginRequest {
  email_hp: string;
  password: string;
}

export interface RegisterRequest {
  nama_laundry: string;
  nama_pemilik: string;
  email: string;
  password: string;
  password_confirm: string;
  no_hp: string;
  alamat: string;
}

export interface MenuItem {
  text: string;
  icon: string;
  to: string;
  submenu?: MenuItem[];
}

export interface AccountOptionItem {
  icon: string;
  text: string;
  to?: string;
}

export interface OutletItems {
  type?: 'subheader' | 'divider';
  title?: string;
  subtitle?: string;
  prependAvatar?: string;
  inset?: boolean;
}
