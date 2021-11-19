/**
 * Direction:
 * Return a formatted array of sessions with list of classes & students
 * 
 * Expected Result:
 * [
 *  {
 *    session_id: 1,
 *    time: '09:00',
 *    classes: [
 *      {
 *        class_id: 1,
 *        name: 'A',
 *        students: [
 *          { student_id: 1, name: 'Adi' },
 *          { student_id: 1, name: 'Budi' },
 *        ],
 *      },
 *      {
 *        class_id: 2,
 *        name: 'B',
 *        students: [
 *          { student_id: 3, name: 'Bayu' },
 *          { student_id: 4, name: 'Dharma' },
 *        ],
 *      },
 *    ],
 *  },
 *  {
 *    session_id: 2,
 *    time: '10:00',
 *    classes: [
 *      {
 *        class_id: 3,
 *        name: 'C',
 *        students: [
 *          { student_id: 5, name: 'Surya' },
 *          { student_id: 6, name: 'Maha' },
 *        ],
 *      },
 *      {
 *        class_id: 4,
 *        name: 'D',
 *        students: [
 *          { student_id: 7, name: 'Dede' },
 *          { student_id: 8, name: 'Edi' },
 *        ],
 *      },
 *    ],
 *  },
 * ];
 */

const sessions = [
    { session_id: 1, time: '09:00', student: { student_id: 1, name: 'Adi' }, class: { class_id: 1, name: 'A' } },
    { session_id: 2, time: '10:00', student: { student_id: 5, name: 'Surya' }, class: { class_id: 3, name: 'C' } },
    { session_id: 2, time: '10:00', student: { student_id: 8, name: 'Edi' }, class: { class_id: 4, name: 'D' } },
    { session_id: 2, time: '10:00', student: { student_id: 7, name: 'Dede' }, class: { class_id: 4, name: 'D' } },
    { session_id: 1, time: '09:00', student: { student_id: 3, name: 'Bayu' }, class: { class_id: 2, name: 'B' } },
    { session_id: 1, time: '09:00', student: { student_id: 2, name: 'Budi' }, class: { class_id: 1, name: 'A' } },
    { session_id: 1, time: '09:00', student: { student_id: 4, name: 'Dharma' }, class: { class_id: 2, name: 'B' } },
    { session_id: 2, time: '10:00', student: { student_id: 3, name: 'Maha' }, class: { class_id: 3, name: 'C' } },
];

function result(sessions) {
    // Your Code Here
    const perSesstion = []
    const session1 = sessions.filter(s => s.session_id == 1)
    let kelas1 = session1.filter(s => s.class.class_id == 1)
    const classes = []
    let class1 = []
    for (let i = 0; i < kelas1.length; i++) {
        class1.push(kelas1[i].student)
    }
    let kelas2 = session1.filter(s => s.class.class_id == 2)
    let class2 = []
    for (let i = 0; i < kelas2.length; i++) {
        class2.push(kelas2[i].student)
    }
    let kelas3 = session1.filter(s => s.class.class_id == 3)
    let class3 = []
    for (let i = 0; i < kelas3.length; i++) {
        class3.push(kelas3[i].student)
    }
    let kelas4 = session1.filter(s => s.class.class_id == 4)
    let class4 = []
    for (let i = 0; i < kelas4.length; i++) {
        class4.push(kelas4[i].student)
    }
    let dataHasil = {
        session_id: session1.session_id,
        time: session1.time
    }
    return dataHasil
}

console.log(result(sessions));