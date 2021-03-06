module.exports = function(config) {
	"use strict";

	require("../karma-base.conf")(config);
	config.set({

		frameworks: ["ui5"],

		ui5: {
			configPath: "ui5-foo.yaml"
		},

		reporters: ["progress"]

	});
};
