const server = require("./server/server");

const port = process.env.PORT || 5051;

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
