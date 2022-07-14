<template>
  <div class="home">
    <MessageList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import MessageList from "@/components/MessageList.vue";

export default {
  name: "Home",
  components: {
    MessageList,
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
.compose-btn {
  float: left;
  margin-left: 15px;
  padding: 10px 50px;
  border-radius: 15px;
  border: none;
  background-color: #fff;
  font-size: 16px;
  font-weight: 700;
}
.msgview a {
  text-decoration: none;
  color: #000;
  padding-left: 10px;
}
</style>
