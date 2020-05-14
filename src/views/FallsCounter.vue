<template>
  <div>
    <p>
      This app shows how many times John can fall on a certain climb, before
      giving up entirely
    </p>
    <div class="climber-name">{{ climber }}</div>
    <div class="max-failed">He can only fall {{ maxFailedAttempts }} times</div>
    <button id="fallButton" @click="increaseFalls()">
      John fell {{ failedAttempts }} times
    </button>
    <div id="gives-up" v-show="failedAttempts >= 5">John gave up</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxFailedAttempts: 5,
      failedAttempts: 0
    };
  },
  props: {
    climber: {
      type: String
    }
  },
  methods: {
    increaseFalls() {
      this.failedAttempts++;
    }
  }
};
</script>
