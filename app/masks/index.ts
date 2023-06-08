import { Mask } from "../store/mask";
import { CN_MASKS } from "./cn";
//import { EN_MASKS } from "./en";  隐藏英文AI-Book

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
    const mask = { ...m, id: this.buildinId++ };
    this.masks[mask.id] = mask;
    return mask;
  },
};

export const BUILTIN_MASKS: Mask[] = [...CN_MASKS].map(
  (
    m, //, ...EN_MASKS 原来是在括号里，跟CN_MASKS在一起
  ) => BUILTIN_MASK_STORE.add(m),
);
