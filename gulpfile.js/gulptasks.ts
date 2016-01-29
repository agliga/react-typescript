/**
 *
 * Created by agliga on 1/28/16.
 */

import gulp from 'gulp';
import {Gulpclass, Task} from "gulpclass/Decorators";
import ts from 'gulp-typescript';
import del from 'del';
import {lib} from 'gulpfile.js/lib'

@Gulpclass
export class GulpFile {

    @Task
    clean() {
        return del(lib.out);
    }

    @Task
    compile() {
        let tsProject = ts.createProject('tsconfig.json'),
            tsResult = tsProject.src() // instead of gulp.src(...)
                .pipe(ts(tsProject));

        return tsResult.js.pipe(gulp.dest('app/out'));
    }

    @Task
    default() {
        return ['clean', 'compile'];
    }

}
