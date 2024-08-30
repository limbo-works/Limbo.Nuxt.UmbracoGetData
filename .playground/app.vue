<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app';
const { $umbracoClient } = useNuxtApp();

let data = await $umbracoClient.fetchData({
	params: {
		cache: false,
		parts: ['content'],
	},
	route: '/',
  cachingOptions: {
    maxAge: 60,
    name: 'getData',
    getKey: ({ route }) => {
      console.log(route);
      return route;
    },
  },
});

!data && console.log('DATA:', data);
</script>
