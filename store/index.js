const { exec } = require("child_process");
export const state = () => ({
  scripts: [],
});

export const mutations = {
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
  },
  removeScript(state, { script }) {
    state.scripts = state.scripts.filter((item) => item.id !== script.id);
  },
  editScript() {
    const editScript = state.scripts.filter((item) => item.id !== script.id);
  },
  executeScript(state, script) {
    script.execute();
  },
};

/// script: {
///     shell: "",
///     id: "",
///     name: ""
/// }
