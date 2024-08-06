<template>
  <v-text-field
    v-model="internalDate"
    :readonly="loading"
    :rules="[required]"
    label="Date"
    placeholder="Enter Date YYYY-MM-DD"
    type="date"
    clearable
  ></v-text-field>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// Define props with modelValue that can be a string or null
const props = defineProps<{
  modelValue: string | null;
  loading?: boolean;
  required?: (value: any) => boolean | string;
}>();

// Emit for update:modelValue
const emit = defineEmits(['update:modelValue']);

// Reactive internal date
const internalDate = ref(props.modelValue);

// Watch for changes in props.modelValue
watch(() => props.modelValue, (newValue) => {
  internalDate.value = newValue;
});

// Watch for changes in internalDate and emit update
watch(internalDate, (newValue) => {
  emit('update:modelValue', newValue);
});

// Handle optional props with default values
const loading = props.loading ?? false;
const required = props.required ?? ((value: any) => !!value || 'Required.');
</script>

<style scoped>
.v-text-field {
  max-width: 600px;
  margin: auto;
}
</style>