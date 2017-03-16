/**
 * @description:Date object
 * -has lots of methods
 * -has 0 props
 * -range from -100,000,000 days to 100,000,000 days relative to 01 January, 1970 UTC
 */

var dateObjectName = new Date([parameters]);

Date();//returns current date and time;
/**
 * @param {String} - representing a days:
 *  -in form:  "Month day, year hours:minutes:seconds."
 * @param {setOfIntegers} - 
 */
var Xmas95 = new Date("December 25, 1995 13:30:00");
var Xmas95 = new Date(1995, 11, 25);
var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);


/**
 * @description: Methods
 * 
    "set" methods, for setting date and time values in Date objects.
    "get" methods, for getting date and time values from Date objects.
    "to" methods, for returning string values from Date objects.
    parse and UTC methods, for parsing Date strings.
 *   -seconds, hours, months are 0 based
 *   -date: 1 to 31
 */
Xmas95.getMonth()//returns 11
Date.parse();//assigning values from date strings to date objects
var IPOdate = new Date();
IPOdate.setTime(Date.parse('Aug 9, 1995'));
