<script lang="ts" setup>
import { useDisplay } from "vuetify";

const drawerItems = useDrawerItem();
const accountOptionItems = useAccountOption();
const outletItems = useOutletItems();
const { mdAndDown } = useDisplay();

const active = ref();
const isRail = ref(true);

const aRail = (aRail: boolean) => {
  isRail.value = aRail;
};

const showSidebar = () => {
  active.value = true;
};
</script>

<template>
  <v-layout class="rounded-md bg-slate-100 min-h-screen">
    <!-- Navigation Drawer / SideBar -->
    <v-navigation-drawer
      expand-on-hover
      class="rounded-r-[2rem] font-poppins"
      :rail="!mdAndDown"
      v-model="active"
      rail-width="75"
      :width="mdAndDown ? 220 : 250"
      v-on:update:rail="aRail"
    >
      <div
        id="content-drawer"
        :class="isRail && active ? 'scrollbar' : 'overflow-y-auto'"
      >
        <v-list
          density="compact"
          class="d-flex flex-column align-center justify-center"
        >
          <v-list-item>
            <v-img
              :width="mdAndDown ? 100 : 135"
              aspect-ratio="1/1"
              src="/img/logo.png"
            ></v-img>
          </v-list-item>
          <v-list-item v-if="mdAndDown || !isRail" class="md:text-center">
            <span
              class="font-poppins font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600"
              >SipalingLaundry</span
            >
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          density="compact"
          nav
          class="px-4"
          color="primary"
          variant="plain"
          mandatory
        >
          <template v-for="item in drawerItems.items.value">
            <!-- Normal Items without submenu -->
            <v-list-item
              nuxt
              v-if="!item.submenu"
              :key="'item-' + item.text"
              :to="item.to ? item.to : ''"
              class="group"
            >
              <template #prepend v-if="item.icon">
                <v-icon class="group-hover:text-orange-500">{{
                  item.icon
                }}</v-icon>
              </template>
              <template #title>
                <span class="group-hover:text-orange-500">{{ item.text }}</span>
              </template>
            </v-list-item>

            <!-- Items with submenus -->
            <v-list-group
              nuxt
              v-else-if="item.submenu"
              :key="'group-' + item.text"
              :value="item.text"
              class="no-indent-list-group"
            >
              <template #activator="{ props }">
                <v-list-item
                  class="hover:text-orange-500"
                  v-bind="props"
                  :value="item.text"
                >
                  <template #prepend>
                    <v-icon>{{ item.icon }}</v-icon>
                  </template>
                  <template #title>
                    <span>{{ item.text }}</span>
                  </template>
                </v-list-item>
              </template>

              <!-- Rendering the submenus -->
              <v-list-item
                v-for="subItem in item.submenu"
                :key="'subItem-' + subItem.text"
                :to="subItem.to ? subItem.to : ''"
                :value="subItem.text"
                class="group"
              >
                <template #prepend v-if="subItem.icon">
                  <v-icon class="group-hover:text-orange-500">{{
                    subItem.icon
                  }}</v-icon>
                </template>
                <template #title>
                  <MarqueeSlider
                  id="marquee-slider"
                  v-if="subItem.text.length >= 15"
                  :speed="10000"
                  :autoWidth="true"
                  class="group-hover:text-orange-500"
                  >
                  {{ subItem.text }}
                  </MarqueeSlider>
                  <span 
                  v-if="subItem.text.length < 14"
                  class="group-hover:text-orange-500">{{
                    subItem.text
                  }}</span>
                </template>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list>
      </div>
    </v-navigation-drawer>

    <!-- AppBar / NavBar -->
    <v-app-bar 
    class="px-2" 
    flat
    color="transparent"
    absolute
    >
      <template #prepend v-if="mdAndDown">
        <v-btn
          @click="showSidebar"
          density="comfortable"
          icon="mdi-menu"
          color="grey-darken-1"
        ></v-btn>
      </template>
      <template #append>
        <v-container>
          <v-row align="center">
            <v-col class="pa-0">
              <v-menu rounded id="menu" transition="fade-transition">
                <template v-slot:activator="{ props }">
                  <v-btn icon variant="flat" color="transparent" v-bind="props">
                    <v-avatar size="small" rounded="lg">
                      <img
                        src="https://randomuser.me/api/portraits/men/60.jpg"
                        alt="profile"
                      />
                    </v-avatar>
                  </v-btn>
                </template>
                <v-card rounded="xl" width="220" class="font-poppins">
                  <v-card-text>
                    <div class="mx-auto text-center">
                      <h3>SipalingLaundry</h3>
                      <p class="text-caption mt-1">sipalinglaundry@gmail.com</p>
                    </div>
                  </v-card-text>
                  <v-divider
                    thickness="2"
                    class="border-opacity-50 px-8"
                  ></v-divider>
                  <v-list density="comfortable" variant="plain">
                    <v-list-item
                      class="px-4 group"
                      v-for="(item, i) in accountOptionItems.item.value"
                      :key="i"
                      :value="item"
                      rounded="xl"
                      nav
                      nuxt
                      :to="item.to"
                    >
                      <template #prepend>
                        <v-icon class="group-hover:text-orange-500">{{
                          item.icon
                        }}</v-icon>
                      </template>

                      <template #title>
                        <span class="group-hover:text-orange-500">
                          {{ item.text }}
                        </span>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-menu>
            </v-col>
            <v-col class="pa-0">
              <v-menu rounded id="menu2" transition="fade-transition">
                <template v-slot:activator="{ props }">
                  <v-btn icon v-bind="props">
                    <v-icon size="large" class="text-slate-500"
                      >mdi-store-outline</v-icon
                    >
                  </v-btn>
                </template>
                <v-card rounded="xl" width="300" class="font-poppins mx-auto">
                  <v-card-title class="text-slate-500">
                    Daftar Outlet
                  </v-card-title>
                  <v-card-subtitle class="mb-2">
                    Klik untuk mengganti outlet
                  </v-card-subtitle>
                  <v-list
                    :items="outletItems.items.value"
                    item-props
                    lines="three"
                    class="overflow-y-auto max-h-[400px]"
                  >
                    <template v-slot:subtitle="{ subtitle }">
                      <div v-html="subtitle"></div>
                    </template>
                  </v-list>
                  <v-divider></v-divider>
                  <v-btn block  class="text-center pa-8">
                      <div>
                        <!-- Center the contents -->
                        <v-icon>mdi-store-plus-outline</v-icon>
                        <div>Tambah Outlet</div>
                        <!-- Replace "Heart" with your desired description -->
                      </div>
                    </v-btn>
                  <!-- <v-card-actions>
                    
                  </v-card-actions> -->
                </v-card>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-app-bar>

    <v-main
      class="font-poppins"
      style="min-height: 300px"
    >
      <slot />
    </v-main>
  </v-layout>
</template>

<style>
.no-indent-list-group .v-list-group__items > .v-list-item {
  padding-inline-start: 12px !important;
}

.v-ripple__container {
  display: none !important;
}
</style>
