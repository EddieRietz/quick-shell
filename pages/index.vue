<template>
  <section>
    <div class=" background width-screen height-screen content">
      <div>
        <h3 @click="load" class="header btn">qsh</h3>
      </div>

      <section>
        <div
          v-for="(item, index) in state.scripts"
          :key="index"
          class="grid-container "
        >
          <div @click="execute(item)" class="grid-item card btn">
            {{ item.name }}
            <!-- <pre v-highlightjs="item.shell"><code class="javascript"></code></pre> -->
          </div>
        </div>
      </section>
      <div
        style="position:fixed;width:100%;bottom:0;margin:20px"
        class="background"
      >
        <p>Script Name</p>
        <input
          style="width:60%"
          @change="(v) => (newShellName = v.target.value)"
          placeholder="What needs to be done?"
        />
        <div>
          <p>Script</p>
          <input
            style="width:60%"
            @change="(v) => (newShellScript = v.target.value)"
            placeholder="What needs to be done?"
          />
        </div>
        <div>
          <button @click="addScript" class="btn">Add new easy shell</button>
        </div>
      </div>
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
  data: () => ({
    newShellName: "",
    newShellScript: "",
  }),

  methods: {
    load() {
      this.$store.commit("loadScripts");
    },
    execute(scriptObj) {
      this.$store.commit("executeScript", scriptObj);
    },
    addScript() {
      const script = {
        name: this.newShellName,
        shell: this.newShellScript,
      };
      this.$store.commit("addScript", script);
    },
  },
};
</script>

<style scoped>
.content {
  padding: 30px;
  overflow: scroll;
}
.grid-container {
  display: grid;
  grid-template-columns: auto;
}
.grid-item {
  margin-bottom: 20px;
  border-radius: 12px;
  padding: 12px;
  font-size: 30px;
  text-align: left;
}
.header {
  text-align: left;
  padding: 30px;
  font-family: "Courier New", Courier, monospace;
}
</style>
