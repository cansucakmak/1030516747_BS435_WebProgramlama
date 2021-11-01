import {gecerliTagler} from "../src/kod";
import {hakSayisi} from "../src/kod";

test('geçersiz tagler',()=>{
    expect(()=>{"img" + gecerliTagler(-1)}).toThrow();
    expect(()=>{"img" + getRandomQuizzes(9999)}).toThrow();
});

test('geçerli tagler',()=>{
    expect(()=>{"img" + gecerliTagler(0)}).toBe();
    expect(()=>{"img" + getRandomQuizzes(1)}).toBe();
    expect(()=>{"img" + getRandomQuizzes(2)}).toBe();
});

test('haklar',()=>{
    expect(()=>{hakSayisi(2)}).toBe();
});