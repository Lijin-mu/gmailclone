<template>
  <div class="home">
    <MessageView msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import MessageView from "@/components/MessageView.vue";

export default {
  name: "View",
  components: {
    MessageView,
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
