<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <Navigation />
    <RouterView />
    <Footer />
  </div>
</template>

<style>
@import './style.css';
</style>