<template>
  <div class="mt-10">
    <img
      v-if="cover"
      :src="'/assets/books/' + cover"
      :alt="'Book cover of ' + imgAlt"
      class="-mt-3 mr-3 inline-block w-4 sm:mr-4"
    />
    <a
      :href="link"
      class="text-lg font-medium text-primary hover:underline"
      target="_blank"
      rel="noopener"
      >{{ title }}</a
    >
    <span v-if="subtitle" class="ml-2 text-sm tracking-tight">{{ subtitle }}</span>
    <!--    <span class="text-xs ml-2"> ({{ year }}) </span>-->
    <div v-if="keywords" class="mt-1 font-sans text-gray-700">{{ keywords }}</div>
    <div class="mt-1 font-sans text-gray-700"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'BookRead',
  props: {
    cover: { type: String },
    title: { type: String, required: true },
    subtitle: { type: String },
    link: { type: String },
    year: { type: String, required: true },
    keywords: { type: String },
  },
  computed: {
    imgAlt() {
      console.log('this.cover', this.cover)
      return ''
      // return this.cover.split('.')[0].replaceAll('-', ' ')
    },
  },
}
</script>
