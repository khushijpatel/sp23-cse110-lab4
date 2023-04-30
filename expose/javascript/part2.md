1. Line 12 will print 3 because i is initialized as ```var``` so it can be accessed at line 12. The input array prices has 3 elements so the for loop runs for the number of elements in the array, so the loop stops when i goes from 2 to 3.
2. Line 13 will print 150 becuase 150 is the last element of the array's discounted price which comes from ```prices[i] * (1- discount)``` = 300 * 0.5 = 150.
3. Line 14 will print 150 becuase it is the last value of finalPrice when the loop stops running. It is the same as discountedPrice because ```finalPrice = Math.round(discountedPrice * 100) /100 ``` which is same as discountedPrice if you cancel out the 100s using simple math division properties.
4. Returns discounted which is [50, 100, 150] because discounted had been pushing the calculated finalPrice values which were 50 for 100, 100 for 200, and 150 for 300 in the for loop. Discounted is a ```var``` so it can be changed and accessible in line 16 so no error is thrown.
5. Reference error at line 8 becuase we switched from ```var``` to  ```let``` in the for loop. Let is localized so i cannot be accessed in line 12 since it is outside the local scope this not defined when we try to log it.
6. reference error as above because ```discountedPrice``` is declared with a ```let```, so it can only be accessed inside the for loop (locally) and not in line 13 when trying to log it.
7. Line 14 will print 150 because finalPrice was defined in the same scope with ```let``` in line 4. It can be updated in the for loop but since it's already defined, it will update the value in line 8 to 150 (last value when for loop ends) and still be accessible in line 14.
8. Returns discounted which is [50, 100, 150] because discounted had been pushing the calculated finalPrice values which were 50 for 100, 100 for 200, and 150 for 300 in the for loop. Discounted is ```let``` so it can be changed and accessible in line 16 which is in the same scope so no error is thrown.
9.  ReferenceError i is not defined since defined in the for loop and ```let``` is localized so i cannot be accessed in line 12 because it is outside the local scope when we try to log it in line 11.
10. Line 12 prints 3 because length is a constant that does not change and defined in the same scope so it can be accessed in line 12. The value is 3 since ```length = prices.length``` and prices has 3 elements so length is 3 and the value is never updated since it is a ```const```.
11. Returns discounted which is [50, 100, 150] because discounted had been pushing the calculated finalPrice values which were 50 for 100, 100 for 200, and 150 for 300 in the for loop. It is also defined in the same scope so no errors accessing it.

12. 
    - ```student.name```
    - ```student["Grad year"]```
    - ```student.greeting()```
    - ```student["Favorite Teacher"].name```
    - ```student.courseLoad[0]```

13. 
    - '3' + 2 results in '32' (as a string) because integers map to strings and we are conatenating a string with the '+' operator.
    - '3' - 2 results in a 1 (as a number) because we are not concatenating text instead performing a math operation.
    - 3 + null results in 3 (as a number) because ```null``` is treated as a false value of 0 so it is 3 + 0, which is 3.
    - '3' + null results in '3null' (as a string) because we are concatenating two strings.
    - true + 3 results in 4 (as a number) because ```true``` is treated as a truth value of 1, so it is 1 + 3, which is 4.
    - false + null results in 0 (as a number) because false and null are treated as value of 0, thus 0 + 0 = 0.
    - '3' + undefined results in '3undefined' (as a string) because we are concatening a string.
    - '3' - undefined results in NaN(not a number), because undefined means there is nothing assinged to it and we attempt 3 - undefined which is not possible.

14. 
    - '2' > 1 is true because '2' becomes a number 2, which is greater than 1.
    - '2' < '12' is false because we are comparing two strings, not the number 2 and 12. So, 2 is greater than 1 as a character.
    - 2 == '2' is true because we are comparing 2 to 2 (the values of int 2 and string 2 which is 2 for both), so both are equal.
    - 2 === '2' is false because === is the strict equality operator, and since a number and string are not the same type so this is not equal.
    - true == 2 is false because 2 is not a truth value, the value for true is 1, and 1 does not equal 2 so it is false.
    - true === Boolean(2) is true, because Boolean(2) will convert this to the truth version of 2, which is true, which is equal to true so overall the comparison is equal so true.
15. The == operator checks for equality of the values, if two things being compared are equal to each other based on the value not type and value. The === operator is a strict equality operato so it checks if the type and values of the two sides are equal, and would return false if not.

16. In part2-question16.js
    
17. This function will return an array with ```[2,4,6]``` inside it. We are passing in an array [1, 2, 3] into modifyArray, and then looping through each element in it. At each element (1, 2, 3), we call the callback function on it (which is another parameter), which essentially multiplies each element by 2 so we get (2, 4, 6) respectively and push each element (2, 4, 6) into newArr which is returned.

18. In part2-question18.js
    
19. The function will first log a 1. Then it will print out a 4 from line 5. Then it prints out a 3 from line 4 since it had a 0 second delay. Finally it prints out 2 from line 3 which had a 1000 second delay. Thus the order is 1, 4, 3, 2. The function prints out the following:
    ```
        1
        4
        3
        2
    ```