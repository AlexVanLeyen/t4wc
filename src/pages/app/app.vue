<style lang="scss" src="./app.scss"></style>
<script lang="ts" src="./app.ts"></script>
<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>
