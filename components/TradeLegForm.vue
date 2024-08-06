<template>
  <v-container>
    <v-form v-model="valid" ref="form">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            label="Symbol"
            v-model="tradeLeg.symbol"
            :rules="[v => !!v || 'Symbol is required']"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
            :items="actionItems"
            label="Action"
            v-model="tradeLeg.action"
            :rules="[v => !!v || 'Action is required']"
            required
          ></v-select>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            label="Quantity"
            v-model="tradeLeg.quantity"
            type="number"
            :rules="[v => !!v || 'Quantity is required']"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
            :items="optionTypeItems"
            label="Option Type"
            v-model="tradeLeg.optionType"
            :rules="[v => !!v || 'Option type is required']"
            required
          ></v-select>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            label="Strike Price"
            v-model="tradeLeg.strikePrice"
            type="number"
            :rules="[v => !!v || 'Strike price is required']"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <DatePicker v-model="tradeLeg.expiryDate" />
        </v-col>

        <v-col cols="12" md="6">
          <v-btn :disabled="!valid" color="primary" @click="submit">Submit</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DatePicker from '~/components/DatePicker.vue';

const valid = ref(false);
const tradeLeg = ref({
  symbol: '',
  action: '',
  quantity: null,
  optionType: '',
  strikePrice: null,
  expiryDate: '',
});

const actionItems = ['Buy', 'Sell'];
const optionTypeItems = ['Call', 'Put'];

const submit = () => {
  if (valid.value) {
    // Handle form submission
    console.log(tradeLeg.value);
  }
};
</script>

<style scoped>
.v-container {
  max-width: 600px;
  margin: auto;
}
</style>