<template>
  <div class="home">
    <ComposeBox msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ComposeBox from "@/components/ComposeBox.vue";

export default {
  name: "Compose",
  components: {
    ComposeBox,
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
button {
  cursor: pointer;
}
h1 {
  color: #fff;
}
</style>
