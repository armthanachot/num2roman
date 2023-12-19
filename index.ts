import { log, table } from 'console';
import { romanTable } from './constant/roman'

const convertToRoman = (num: number): string => {
    let result = '';
    /**
     * get arabic number from roman table and sort it descending
     */
    const arabics = Object.keys(romanTable).map((romanNum) => Number(romanNum)).sort((a, b) => b - a);
    for (const arabic of arabics) {
        /**
         * if num is greater than or equal to arabic, add roman arabic to result and subtract arabic from num
         */
        table({
            arabic
        })
        while (num >= arabic) {
            table({
                balance: num,
            })
            result += romanTable[arabic];
            num -= arabic;
            table({
                subtractWith: arabic,
                afterSubtract: num,
                result
            });
            log("====================================")
        }
    }
    return result;
}

const num = 1432;
const romanNum = convertToRoman(num);
log(`${num} to ${romanNum}`);
