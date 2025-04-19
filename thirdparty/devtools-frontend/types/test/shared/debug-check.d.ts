/**
 * Tests the args.gn file to ensure that the is_debug flag is set to true.
 * We don't cover every case here, for example where is_debug is redefined
 * in the gn.args several times. Instead we use the first declaration of
 * is_debug's value.
 */
export declare function debugCheck(dirName: string): boolean;
