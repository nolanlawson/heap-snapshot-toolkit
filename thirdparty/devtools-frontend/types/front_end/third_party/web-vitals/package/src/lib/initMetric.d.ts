export declare const initMetric: <MetricName extends "FCP" | "LCP" | "CLS" | "INP" | "TTFB" | "FID">(name: MetricName, value?: number) => {
    name: MetricName;
    value: number;
    rating: "good";
    delta: number;
    entries: (Extract<import("../types.js").CLSMetric, {
        name: MetricName;
    }> | Extract<import("../types.js").FCPMetric, {
        name: MetricName;
    }> | Extract<import("../types.js").FIDMetric, {
        name: MetricName;
    }> | Extract<import("../types.js").INPMetric, {
        name: MetricName;
    }> | Extract<import("../types.js").LCPMetric, {
        name: MetricName;
    }> | Extract<import("../types.js").TTFBMetric, {
        name: MetricName;
    }>)["entries"];
    id: string;
    navigationType: "back-forward-cache" | "reload" | "restore" | "navigate" | "prerender" | "back-forward";
};
