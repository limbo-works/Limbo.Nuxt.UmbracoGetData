<template>
  <div>
    Nuxt module playground!
    {{ data }}
  </div>
</template>

<script setup>
import { useNuxtApp, createError } from '#app';
const { $umbracoClient } = useNuxtApp();

let data = await $umbracoClient.fetchData({
	params: {
		cache: false,
		parts: ['contenat'],
	},
	route: '/sdjsdjkdshjk',
  cachingOptions: {
    maxAge: 60,
    name: 'getData',
    getKey: ({ route }) => {
      console.log(route);
      return route;
    },
  },
});

if (!data || data.meta.code === 404) {
  throw createError({
		statusCode: 404,
		statusMessage: 'Page Not Found',
		fatal: true,
	});
}

!data && console.log('DATA:', data);
</script>
