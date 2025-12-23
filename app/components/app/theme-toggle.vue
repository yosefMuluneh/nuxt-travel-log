<script setup lang="ts">
const colormode = useColorMode();

function toggleTheme() {
  colormode.preference = colormode.preference === 'dark' ? 'light' : 'dark';
}
</script>

<template>
  <label class="swap swap-rotate">

    <Icon v-if="colormode.preference === 'light'" name="tabler:sun" size="24" class="swap-on mx-4" @click="toggleTheme" />

    <Icon v-else name="tabler:moon-filled" size="24" class="swap-off mx-4" @click="toggleTheme" />
  </label>
</template>
