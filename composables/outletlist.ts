import { OutletItems } from "types";

export const useOutletItems = () => {
  const items = ref<OutletItems[]>([
    {
      prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      title: "Brunch this weekend?",
      subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    { type: "divider", inset: true },
    {
      prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      title: "Summer BBQ",
      subtitle: `Wish I could come, but I'm out of town this weekend.`,
    },
    { type: "divider", inset: true },
    {
      prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      title: "Oui oui",
      subtitle:
        'Do you have Paris recommendations? Have you ever been?',
    },
    { type: "divider", inset: true },
    {
      prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      title: "Birthday gift",
      subtitle:
        'Have any ideas about what we should get Heidi for her birthday?',
    },
    { type: "divider", inset: true },
    {
      prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      title: "Recipe to try",
      subtitle:
        'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
    { type: "divider", inset: true },
    {
      prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      title: "Recipe to try",
      subtitle:
        'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
    { type: "divider", inset: true },
    {
      prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      title: "Recipe to try",
      subtitle:
        'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
    { type: "divider", inset: true },
    {
      prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      title: "Recipe to try",
      subtitle:
        'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
    { type: "divider", inset: true },
    {
      prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      title: "Recipe to try",
      subtitle:
        'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
    { type: "divider", inset: true },
    {
      prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      title: "Recipe to try",
      subtitle:
        'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
  ]);
  return { items }
};
