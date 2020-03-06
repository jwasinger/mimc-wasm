import { mimc_init, NULL_HASH } from "./mimc.ts";

import { mimc_compress2 } from "./mimc.ts";

const NULL_ROOT: Array<u64> = [ 0xd6b781f439c20c0b, 0x5d00fc101129f08f, 0x137981fece56e977, 0x04af9e46dbc42b94 ];
const SIZE_F = 32;

@external("env", "eth2_savePostStateRoot")
export declare function save_output(offset: i32): void;

export function main(): i32 {
    let cur = (new Uint8Array(SIZE_F)).buffer as usize;

    mimc_init();

    for (let i = 0; i < 200; i++) {
        mimc_compress2(NULL_ROOT.buffer as usize, cur, cur);
    }

    save_output(cur);

    return 0;
}
