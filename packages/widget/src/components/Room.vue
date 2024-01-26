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

  <button
    v-else
    class="fixed top-10 left-10 aspect-1 w-14 rounded-full b-0 bg-#e20074 text-white shadow hover:shadow-xl transition-shadow"
    @click="isOpen = true"
  >
    chat
  </button>
</template>
