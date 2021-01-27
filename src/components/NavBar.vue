<template>
  <v-app-bar app dark color="primary" elevation="15">
    <div class="d-flex align-center">
      <h1 class="hidden-xs">CRYPTA</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn href="/" text>
      <span class="mr-2 hidden-sm-and-down">Курс</span>
      <v-icon color="accent">fas fa-coins</v-icon>
    </v-btn>
    <v-btn href="/wallet" text>
      <span class="mr-2 hidden-sm-and-down">Портфель</span>
      <v-icon color="accent">fas fa-wallet</v-icon>
    </v-btn>
  </v-app-bar>
</template>

