import Capitalize from '../code/Capitalize.js';

test("Capitalize true",()=>{
  expect(Capitalize("String")).toBe(true)
})

test("Capitalize false",()=>{
  expect(Capitalize("hello there")).toBe(false)
})

