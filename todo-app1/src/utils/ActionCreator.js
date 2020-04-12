export const actionType ={
  ADDTAX : 'ADDTAX'
}
export function addTax(price) {
  return {
    type: actionType.ADDTAX,
    price
  };
}
