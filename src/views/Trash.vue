<template>
  <div class="home">
    <TrashList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import TrashList from "@/components/TrashList.vue";

export default {
  name: "SentItems",
  components: {
    TrashList,
  },
};
</script>
<style>
</style>
