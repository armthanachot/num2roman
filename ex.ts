import { log } from "console";
import { romanTable } from "./constant/roman";
const convertToRoman = (num: number): string => {
    let result = '';
    const numerals = Object.keys(romanTable).map((romanNum) => Number(romanNum)).sort((a, b) => b - a);
    for (const numeral of numerals) {
        while (num >= numeral) {
            result += romanTable[numeral];
            num -= numeral;
        }
    }

    return result;
}

const numericValue = 4;
const romanNumeral = convertToRoman(numericValue);
log(`${numericValue} in Roman numerals is: ${romanNumeral}`);
