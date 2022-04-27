import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import buble from "rollup-plugin-buble";
import {terser} from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/index.js",
    output: {
        sourcemap: true,
        format: "iife",
        name: "app",
        file: "public/js/bundle.js",
        inlineDynamicImports:true,
    },
    // globals: {
    //     jquery: "jQuery",
    //     "popper.js": "Popper"
    // },
    // external: ["jquery", "popper.js"],
    plugins: [
        resolve(),
        commonjs({
            // include: ["node_modules/bootstrap/**", "node_modules/jquery/**"],
            // namedExports: {
            //     "node_modules/jquery/dist/jquery.js": "jquery"
            // }
        }),
        production && buble({ exclude: "node_modules/**" }),
        production && terser()
    ]
};