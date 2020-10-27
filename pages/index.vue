<template>
  <section>
    <div>
      <div class="header">
        Header
      </div>
      <ScriptCard />
      <div
        v-for="(item, index) in state.scripts"
        :key="index"
        class="grid-container"
      >
        <div @click="execute(item)" class="grid-item boxShadow">
          {{ item.name }}
          <pre v-highlightjs="item.shell"><code class="javascript"></code></pre>
        </div>
      </div>
      <input @keyup.enter="addScript" placeholder="What needs to be done?" />
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    state() {
      return this.$store.state;
    },
  },
  methods: {
    execute(scriptObj) {
      this.$store.commit("executeScript", scriptObj);
    },
    addScript(e) {
      const script = {
        name: new Date().toISOString(),
        shell: e.target.value,
      };
      e.target.value = "";
      this.$store.commit("addScript", script);
    },
  },
};
</script>

<style scoped>
.grid-container {
  min-width: 100vw;
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  margin: 10px;
  border-radius: 12px;
  padding: 12px;

  font-size: 30px;
  text-align: center;
}
.header {
  text-align: center;
  padding: 40px;
}
.boxShadow {
  -webkit-box-shadow: 3px 3px 22px -7px rgba(102, 102, 102, 0.6);
  -moz-box-shadow: 3px 3px 22px -7px rgba(102, 102, 102, 0.6);
  box-shadow: 3px 3px 22px -7px rgba(102, 102, 102, 0.6);
}
</style>
