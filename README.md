File organization:
- models.js: Student class with a read-only id property.
- database.js: Returns raw student data after a delay.
- analytics.js: It has CalculateClassAverage, findTopStudent, filterStudents functions.
- main.js: Imports everything above and runs the program.

Challenges:
- Understanding how Object.defineProperty works to make id read-only.
- Getting used to array methods like .map(), .filter(), and .reduce().
- The class syntax felt familiar coming from Java (we took a Java OOP course last semester), which made it easier to get started.