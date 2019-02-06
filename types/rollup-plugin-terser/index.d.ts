// Type definitions for rollup-plugin-terser 4.0
// Project: https://github.com/TrySound/rollup-plugin-terser
// Definitions by: Hugo Alliaume <https://github.com/Kocal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Plugin } from 'rollup';
import { MinifyOptions } from 'terser';

declare interface Options extends MinifyOptions {
    // Every files will be parsed by default, but you can specify which files to include or exclude
    include?: Array<string | RegExp> | string | RegExp | null;
    exclude?: Array<string | RegExp> | string | RegExp | null;

    // Plugin options
    sourcemap?: boolean;
    numWorkers?: number;
}

declare function terser(options ?: Options): Plugin;

export = terser;
