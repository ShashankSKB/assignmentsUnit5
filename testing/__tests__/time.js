const temp =require("../index")
const sum =require("../sum")

describe("TIME CHECKING",function(){


    test("converting time to seconds",function(){
        expect(temp(5200)).toBe("0 hr 0 min 5 sec")
    })

   

    test("converting time to minute",()=>{
        expect(temp(60000)).toBe("0 hr 1 min 0 sec")
    })

    
    test("converting time to minutes",()=>{
        expect(temp(180000)).toBe("0 hr 3 min 0 sec")
    })

    
    test("converting time to  minutes and seconds",()=>{
        expect(temp(200000 )).toBe("0 hr 3 min 20 sec")
    })

    test("converting time to  hour ,minutes and seconds",()=>{
        expect(temp(9000000)).toBe("2 hr 30 min 0 sec")
    })
})

describe("Sum checking",function (){

    test("addition of two positive number",()=>{
        expect(sum(3,4)).toBe(7)
    })

    test("addition of two negative number",()=>{
        expect(sum(-3,-4)).toBe(-7)
    })
})