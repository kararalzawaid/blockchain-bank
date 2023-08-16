import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalance' : () => Promise<bigint>,
  'getTime' : () => Promise<string>,
  'topUp' : (arg_0: bigint) => Promise<string>,
  'withDraw' : (arg_0: bigint) => Promise<string>,
}
