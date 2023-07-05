let options = [
    "--require-module ts-node/register",
    "--require ./tests/*-steps.ts",
    "--format progress",
  ].join(" ");
  
  let run_features = ["./tests", options].join(" ");
  
  module.exports = {
    test_runner: run_features,
    default: "--publish-quiet",
  };
