const CSSAngleRegex: RegExp;
declare const enum AngleUnit {
    DEG = "deg",
    GRAD = "grad",
    RAD = "rad",
    TURN = "turn"
}
export interface Angle {
    value: number;
    unit: AngleUnit;
}
const parseText: (text: string) => Angle | null;
const getAngleFromRadians: (rad: number, targetUnit: AngleUnit) => Angle;
const getRadiansFromAngle: (angle: Angle) => number;
const get2DTranslationsForAngle: (angle: Angle, radius: number) => {
    translateX: number;
    translateY: number;
};
const roundAngleByUnit: (angle: Angle) => Angle;
const getNextUnit: (currentUnit: AngleUnit) => AngleUnit;
const convertAngleUnit: (angle: Angle, newUnit: AngleUnit) => Angle;
const getNewAngleFromEvent: (angle: Angle, event: MouseEvent | KeyboardEvent) => Angle | undefined;
