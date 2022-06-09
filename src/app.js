const test = {
  label: "just a test",
  action: async (context, data) => {
    context.app.alert("this is a test");
  },
};

exports.requestActions = [test];
