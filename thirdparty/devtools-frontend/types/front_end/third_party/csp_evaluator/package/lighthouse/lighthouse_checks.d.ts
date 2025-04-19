/**
 * @fileoverview CSP checks as used by Lighthouse. These checks tend to be a
 * stricter subset of the other checks defined in this project.
 */
import { Csp } from '../csp';
import { Finding } from '../finding';
/**
 * Evaluate the given list of CSPs for checks that should cause Lighthouse to
 * mark the CSP as failing. Returns only the first set of failures.
 */
export declare function evaluateForFailure(parsedCsps: Csp[]): Finding[];
/**
 * Evaluate the given list of CSPs for checks that should cause Lighthouse to
 * mark the CSP as OK, but present a warning. Returns only the first set of
 * failures.
 */
export declare function evaluateForWarnings(parsedCsps: Csp[]): Finding[];
/**
 * Evaluate the given list of CSPs for syntax errors. Returns a list of the same
 * length as parsedCsps where each item in the list is the findings for the
 * matching Csp.
 */
export declare function evaluateForSyntaxErrors(parsedCsps: Csp[]): Finding[][];
