<template>
  <v-card dark class="mx-2 rounded-xl" elevation="24" color="secondary">
    <v-container>
      <v-row class="" align="center">
        <v-col sm="1">
          <v-img
            max-height="50"
            max-width="50"
            :src="coin.image"
            :alt="coin.name + ' logo'"
          ></v-img>
        </v-col>
        <v-col sm="11">
          <v-card-title> {{ coin.name }} </v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <!-- Процесс -->
        <!-- <v-card color="primary">
          <rate-line-chart v-bind:chartData="coin.changes" />
        </v-card> -->
      </v-row>
      <v-row cols="12" class="mx-0">
        <converter
          v-bind:symbol="coinData[0].symbol"
          v-bind:exchangeRate="coin.price"
        />
      </v-row>
      <v-row>
        <v-col>
          <template>
            <v-data-table
              hide-default-footer
              :headers="headers"
              :items="coinData"
              class="elevation-5 primary rounded-lg"
            >
              <template v-slot:[`item.priceChange`]="{ item }">
                <v-chip :color="getColor(item.priceChange)" dark>
                  {{ item.priceChange }}
                </v-chip>
              </template>
            </v-data-table>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Converter from "./Converter.vue";
import RateLineChart from "./RateLineChart.vue";
export default {
  components: { Converter, RateLineChart },
  data() {
    return {
      headers: [
        {
          text: "Символ",
          align: "start",
          sortable: false,
          value: "symbol",
          divider: true,
        },
        {
          text: "Цена",
          sortable: false,
          value: "price",
          divider: true,
        },
        {
          text: "На рынке",
          sortable: false,
          value: "marketcap",
          divider: true,
        },
        {
          text: "Изменения за 14 дней",
          sortable: false,
          value: "priceChange",
          divider: true,
        },
      ],
      //Нужно для таблицы
      coinData: [
        {
          symbol: `${this.coin.symbol.toUpperCase()}`,
          price: this.coin.price + " $",
          marketcap: this.coin.marketcap + " $",
          priceChange: this.coin.priceChange + "%",
        },
      ],
    };
  },
  props: {
    coin: Object,
  },
  computed: {
    changes() {
      return this.$store.getters.changes;
    },
  },
  methods: {
    open() {
      console.log(this.coinData);
    },
    getColor(percent) {
      return percent[0] !== "-" ? "success" : "error";
    },
  },
  beforeMount() {
    this.$store.dispatch("getCoinChanges", { id: this.coin.id });
  },
};
</script>
<style>
</style>