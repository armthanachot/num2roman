import { log, table } from 'console';
import { romanTable } from './constant/roman'

const convertToRoman = (num: number): string => {
    let result = '';
    /**
     * get arabic number from roman table and sort it descending
     */
    const newRomanTbl = genNewRomalTbl(num);
    // const arabics = Object.keys(romanTable).map((romanNum) => Number(romanNum)).sort((a, b) => b - a);
    const arabics = Object.keys(newRomanTbl).map((romanNum) => Number(romanNum)).sort((a, b) => b - a);
    for (const arabic of arabics) {
        /**
         * if num is greater than or equal to arabic, add roman arabic to result and subtract arabic from num
         */
        // table({
        //     arabic
        // })
        while (num >= arabic) {
            // table({
            //     balance: num,
            // })
            result += newRomanTbl[arabic];
            num -= arabic;
            // table({
            //     subtractWith: arabic,
            //     afterSubtract: num,
            //     result
            // });
            // log("====================================")
        }
    }
    return result;
}

const genNewRomalTbl = (num: number): Record<number, string> => {
    const numBeforeSorts = Object.keys(romanTable).map((romanNum) => Number(romanNum))
    const newRomanTable: Record<number, string> = {};
    let four = 4;
    let nine = 9;
    let controlRoman = 1
    numBeforeSorts.forEach((numBeforeSort) => {
        newRomanTable[numBeforeSort] = romanTable[numBeforeSort];
    })
    //(1,5,10,50,100,500,1000) ต้องการแทรก (4,9,40,90,400,900) แบ่งเป็นแทรกครั้งละ 2 คู่ แปลว่ารอบ loop จะเหลือครึ่งหนึ่ง
    for (let i = 0; i < Math.floor(numBeforeSorts.length / 2); i++) {
        log(i)
        // controlRoman is 1, 10, 100, 1000
        newRomanTable[four] = romanTable[controlRoman] + romanTable[four + controlRoman] //4+1, 40+10, 400+100
        newRomanTable[nine] = romanTable[controlRoman] + romanTable[nine + controlRoman] //9+1, 90+10, 900+100
        four *= 10;
        nine *= 10;
        controlRoman *= 10;
    }
log(newRomanTable);
    return newRomanTable;
}

const num = 19; //MCDXXXII
const romanNum = convertToRoman(num);
log(`${num} to ${romanNum}`);
