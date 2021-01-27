<template>
  <v-card class="primary rounded-lg" width="100%">
    <v-container>
      <v-row cols="12" justify="space-between" align="center">
        <v-col cols="12" md="5" xl="5" lg="5">
          <v-text-field
            :label="symbol"
            outlined
            hide-details
            dense
            color="accent"
            type="number"
            v-model="currentCoin"
            @input.native="convert"
            name="currentCoin"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="1"
          xl="1"
          lg="1"
          class="d-flex justify-center py-0"
        >
          <v-icon color="accent">fas fa-equals</v-icon>
        </v-col>
        <v-col cols="12" md="5" xl="5" lg="5">
          <v-text-field
            label="USD"
            outlined
            hide-details
            dense
            color="accent"
            type="number"
            v-model="coinInUSD"
            @input.native="convert"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      currentCoin: "",
      coinInUSD: "",
    };
  },
  props: {
    symbol: String,
    exchangeRate: Number,
  },
  methods: {
    convert(e) {
      e.target.name == "currentCoin"
        ? (this.coinInUSD = e.target.value * this.exchangeRate)
        : (this.currentCoin = e.target.value / this.exchangeRate);
    },
  },
};
</script>

<style>
</style>