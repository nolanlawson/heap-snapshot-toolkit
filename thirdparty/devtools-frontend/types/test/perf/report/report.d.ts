interface BenchmarkBase {
    key: {
        test: string;
        [key: string]: string;
    };
}
export type Benchmark = BenchmarkMultiMeasure | BenchmarkSingleMeasure;
interface BenchmarkMultiMeasure extends BenchmarkBase {
    measurements: {
        [key: string]: SingleMeasurement[];
    };
}
interface BenchmarkSingleMeasure extends BenchmarkBase {
    measurement: number;
}
interface SingleMeasurement {
    value: string;
    measurement: number;
}
export declare function addBenchmarkResult(benchmark: Benchmark): void;
export declare function clearResults(): void;
export declare function writeReport(): void;
export {};
