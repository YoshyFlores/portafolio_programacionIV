<template>
  <h3>{{ title }}</h3>
  <p class="lead mb-4 text-start">
    {{ text }}
  </p>
  <br />
</template>

<script>
export default {
  name: "InvesComponent",
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
