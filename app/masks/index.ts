import { Mask } from "../store/mask";
import { CN_MASKS } from "./cn";
import { HEXIN_MASKS } from "./hexin";
import { JINGJIXUE_MASKS } from "./jingjixue";
import { WENXUE_MASKS } from "./wenxue";
import { XITONG_MASKS } from "./xitong";
import { ZENGZHANG_MASKS } from "./zengzhang";
import { ZHUANJI_MASKS } from "./zhuanji";
import { AIQING_MASKS } from "./aiqing";
import { JIATING_MASKS } from "./jiating";
import { XINLIXUE_MASKS } from "./xinlixue";
import { QINGXU_MASKS } from "./qingxu";
import { GUANLIXUE_MASKS } from "./guanlixue";

// import { EN_MASKS } from "./en";

import { type BuiltinMask } from "./typing";
export { type BuiltinMask } from "./typing";

export const BUILTIN_MASK_ID = 100000;

export const BUILTIN_MASK_STORE = {
  buildinId: BUILTIN_MASK_ID,
  masks: {} as Record<number, Mask>,
  get(id?: number) {
    if (!id) return undefined;
    return this.masks[id] as Mask | undefined;
  },
  add(m: BuiltinMask) {
    const mask = { ...m, id: this.buildinId++, builtin: true };
    this.masks[mask.id] = mask;
    return mask;
  },
};

export const BUILTIN_MASKS: Mask[] = [
  ...HEXIN_MASKS,
  ...AIQING_MASKS,
  ...GUANLIXUE_MASKS,
  ...JINGJIXUE_MASKS,
  ...WENXUE_MASKS,
  ...XITONG_MASKS,
  ...ZENGZHANG_MASKS,
  ...ZHUANJI_MASKS,
  ...JIATING_MASKS,
  ...XINLIXUE_MASKS,
  ...QINGXU_MASKS,
  ...CN_MASKS,
].map(
  (
    m, //, ...EN_MASKS 原来是在括号里，跟CN_MASKS在一起
  ) => BUILTIN_MASK_STORE.add(m),
);
