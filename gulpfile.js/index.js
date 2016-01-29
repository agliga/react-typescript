/**
 * Created by agliga on 1/28/16.
 */

eval(require("typescript").transpile(require("fs").readFileSync("./gulpfile.js/gulptasks.ts").toString()));
