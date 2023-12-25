import {Calc} from '../code/Calc.js';

test("Calc Add: ",()=>{
  expect(Calc.add(1,2)).toBe(3);
})

test("Calc Sub: ",()=>{
  expect(Calc.sub(3,2)).toBe(1);
})

test("Calc Mul: ",()=>{
  expect(Calc.mul(2,3)).toBe(6);
})

test("Calc Div: ",()=>{
  expect(Calc.div(6,2)).toBe(3);
})
