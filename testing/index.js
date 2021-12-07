
const Time =(time)=>{

    var time=time;


   

    const hr= Math.floor(time/3.6e+6);
    
    const min =Math.floor((time%3.6e+6)/60000);
    const sec= Math.floor((time%3.6e+6)%60000/1000);

    const x= hr+" hr "+min+" min "+sec+" sec "
    return x;

}

console.log(Time(5200   ))

module.export= {Time}