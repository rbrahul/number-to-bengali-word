/*
** This script helps you to convert your Number to  the Bengali word representation.
** Developed By: Rahul Baruri<rahulbaruri1@gmail.com>
** Created At: 26th August 2017
 */

/**
 * This method receives a number as parameter and returns it's bengali word representation
 * @param {Number} number 
 * @return {String}
 */
var convertToWord = (function (number) {
    'use strict';
    var gonona = {
        amount: null,
        numberFragements: {
            integerPart: null,
            fractionPart: null,
            isFloatValue: false,
        },
        unit: {
            koti: 'কোটি',
            lokkho: 'লক্ষ',
            hazar: 'হাজার',
            sotok: 'শত',
            ekok: '',
        },

        numericWord: {
             '.': 'দশমিক',
            '00': '',
            '1': 'এক',
            '01': 'এক',
            '2': 'দুই',
            '02': 'দুই',
            '3': 'তিন',
            '03': 'তিন',
            '4': 'চার',
            '04': 'চার',
            '5': 'পাঁচ',
            '05': 'পাঁচ',
            '6': 'ছয়',
            '06': 'ছয়',
            '7': 'সাত',
            '07': 'সাত',
            '8': 'আট',
            '08': 'আট',
            '9': 'নয়',
            '09': 'নয়',
            '10': 'দশ',
            '11': 'এগারো',
            '12': 'বার',
            '13': 'তেরো',
            '14': 'চৌদ্দ',
            '15': 'পনেরো',
            '16': 'ষোল',
            '17': 'সতেরো',
            '18': 'আঠারো',
            '19': 'উনিশ',
            '20': 'বিশ',
            '21': 'একুশ',
            '22': 'বাইশ',
            '23': 'তেইশ',
            '24': 'চব্বিশ',
            '25': 'পঁচিশ',
            '26': 'ছাব্বিশ',
            '27': 'সাতাশ',
            '28': 'আঠাশ',
            '29': 'উনত্রিশ',
            '30': 'ত্রিশ',
            '31': 'একত্রিশ',
            '32': 'বত্রিশ',
            '33': 'তেত্রিশ',
            '34': 'চৌত্রিশ',
            '35': 'পঁয়ত্রিশ',
            '36': 'ছত্রিশ',
            '37': 'সাঁইত্রিশ',
            '38': 'আটত্রিশ',
            '39': 'উনচল্লিশ',
            '40': 'চল্লিশ',
            '41': 'একচল্লিশ',
            '42': 'বিয়াল্লিশ',
            '43': 'তেতাল্লিশ',
            '44': 'চুয়াল্লিশ',
            '45': 'পঁয়তাল্লিশ',
            '46': 'ছেচল্লিশ',
            '47': 'সাতচল্লিশ',
            '48': 'আটচল্লিশ',
            '49': 'উনপঞ্চাশ',
            '50': 'পঞ্চাশ',
            '51': 'একান্ন',
            '52': 'বায়ান্ন',
            '53': 'তিপ্পান্ন',
            '54': 'চুয়ান্ন',
            '55': 'পঞ্চান্ন',
            '56': 'ছাপ্পান্ন',
            '57': 'সাতান্ন',
            '58': 'আটান্ন',
            '59': 'উনষাট',
            '60': 'ষাট',
            '61': 'একষট্টি',
            '62': 'বাষট্টি',
            '63': 'তেষট্টি',
            '64': 'চৌষট্টি',
            '65': 'পঁয়ষট্টি',
            '66': 'ছেষট্টি',
            '67': 'সাতষট্টি',
            '68': 'আটষট্টি',
            '69': 'উনসত্তর',
            '70': 'সত্তর',
            '71': 'একাত্তর',
            '72': 'বাহাত্তর',
            '73': 'তিয়াত্তর',
            '74': 'চুয়াত্তর',
            '75': 'পঁচাত্তর',
            '76': 'ছিয়াত্তর',
            '77': 'সাতাত্তর',
            '78': 'আটাত্তর',
            '79': 'উনআশি',
            '80': 'আশি',
            '81': 'একাশি',
            '82': 'বিরাশি',
            '83': 'তিরাশি',
            '84': 'চুরাশি',
            '85': 'পঁচাশি',
            '86': 'ছিয়াশি',
            '87': 'সাতাশি',
            '88': 'আটাশি',
            '89': 'উননব্বই',
            '90': 'নব্বই',
            '91': 'একানব্বই',
            '92': 'বিরানব্বই',
            '93': 'তিরানব্বই',
            '94': 'চুরানব্বই',
            '95': 'পঁচানব্বই',
            '96': 'ছিয়ানব্বই',
            '97': 'সাতানব্বই',
            '98': 'আটানব্বই',
            '99': 'নিরানব্বই',
            '100': 'একশত',
        },
        isFloat: function (value) {
            return (value).toString().indexOf('.') > -1
        },
        isZero: function (num) {
            return /^0+$/.test(num);
        },
        createSegment: function (num) {
            var segments = {
                koti: null,
                lokkho: null,
                hazar: null,
                sotok: null,
                ekok: null
            };

            segments.koti = Math.floor(num / 10000000);
            num = num % 10000000;

            segments.lokkho = Math.floor(num / 100000);
            num = num % 100000;

            segments.hazar = Math.floor(num / 1000);
            num = num % 1000;

            segments.sotok = Math.floor(num / 100);
            num = num % 100;

            segments.ekok = num;

            return segments;
        },

        setAmount: function (amount) {
            if (!isNaN(amount) && Number(amount) > -1) {
                this.amount = Number(amount);
                if (this.isFloat(this.amount)) {
                    var numberStr = (this.amount).toString();
                    var positionOfDecimalPoint = numberStr.indexOf('.');
                    this.numberFragements.integerPart = numberStr.substring(0, positionOfDecimalPoint);
                    this.numberFragements.fractionPart = numberStr.substring(positionOfDecimalPoint + 1);
                    this.numberFragements.isFloatValue = true;
                } else {
                    this.numberFragements.integerPart = Number(amount);
                    this.numberFragements.isFloatValue = false;
                }
            } else {
                throw new Error('Invalid parameter given, expected positive numeric value');
            }
        },
        getFractionSentece: function (fractionValue) {
            var fractionSentence = ''
            var fractionPartArray = fractionValue.toString().split('');
            fractionPartArray.forEach(function (character, index) {
                if (character === '0' && index < fractionPartArray.length - 1) {
                    fractionSentence += 'শুন্য '
                } else {
                    fractionSentence += this.numericWord[character] + ' '
                }
            }, this);
            return fractionSentence.trim();
        },
        generateSentence: function (segments) {
            var numberString = '';
            for (var i = segments.length - 1; i >= 0; i--) {
                for (let key in segments[i]) {
                    if (segments[i][key]) {
                        var amountWord = this.numericWord[segments[i][key]] ? this.numericWord[segments[i][key]] + ' ' : '';
                        if (key === 'koti' && segments[i]['koti'] && segments[i + 1] && segments[i + 1]['ekok']) {
                            numberString = numberString.trim();
                            amountWord = ' ';
                        }
                        numberString += amountWord + this.unit[key] + " ";
                    }
                }
            }
            return numberString;
        },

        getAmountInWord: function (value) {
            var amount = value;
            var segmentArray = [];
            var koti = amount / 10000000;
            if (koti > 99) {
                while (koti > 99) {
                    var result = this.createSegment(amount);
                    koti = result.koti;
                    segmentArray.push(result);
                    amount = Math.floor(amount / 10000000);
                }
            } else {
                var result = this.createSegment(amount);
                segmentArray.push(result);
            }
            return this.generateSentence(segmentArray).trim();
        },
        init: function (amount) {
            if (this.isZero(amount)) return 'শুন্য';
            this.setAmount(amount);
            var integerNumberInWord = this.getAmountInWord(this.numberFragements.integerPart);
            if (!this.numberFragements.isFloatValue) {
                return integerNumberInWord;
            }
            var fractionNumberInWord = this.getFractionSentece(this.numberFragements.fractionPart);
            return integerNumberInWord + ' ' + this.numericWord['.'] + ' ' + fractionNumberInWord
        },
    }
    return gonona.init(number);
});


/**
 * This method receives a number as parameter and returns it's bengali word representation
 * @param {String | Number} numericText 
 * @return {String}
 */
function convertToBengaliNumber(numericText) {
    const digitMap = {
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
        '0': '০',
    };
    
   return String(numericText).replace(/\d/g, function(key) {
        return digitMap[key];
    });
}

module.exports = {
    toBengaliWord: convertToWord,
    toBengaliNumber: convertToBengaliNumber 
};
