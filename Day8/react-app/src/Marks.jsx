import "./marks.css"

const Marks = ({name, roll, m1, m2, m3}) => {
    return (
        <div id="res">
            <h1>Student Marksheet</h1>
            <h2>Name: {name}</h2>
            <h2>Roll No.: {roll}</h2>
            <h2>Semesterwise Marks</h2>
            <h2>Semester 1: {m1}</h2>
            <h2>Semester 1: {m2}</h2>
            <h2>Semester 1: {m3}</h2>
        </div>
    );
};

export default Marks;