<template>
  <router-link to="/Compose"
    ><button class="compose-btn">Compose</button></router-link
  >
  <h1>{{ greeting }}</h1>
  <div class="inboxcontainer">
    <div class="menu">
      <ul>
        <li>
          <router-link to="/"><a class="active">Inbox</a></router-link>
        </li>
        <li>
          <router-link to="/SentItems"><a>Sent Items</a></router-link>
        </li>
        <li>
          <a @click="trash" :class="[trashCheck ? 'active' : '']">Trash</a>
        </li>
      </ul>
    </div>

    <div class="mail">
      <div class="msghead">
        <button @click="gohome" :key="$route.fullPath">back to inbox</button>
        <button>Compose</button>
      </div>

      <div>
        <div class="SingleWrapper">
          <div class="msgview">
            <p>{{ readItem.id }}</p>
            <div class="msgsubject">
              <b>{{ readItem.subject }}</b>
            </div>
          </div>
          <div class="singlemsgbody">
            <div>{{ this.readItem.body }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import messageData from "@/Messages.json";

export default {
  props: {},
  data() {
    return {
      greeting: "V-mail",
      inboxCheck: true,
      sentboxCheck: false,
      trashCheck: false,
      messages: messageData,
      isVisible: false,
      isShow: true,
      selected: [],
      allSelected: false,
      userIds: [],
      readItem: [],
    };
  },
  mounted() {
    this.readItem = this.messages[this.$route.params.msgId - 1];
  },
  methods: {
    gohome() {
      this.$router.push("/");
    },
    toggleBox() {
      this.message.unread = !this.message.unread;
      console.log("toggle click");
    },
    inbox() {
      this.inboxCheck = true;
      this.sentboxCheck = false;
      this.trashCheck = false;
    },
    sentbox() {
      this.inboxCheck = false;
      this.sentboxCheck = true;
      this.trashCheck = false;
    },
    trash() {
      this.inboxCheck = false;
      this.sentboxCheck = false;
      this.trashCheck = true;
    },
    selectAll: function () {
      this.userIds = [];
      this.allSelected = !this.allSelected;

      if (this.allSelected) {
        for (let message in this.messages) {
          if (!this.messages[message].trash) {
            this.userIds.push(this.messages[message].id);
          }
        }
      }
    },
    select: function () {
      this.allSelected = false;
      this.Selected = true;
    },
    selectTrash: function () {
      this.trash = true;
    },
    markTrash: function () {
      console.log("cilcked");

      console.log(this.userIds);
      for (let i = 0; i < this.userIds.length; i++) {
        let t = this.userIds[i];

        for (let message in this.messages) {
          if (t === this.messages[message].id) {
            this.messages[message].trash = true;
          }
        }
      }
    },
    markRead: function () {
      for (let i = 0; i < this.userIds.length; i++) {
        let t = this.userIds[i];

        for (let message in this.messages) {
          if (t === this.messages[message].id) {
            this.messages[message].unread = false;
          }
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.inboxcontainer {
  width: 100%;
  height: auto;
  display: flex;
}
.SingleWrapper {
  background-color: #fff;
}
.msgsubject {
  padding-left: 20px;
}
.msghead {
  width: 100%;
  border-bottom: 1px solid #f3f3f3;
  padding: 15px 0;
  text-align: left;
}
.singlemsgbody {
  padding: 10%;
}

.msghead button {
  margin-right: 10px;
  background-color: #f3f3f3;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
}
.menu {
  width: 15%;
  display: block;
  margin: 0;
}
.menu a {
  text-decoration: none;
  color: #fff;
  color: #000;
  border-radius: 0 15px 15px 0;
  padding: 5px 10px;
  width: 90%;
  display: block;
  cursor: pointer;
}
.menu a.active {
  background-color: rgba(255, 255, 255, 0.7);
}
.menu ul {
  list-style: none;
  margin-bottom: 5px;
  padding-left: 0;
}
.menu ul li {
  padding: 4px;
  padding-right: 20px;
  border-right: 5px;
  margin-bottom: 10px;
}
.mail {
  width: 83%;
  display: block;
  margin: 0;
}

.msgview {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ccc;
  position: relative;
}

.delete {
  float: right;
  position: absolute;
  right: 20px;
}

.unread {
  background-color: #fff;
}
.read {
  background-color: #f3f3f3;
}
</style>
