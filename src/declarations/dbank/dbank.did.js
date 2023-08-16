export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalance' : IDL.Func([], [IDL.Nat], ['query']),
    'getTime' : IDL.Func([], [IDL.Text], ['query']),
    'topUp' : IDL.Func([IDL.Nat], [IDL.Text], []),
    'withDraw' : IDL.Func([IDL.Nat], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
