import Reverse from '../code/Reverse.js';

test("ReverseString true",()=>{
  expect(Reverse("racecar")).toBe(true);
})

test("ReverseString false",()=>{
  expect(Reverse("hello")).toBe(false);
})

