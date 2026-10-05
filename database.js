export function fetchStudents(callback) {
    setTimeout(() => {
        const rawData = [
            { id: 1, name: "Ali", courses: [{ courseId: 101, grade: 90 }, { courseId: 102, grade: 85 }] },
            { id: 2, name: "Zeynep", courses: [{ courseId: 101, grade: 70 }, { courseId: 102, grade: 95 }] },
            { id: 3, name: "Ahmet", courses: [{ courseId: 101, grade: 60 }, { courseId: 102, grade: 55 }] },
            { id: 3, name: "Cihad", courses: [{ courseId: 101, grade: 24 }, { courseId: 102, grade: 53 }] },
            { id: 3, name: "Mustafa", courses: [{ courseId: 101, grade: 99 }, { courseId: 102, grade: 28 }] },
            { id: 3, name: "Yunus", courses: [{ courseId: 101, grade: 78 }, { courseId: 102, grade: 69 }] },
            { id: 3, name: "Temel", courses: [{ courseId: 101, grade: 77 }, { courseId: 102, grade: 47 }] }
        ];

        callback(rawData);
    }, 2000);
}
