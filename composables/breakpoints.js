export function useBreakpoints() {
  const mdAndDown = ref(window.innerWidth < 768);
  const lgAndDown = ref(window.innerWidth < 1024);
  const xlAndDown = ref(window.innerWidth < 1280);

  const updateWidth = () => {
    mdAndDown.value = window.innerWidth < 768;
    lgAndDown.value = window.innerWidth < 1024;
    xlAndDown.value = window.innerWidth < 1280;
  };

  onMounted(() => {
    window.addEventListener("resize", updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateWidth);
  });

  return { mdAndDown, lgAndDown, xlAndDown };
}
