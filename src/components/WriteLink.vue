<template>
  <div class="ced-link-wrap">
    <Link :title="title" :link="link" />
    <span class="link-note"> ({{ writtenAt }}) </span>
  </div>
</template>

<script>
import Link from './Link.vue'

export default {
  name: 'WriteLink',
  components: {
    Link,
  },
  props: {
    title: { type: String, required: true },
    writtenAt: { type: String, required: true },
    link: { type: String, required: true },
  },
}
</script>
