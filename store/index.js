const { exec } = require("child_process");
export const state = () => ({
  scripts: [],
});

export const mutations = {
  loadScripts(state) {
    state.scripts = JSON.parse(localStorage.getItem("STORAGE_KEY") || "[]");
    console.log(state.scripts);
    state.scripts = state.scripts.map((s) => ({
      ...s,
      execute: () => {
        exec(s.shell, (err, stdout, stderr) => {
          if (err) {
            //some err occurred
            console.error(err);
          } else {
            // the *entire* stdout and stderr (buffered)
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
          }
        });
      },
    }));
  },
  addScript(state, script) {
    state.scripts.push({
      id: Date.now(),
      ...script,
      execute: () => {
        exec(script.shell, (err, stdout, stderr) => {
          if (err) {
            //some err occurred
            console.error(err);
          } else {
            // the *entire* stdout and stderr (buffered)
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
          }
        });
      },
    });
    localStorage.setItem(
      "STORAGE_KEY",
      JSON.stringify(
        state.scripts.map((s) => ({
          id: s.id,
          name: s.name,
          shell: s.shell,
        }))
      )
    );
  },
  removeScript(state, { script }) {
    state.scripts = state.scripts.filter((item) => item.id !== script.id);
  },
  editScript() {
    const editScript = state.scripts.filter((item) => item.id !== script.id);
  },
  executeScript(state, script) {
    console.log(script);
    script.execute();
  },
};
