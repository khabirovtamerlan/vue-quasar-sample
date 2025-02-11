<template>
  <div class="q-pa-md width-100">
    <q-card class="q-pa-md q-mb-md">
      Store info: <br>
      Name: {{ store.name }} <br>
      Nationality: {{ store.nationality }} <br>
      Typescript person: {{ person.name }} {{ person.nationality }}
    </q-card>
    <div class="flex-container">
      <show-nationality />
      <cat-fact />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShowNationality, CatFact, useNationalityStore } from 'vue-khabirov-tamerlan-quasar-lib';
import type { Person } from 'vue-khabirov-tamerlan-quasar-lib';

const store = useNationalityStore();

const person: Person = {
  name: 'Typescript interface sample',
  nationality: 'works'
}
</script>
