"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StartUp_1 = require("./StartUp");
const port = process.env.PORT || '3000';
StartUp_1.default.app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});
