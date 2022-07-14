<template>
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
          <router-link to="/Trash"><a>Trash</a></router-link>
        </li>
      </ul>
    </div>

    <div class="mail">
      <div class="msghead">
        <button @click="gohome">back to inbox</button>
        <button>Send</button>
      </div>

      <div>
        <div class="SingleWrapper">
          <div class="composeHead">
            <h4>Compose message</h4>
            <div class="msgsubject"></div>
          </div>
          <div class="composeWrapper">
            <div>
              <form name="submitform" v-on:submit="submitForm">
                <div class="form-group">
                  <input
                    type="email"
                    required
                    class="form-control"
                    id="email"
                    placeholder="To"
                    v-model="form.to.email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="cc"
                    placeholder="cc"
                    v-model="form.to.cc"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="bcc"
                    placeholder="bcc"
                    v-model="form.to.bcc"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="subject"
                    v-model="form.subject"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="body"
                    placeholder="Message"
                    v-model="form.body"
                  ></textarea>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sentData from "@/SentItems.json";

export default {
  props: {},
  data() {
    return {
      greeting: "V-mail",
      sentmessages: sentData,
      form: {
        id: "",
        to: {
          email: "",
          cc: "",
          bcc: "",
        },
        trash: false,
        subject: "",
        body: "",
        date: new Date().toISOString().slice(0, 10),
      },
    };
  },

  methods: {
    gohome() {
      this.$router.push("/");
    },
    initialState() {
      return {
        form: {
          id: "",
          to: {
            email: "",
            cc: "",
            bcc: "",
          },
          trash: false,
          subject: "",
          body: "",
          date: new Date().toISOString().slice(0, 10),
        },
      };
    },
    reset() {
      Object.assign(this.$data, this.initialState());
    },
    submitForm() {
      this.form.id = this.sentmessages.length + 1;
      console.log(this.form);
      let sentmailitem = this.form;
      this.sentmessages.push(sentmailitem);
      this.reset();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.composeWrapper {
  background-color: #fff;
  color: #272727;
  padding: 20px 0;
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

.composeHead {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.form-group {
  width: auto;
  padding: 0 10%;
}

.form-group input {
  width: 100%;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding-left: 15px;
  font-size: 16px;
  margin-bottom: 15px;
  box-sizing: border-box;
}
.form-group textarea {
  width: 100%;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  font-size: 16px;
  box-sizing: border-box;
}
.btn-primary {
  padding: 12px 30px;
  margin-top: 14px;
  background-color: #c71515;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 10px;
}
</style>
