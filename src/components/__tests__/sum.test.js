import { sum } from "../sum";

test("Sum of two numbers",()=>{
    const r=sum(3,6);
    expect(r).toBe(9);
})