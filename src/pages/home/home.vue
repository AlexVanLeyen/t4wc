<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts"></script>
<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col><v-skeleton-loader boilerplate type="card" /></v-col>
        <v-col><v-skeleton-loader boilerplate type="card" /></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <!-- <v-card-title style="background: #1a1919; color: #ffffff; text-transform: capitalize;"> -->
            <v-card-title>
                <h1>updates</h1>
            </v-card-title>
            <v-skeleton-loader v-for="index in 5" :key="index" boilerplate type="list-item-avatar-three-line, list-item-three-line, divider" />
          </v-card>
        </v-col>
      </v-row>
      
    </v-container>
  </div>
</template>