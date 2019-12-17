<template>
  <div class="chat-edit">
    <label>
      <textarea @keyup="send" class="text" placeholder="按 Ctrl + Enter 发送" v-model="text"/>
    </label>
  </div>
</template>

<script>
  export default {
    props: ['session'],
    data() {
      return {
        text: ''
      }
    },
    methods: {
      send(e) {
        if (e.ctrlKey && e.keyCode === 13 && this.text.length) {
          this.session.messages.push({
            text: this.text,
            date: new Date(),
            self: true
          })
          this.$bus('send', this.text)
          this.text = ''
        }
      }
    }
  }
</script>

<style lang="scss">
  $color: #e0e0e0;

  .chat-edit {
    height: 160px;
    //border-top: solid 1px $color;
    border-right: solid 1px $color;
    border-bottom: solid 1px $color;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;

    textarea {
      padding: 10px;
      height: 100%;
      width: 100%;
      border: none;
      outline: none;
      font-family: "Micrsofot Yahei", sans-serif;
      resize: none;
    }

  }
</style>
