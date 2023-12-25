import caesarCipher from '../code/caesarCipher.js';

test("CeaserCipher: hello 1",()=>{
expect(caesarCipher("hello",1)).toBe("ifmmp");
})


test("CeasarCipher: hello 2",()=>{
expect(caesarCipher("hello",2)).toBe("jgnnq");
})

test("CaesarCipher: 123",()=>{
expect(caesarCipher(123,1)).toBe("Not a String");
})

test("CaesarCipher: abcdefghijklmnopqrstuvwxyz",()=>{
expect(caesarCipher("abcdefghijklmnopqrstuvwxyz",3)).toBe("defghijklmnopqrstuvwxyzabc")
})

