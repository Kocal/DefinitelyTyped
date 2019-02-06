import terser = require('rollup-plugin-terser');
import { OutputQuoteStyle } from 'terser';

// No options (default)
(() => {
    // $ExpectType Plugin
    terser();
})();

// With plugin specific options
(() => {
    // $ExpectType Plugin
    terser({
        sourcemap: true,
        numWorkers: 4
    });
})();

// With every Terser options
(() => {
    // $ExpectType Plugin
    terser({
        compress: {
            arguments: true,
            arrows: true,
            booleans: true,
            collapse_vars: true,
            comparisons: true,
            conditionals: true,
            dead_code: true,
            defaults: true,
            directives: true,
            drop_console: true,
            drop_debugger: true,
            evaluate: true,
            expression: true,
            global_defs: true,
            hoist_funs: true,
            hoist_props: true,
            hoist_vars: true,
            if_return: true,
            inline: true,
            join_vars: true,
            keep_classnames: true,
            keep_fargs: true,
            keep_fnames: true,
            keep_infinity: true,
            loops: true,
            negate_iife: true,
            passes: true,
            properties: true,
            pure_funcs: true,
            pure_getters: true,
            reduce_funcs: true,
            reduce_vars: true,
            sequences: true,
            side_effects: true,
            switches: true,
            toplevel: true,
            top_retain: true,
            typeofs: true,
            unsafe: true,
            unsafe_arrows: true,
            unsafe_comps: true,
            unsafe_Function: true,
            unsafe_math: true,
            unsafe_methods: true,
            unsafe_proto: true,
            unsafe_regexp: true,
            unsafe_undefined: true,
            unused: true,
            warnings: true,

        },
        ecma: 9,
        ie8: false,
        keep_classnames: true,
        keep_fnames: true,
        mangle: {
            eval: true,
            keep_classnames: true,
            keep_fnames: true,
            module: true,
            properties: {
                builtins: true,
                debug: true,
                keep_quoted: true,
                regex: /^abc$/,
                reserved: ['a', 'b'],
            },
            reserved: ['a', 'b'],
            safari10: true,
            toplevel: true,
        },
        module: true,
        nameCache: {},
        output: {
            ascii_only: true,
            beautify: true,
            braces: true,
            comments: 'all',
            ecma: 6,
            indent_level: 2,
            indent_start: true,
            inline_script: true,
            ie8: true,
            keep_quoted_props: true,
            max_line_len: true,
            preamble: true,
            quote_keys: true,
            quote_style: OutputQuoteStyle.PreferDouble,
            safari10: true,
            semicolons: true,
            shebang: true,
            shorthand: true,
            source_map: {},
            webkit: true,
            width: true,
            wrap_iife: true,
        },
        parse: {
            bare_returns: true,
            ecma: 9,
            html5_comments: true,
            shebang: true,
        },
        safari10: true,
        sourceMap: {
            content: 'content from compiled.js.map',
            includeSources: true,
            filename: 'foobar.js',
            root: 'root',
            url: 'minified.js.map',
        },
        toplevel: true,
        warnings: true,
    });
})();

// Filter files
(() => {
    // $ExpectType Plugin
    terser({
        include: '*.js',
        exclude: '*.js',
    });

    // $ExpectType Plugin
    terser({
        include: /.js$/,
        exclude: ['foo.js', 'bar.js'],
    });
})();
