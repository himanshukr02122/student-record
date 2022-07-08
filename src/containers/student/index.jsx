import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../layout'

const students = [
  {student_name:'Robert Fox', Class:'8th', result:'Passed', score:'78/100', grade:'Excellent'},
  {student_name:'Ralph Edwards', Class:'7th', result:'Failed', score:'20/100', grade:'Poor'},
  {student_name:'Esther Howard', Class:'9th', result:'Passed', score:'60/100', grade:'Average'},
  {student_name:'Eleanor Pena', Class:'8th', result:'Passed', score:'60/100', grade:'Average'},
  {student_name:'Arlene McCoy', Class:'7th', result:'Passed', score:'85/100', grade:'Excellent'},
  {student_name:'Marvin McKinney', Class:'9th', result:'Failed', score:'25/100', grade:'Poor'},
  {student_name:'Wade Warren', Class:'7th', result:'Passed', score:'90/100', grade:'Excellent'}
]
let s_name = localStorage.getItem('name');
let s_class = localStorage.getItem('class');
let s_score = localStorage.getItem('score');

let newStudentData = {
  student_name: s_name,
  Class: s_class,
  score: s_score+'/100',
  result: s_score <40 ? 'Failed' : 'Passed',
  grade: s_score <40 ? 'Poor' : s_score >=60 && s_score<80 ? 'Average': 'Excellent' 
}
students.push(newStudentData);

function removeFunc() {
  localStorage.removeItem('name');
  localStorage.removeItem('class');
  localStorage.removeItem('score');
  // students.pop()
  students.splice(students.length-1, 1);
  alert(students.length)
}


export default function Dashboard(props) {

  return (
    <div className={props.disable}>
    <Layout>
      <section className="h-full w-full py-10 px-6">
        <div className="flex justify-between items-center">
          <span className="font-medium text-2xl">Students</span>
          <Link to='/add-student' className={"text-lg bg-sky-400 text-white px-8 py-1.5 rounded-lg font-medium " + (props.disable)}><i className="fa fa-plus mr-1" aria-hidden="true"></i> ADD</Link>
        </div>

        <div className="w-full h-[77vh] mt-6 rounded-xl border">
          <div className="w-full grid grid-cols-8 bg-zinc-100 rounded-t-xl">
            <span className="px-5 py-2">No.</span>
            <span className="px-5 py-2 col-span-2">Student Name</span>
            <span className="px-5 py-2">Class</span>
            <span className="px-5 py-2">Result</span>
            <span className="px-5 py-2">Score</span>
            <span className="px-5 py-2 col-span-2">Grade</span>
          </div>
          <ul className="w-full overflow-auto h-[65vh] no-scrollbar">
            {
              students.map((student, index) => {
                const {student_name, Class, result, score, grade } = student;
                return (
                  <li className="w-full grid grid-cols-8 border-b h-14 items-center hover:bg-gray-100 gap-5 group" key={index}>
                    <span className="px-5 py-1">{index + 1} </span>
                    <span className="col-span-2 px-5 py-1">{student_name} </span>
                    <span className="px-5 py-1">{Class} </span>
                    <span className={'px-5 py-1 text-center rounded-full text-white '+ (result==='Passed' ? 'bg-green-400' : 'bg-red-500')}> {result} </span>
                    <span className="px-5 py-1">{score} </span>
                    <span className={"px-5 py-1 "+ (grade==='Excellent' ? 'text-green-400' : grade==='Average' ? 'text-sky-400': 'text-red-500')}>{grade} </span>
                    <span className="invisible flex justify-start items-center px-5 py-2 gap-5 text-sky-400 group-hover:visible"><button className={props.disable}><i className="fa fa-edit" aria-hidden="true"></i></button> 
                        <button className={props.disable} ><i className="fa fa-remove" aria-hidden="true" onClick={removeFunc}></i></button>
                    </span>
                  </li>
                )
              })
            }
            {props.listItem}
            
            
          </ul>

        </div>
      </section>
    </Layout>
    </div>
  )
}
