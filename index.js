const KRUZYAISGAY = [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2];
const KRUZYANOTGAY = [0, 1, 2];
const KRUZYAISUNKNOW = [0, 1, 2, 3];

const KRUZYA = {
    /* 
    Note: IDK but if you remove one (ANY)... any one of lines below this, object what you get DIDN"T obfuscate.
    You can try remove any of lines and test manualy.
    */
    KRUZYAISGAY: KRUZYAISGAY.length,                                                                    // Line for remove (you can remove all exclude one (latest))
    KRUZYANOTGAY: KRUZYANOTGAY.length,                                                                  // Line for remove (you can remove all exclude one (latest))
    KRUZYAISUNKNOW: KRUZYAISUNKNOW.length,                                                              // Line for remove (you can remove all exclude one (latest))    
    KRUZYAISGAYNOTGAYUNKNOWN: KRUZYAISGAY.length - (KRUZYANOTGAY.length + KRUZYAISUNKNOW.length)        // Line for remove (you can remove all exclude one (latest))                                                                
}

console.log("KRUZYA", KRUZYA, KRUZYA.KRUZYAISGAYNOTGAYUNKNOWN);
