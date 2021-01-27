<template>
  <v-container>
    <v-list v-for="coin in coins" :key="coin.id" color="secondary">
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: 1,
        }"
        min-height="400"
        transition="scale-transition"
      >
        <coin v-bind:coin="coin" />
      </v-lazy>
    </v-list>
  </v-container>
</template>

<script>
import Coin from "../components/Coin.vue";
export default {
  components: { Coin },
  name: "exchange-rate",
  data: () => ({
    isActive: false,
    loaded: false,
  }),

  computed: {
    coins() {
      return this.$store.getters.all;
    },
  },
  mounted() {
    this.$store.dispatch("getCoins");
  },
};
</script>

<style>
.v-container {
  background: inherit;
}
</style>