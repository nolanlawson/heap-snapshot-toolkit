import type * as Common from '../../../core/common/common.js';
interface BaseSettingOption {
    title: string;
}
interface BooleanSettingOption extends BaseSettingOption {
    value: boolean;
}
interface EnumSettingOption extends BaseSettingOption {
    value: string;
}
interface BaseSetting {
    name: string;
    type: Common.Settings.SettingType.BOOLEAN | Common.Settings.SettingType.ENUM;
    title: string;
}
type BooleanSetting = BaseSetting & {
    options: BooleanSettingOption[];
    value: boolean;
};
type EnumSetting = BaseSetting & {
    options: EnumSettingOption[];
    value: string;
};
export type Setting = EnumSetting | BooleanSetting;
export interface LayoutElement {
    id: number;
    color: string;
    name: string;
    domId?: string;
    domClasses?: string[];
    enabled: boolean;
    reveal: () => void;
    toggle: (value: boolean) => void;
    setColor: (value: string) => void;
    highlight: () => void;
    hideHighlight: () => void;
}
