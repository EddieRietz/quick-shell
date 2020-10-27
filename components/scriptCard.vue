<template>
  <div class="card boxShadow">
    <p>asdfasdf</p>
    <!-- <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre> -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      sourcecode: "console",
    };
  },
  methods: {
    execute() {
      this.$store.commit("executeScript", scriptObj);
    },
  },
};
</script>

<style>
.card {
  background-color: rgba(255, 255, 255, 1);
  margin: 10px;
  border-radius: 12px;
  padding: 12px;
  font-size: 30px;
  text-align: center;
}
.boxShadow {
  -webkit-box-shadow: 3px 3px 22px -7px rgba(102, 102, 102, 0.6);
  -moz-box-shadow: 3px 3px 22px -7px rgba(102, 102, 102, 0.6);
  box-shadow: 3px 3px 22px -7px rgba(102, 102, 102, 0.6);
}
</style>
