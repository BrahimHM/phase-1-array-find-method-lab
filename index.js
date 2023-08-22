// code your solution here
const superbowlWin=record=>{
    const found= record.find((element) => element.result==="W")
   if (found ) {return found.year}
   else {return undefined}
}