import StartUp from "./StartUp";

const port = process.env.PORT || '3000';

StartUp.app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});

