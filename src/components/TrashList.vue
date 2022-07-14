<template>
  <router-link to="/Compose"
    ><button class="compose-btn">Compose</button></router-link
  >
  <h1>{{ greeting }}</h1>
  <div class="inboxcontainer">
    <div class="menu">
      <ul>
        <li>
          <router-link to="/"><a>Inbox</a></router-link>
        </li>
        <li>
          <router-link to="/SentItems"><a>Sent Items</a></router-link>
        </li>
        <li>
          <router-link to="/Trash"><a class="active">Trash</a></router-link>
        </li>
      </ul>
    </div>

    <div class="mail">
      <div class="msghead">
        <input type="checkbox" @click="selectAll" v-model="allSelected" />
        <button @click="markTrash">Delete</button>
      </div>

      <div v-for="(message, i) in messages" :key="i">
        <div
          v-if="message.trash"
          :class="['msgview', message.unread ? 'unread' : 'read']"
        >
          <input type="checkbox" @click="toggleBox" />

          <p>{{ message.id }}</p>
          <div>
            <b>{{ message.subject }}</b>
          </div>
          <div>{{ message.snippet }}</div>
          <button class="delete" @click="message.trash = false">
            move to inbox
          </button>
        </div>
      </div>

      <div v-for="(message, i) in sentmessages" :key="i">
        <div
          v-if="message.trash"
          :class="['msgview', message.unread ? 'unread' : 'read']"
          @click="message.unread = false"
        >
          <input type="checkbox" @click="toggleBox" />

          <p>{{ message.id }}</p>
          <div>
            <b>{{ message.subject }}</b>
          </div>

          <button class="delete" @click="message.trash = false">
            move to setItems
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sentData from "@/SentItems.json";
import messageData from "@/Messages.json";

export default {
  name: "HelloWorld",
  data() {
    return {
      greeting: "V-mail",
      inboxCheck: false,
      sentboxCheck: true,
      trashCheck: false,
      sentmessages: sentData,
      messages: messageData,
      isVisible: false,
      isShow: true,
      selected: [],
      allSelected: false,
      userIds: [],
    };
  },
  methods: {
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
  props: {
    id: Number,
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
.msghead {
  width: 100%;
  border-bottom: 1px solid #f3f3f3;
  padding: 15px 0;
  text-align: left;
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
