<style scoped lang="scss" src="./view-comic.scss"></style>
<script lang="ts" src="./view-comic.ts"></script>
<template>
  <div class="view-comic">
    <v-card>
      <v-skeleton-loader type="card-heading, image" />
      <v-container>
        <v-row>
          <v-col class="justify-center"><router-link :to="{name: 'view-comic', params: {comic_id: 'dragoon-rage', page: 1}}">First</router-link></v-col>
          <v-col><router-link :to="{name: 'view-comic', params: {comic_id: 'dragoon-rage', page: previousPage }}">Previous</router-link></v-col>
          <v-col><router-link :to="{name: 'view-comic', params: {comic_id: 'dragoon-rage', page: nextPage }}">Next</router-link></v-col>
          <v-col><router-link :to="{name: 'view-comic', params: {comic_id: 'dragoon-rage'}}">Latest</router-link></v-col>
        </v-row>
      </v-container>

    </v-card>
  </div>
</template>