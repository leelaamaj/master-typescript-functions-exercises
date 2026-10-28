const nodePlugin = require("@learnpack/node/src/test");
const { transpileExercise, withJsEntry } = require("./transpile");

module.exports = {
  validate: (...args) => nodePlugin.validate(...args),
  run: async function (context) {
    const { exercise, configuration } = context;
    const { sourceCode } = transpileExercise(exercise, configuration);
    const result = await nodePlugin.run({
      ...context,
      exercise: withJsEntry(exercise)
    });
    return { ...result, source_code: sourceCode };
  }
};
