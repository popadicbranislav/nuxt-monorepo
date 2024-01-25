<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template>
  <div v-if="isOpen">
    chat-window
    <button @click="isOpen = false">
      close
    </button>
  </div>
  <button v-else @click="isOpen = true">
    chat
  </button>
</template>
