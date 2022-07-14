<template>
  <div class="home">
    <SentList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import SentList from "@/components/SentList.vue";

export default {
  name: "SentItems",
  components: {
    SentList,
  },
};
</script>
<style>
</style>
