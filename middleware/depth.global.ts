export default defineNuxtRouteMiddleware((to, from) => {
  const getDepth = (path) => {
    return path.split("/").filter((seg) => seg.length > 0).length;
  };

  const toDepth = getDepth(to.path);
  const fromDepth = getDepth(from.path);

  if (toDepth > fromDepth) {
    to.meta.layoutTransition = { name: "slide" };
    from.meta.layoutTransition = { name: "slide-back" };
  } else {
    to.meta.layoutTransition = { name: "slide-back" };
    from.meta.layoutTransition = { name: "slide-back" };
  }
});
