/**
 *
 * Created by agliga on 1/28/16.
 */

import gulp from 'gulp';
import {Gulpclass, Task} from "gulpclass/Decorators";
let ts = require('gulp-typescript');
let del = require('del');

let lib = {
    app: 'app',
    src: 'app/src',
    out: 'app/out'
};


@Gulpclass()
export class GulpFile {

    @Task()
    clean() {
        return del(lib.out);
    }

    @Task()
    compile() {
        let tsProject = ts.createProject('tsconfig.json'),
            tsResult = tsProject.src() // instead of gulp.src(...)
                .pipe(ts(tsProject));

        return tsResult.js.pipe(gulp.dest(lib.out));
    }

    @Task()
    default() {
        return ['clean', 'compile'];
    }

}
