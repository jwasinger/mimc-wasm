import { mimc_init, NULL_HASH } from "./mimc.ts";
import { mimc_compress2 } from "./mimc.ts";

const SIZE_F = 32;

@external("env", "eth2_savePostStateRoot")
export declare function save_output(offset: i32): void;

export function main(): i32 {
    let cur = (new Uint8Array(SIZE_F)).buffer as usize;

    mimc_init();

    for (let i = 0; i < 200; i++) {
        mimc_compress2(NULL_HASH.buffer as usize, cur, cur);
    }

    save_output(cur);

    return 0;
}
