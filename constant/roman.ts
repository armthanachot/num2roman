const romanTable: Record<number, string> = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
    //V_ and X_ just mock the value of 5000 and 10000 in actual is horizontal line above the roman number
    4000: 'MV_',
    5000: 'V_',
    9000: 'MX_',
    10000: 'X_',
};

export { romanTable };