//
import Dotenv from "dotenv";
import Rsync from "rsync";

//
Dotenv.config();

//
const sourcePath = process.env.DEPLOY_SRC_DIR;
const destinationPath = process.env.DEPLOY_DEST_DIR;
const shellCommand = process.env.DEPLOY_SHELL_CMD;

//
const rsync = new Rsync();

rsync
    .shell(shellCommand)
    .flags("Pv") // --partial --progress --verbose
    .archive() // -a, Recursive send the file and keep the file property
    .compress() // -z, Compress during transfer
    .recursive() // -r, Recursive send the sub directory
    .delete() // --delete, Remove destination file when this file is not exists in source
    .source(sourcePath)
    .destination(destinationPath);

//
console.log("==> Command ==> ");
console.log(`${rsync.command()}`);

//
console.log(`==> Running ==>`);

rsync.output(
    (progress) => console.log(`${progress}`),
    (error) => console.log(`Output Error: ${error}`),
);

rsync.execute((err, code, cmd) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log("Success!");
    }
});
