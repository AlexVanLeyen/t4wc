<style scoped lang="scss" src="./comics.scss"></style>
<script lang="ts" src="./comics.ts"></script>
<template>
  <div class="comics">
      <v-card>
        <v-card-title><h1>comics</h1></v-card-title>
        <v-container>
          <v-row v-for="row in 2" :key="row">
            <v-col v-for="col in 3" :key="col">
              <v-hover v-slot:default="{ hover }">
                <v-card @click.stop="onClick">
                  <v-skeleton-loader boilerplate type="image"></v-skeleton-loader>
                  <v-expand-transition>
                    <div v-if="hover" class="card-overlay d-flex transition-fast-in-fast-out v-card--reveal display-3" style="height: 100%;">
                        <div class="card-overlay-wrapper">
                          <div class="headline">Title</div>
                          <v-divider class="white" />
                          <div class="subtext">Description</div>
                        </div>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
  </div>
</template>