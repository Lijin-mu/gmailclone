<template>
  <div class="home">
    <SentView msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import SentView from "@/components/SentView.vue";

export default {
  name: "SentItemView",
  components: {
    SentView,
  },
};
</script>
<style>
body,
html {
  margin: 0;
  padding: 0;
}
body {
  background: #6ba0ef;
}
</style>
