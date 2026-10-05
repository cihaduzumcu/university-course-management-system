import { Student } from './models.js';
import { fetchStudents } from './database.js';
import { calculateClassAverage, findTopStudent, filterStudents } from './analytics.js';

console.log('Fetching students...');

fetchStudents((rawData) => {
    const students = rawData.map(data => new Student(data.id, data.name, data.courses));

    try {
        students[0].id = 999;
    } catch (error) {
        console.log(`Could not change id (as expected): ${error.message}`);
    }
    console.log(`Attempted to change id to 999, actual id is still: ${students[0].id}`);

    const avg101 = calculateClassAverage(students, 101);
    console.log(`Class average for Course 101: ${avg101.toFixed(2)}`);

    const top = findTopStudent(students);
    console.log(`Top student: ${top.name} (average: ${top.getAverage().toFixed(2)})`);

    const course102Students = filterStudents(
        students,
        student => student.courses.some(course => course.courseId === 102)
    );
    console.log(`Students who took Course 102: ${course102Students.map(s => s.name).join(', ')}`);
});
