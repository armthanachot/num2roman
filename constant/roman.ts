//=> new chanlenge is remove 4, 9, 40, 90, 400, 900, 4000, 9000
const romanTable: Record<number, string> = {
    1: 'I',
    // 4: 'IV',
    5: 'V',
    // 9: 'IX',


    10: 'X',
    // 40: 'XL',
    50: 'L',
    // 90: 'XC',

    100: 'C',
    // 400: 'CD',
    500: 'D',
    // 900: 'CM',

    1000: 'M',
    // 4000: 'MV',
    5000: 'V_',
    // 9000: 'MX_',

    
    10000: 'X_',
};



export { romanTable };