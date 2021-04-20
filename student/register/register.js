const getDataAndFill = async function(url){
    try {
        let response = await axios.get(url);
        if(response.status==200 ){
           console.log(response.data); 
           let data = response.data;
           data ={
            "coursesList": [
                {
                    "sroll": "18CS01001",
                    "course_id": 1,
                    "cname": "PDS",
                    "ctype": "CORE",
                    "dept_id": 1,
                    "semno": 1,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 2,
                    "cname": "ENGLISH",
                    "ctype": "CORE",
                    "dept_id": 3,
                    "semno": 1,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 3,
                    "cname": "PHYSICS",
                    "ctype": "CORE",
                    "dept_id": 3,
                    "semno": 1,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 4,
                    "cname": "MATHS",
                    "ctype": "CORE",
                    "dept_id": 3,
                    "semno": 1,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 5,
                    "cname": "MATHS2",
                    "ctype": "CORE",
                    "dept_id": 3,
                    "semno": 2,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 6,
                    "cname": "CHEMISTRY",
                    "ctype": "CORE",
                    "dept_id": 3,
                    "semno": 2,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 7,
                    "cname": "ENGLISH2",
                    "ctype": "CORE",
                    "dept_id": 3,
                    "semno": 2,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 16,
                    "cname": "INTRO TO ML",
                    "ctype": "CORE",
                    "dept_id": 3,
                    "semno": 4,
                    "credits": 1
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 8,
                    "cname": "CHEMISTRY LAB",
                    "ctype": "LAB",
                    "dept_id": 3,
                    "semno": 2,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 9,
                    "cname": "DATA STRUCTURES",
                    "ctype": "CORE",
                    "dept_id": 1,
                    "semno": 3,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 10,
                    "cname": "DISCRETE MATHS",
                    "ctype": "CORE",
                    "dept_id": 1,
                    "semno": 3,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 11,
                    "cname": "DATA STRUCTURES LAB",
                    "ctype": "LAB",
                    "dept_id": 1,
                    "semno": 3,
                    "credits": 3
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 12,
                    "cname": "MATHS3",
                    "ctype": "CORE",
                    "dept_id": 3,
                    "semno": 3,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 13,
                    "cname": "COMBINATORICS",
                    "ctype": "CORE",
                    "dept_id": 1,
                    "semno": 4,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 14,
                    "cname": "ALGORITHMS",
                    "ctype": "CORE",
                    "dept_id": 1,
                    "semno": 4,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 15,
                    "cname": "ALGORITHMS LAB",
                    "ctype": "LAB",
                    "dept_id": 1,
                    "semno": 4,
                    "credits": 3
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 17,
                    "cname": "OPERATING SYSTEMS",
                    "ctype": "CORE",
                    "dept_id": 1,
                    "semno": 5,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 18,
                    "cname": "COA",
                    "ctype": "CORE",
                    "dept_id": 1,
                    "semno": 5,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 19,
                    "cname": "OPERATING SYSTEMS LAB",
                    "ctype": "LAB",
                    "dept_id": 1,
                    "semno": 5,
                    "credits": 3
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 20,
                    "cname": "COA LAB",
                    "ctype": "LAB",
                    "dept_id": 1,
                    "semno": 5,
                    "credits": 3
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 21,
                    "cname": "DATABASE SYSTEMS",
                    "ctype": "CORE",
                    "dept_id": 1,
                    "semno": 6,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 22,
                    "cname": "DATABASE SYSTEMS LAB",
                    "ctype": "LAB",
                    "dept_id": 1,
                    "semno": 6,
                    "credits": 3
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 23,
                    "cname": "CN",
                    "ctype": "CORE",
                    "dept_id": 1,
                    "semno": 6,
                    "credits": 4
                },
                {
                    "sroll": "18CS01001",
                    "course_id": 24,
                    "cname": "CN LAB",
                    "ctype": "LAB",
                    "dept_id": 1,
                    "semno": 6,
                    "credits": 3
                }
            ],
            "registered": false,
            "offeredCourses": [
                {
                    "course_id": 21,
                    "cname": "DATABASE SYSTEMS",
                    "ctype": "CORE",
                    "dept_id": 0,
                    "semno": 6,
                    "credits": 4
                },
                {
                    "course_id": 22,
                    "cname": "DATABASE SYSTEMS LAB",
                    "ctype": "LAB",
                    "dept_id": 0,
                    "semno": 6,
                    "credits": 3
                },
                {
                    "course_id": 23,
                    "cname": "CN",
                    "ctype": "CORE",
                    "dept_id": 0,
                    "semno": 6,
                    "credits": 4
                },
                {
                    "course_id": 24,
                    "cname": "CN LAB",
                    "ctype": "LAB",
                    "dept_id": 0,
                    "semno": 6,
                    "credits": 3
                }
            ]
            }

           if(data.registered==false)fillFormData(data.offeredCourses);
           fillCourseList(data.coursesList);
        }
    } catch (error) {
        console.log(error);
    }
}
function fillCourseList(coursesList){
    
    let sem_wise=[];
    for(let i=0;i<8;i++){
        sem_wise.push([]);
    }
    for(let i=0;i<coursesList.length;i++){
        sem_wise[coursesList[i].semno-1].push(coursesList[i]);
    }
  
   for(let i=0;i<8;i++){
       
       if(sem_wise[i].length!=0){
            fillCourseTable(sem_wise[i],i+1);
       }
   }
   
   
}
function fillCourseTable(courseData,semno){
    let lc = document.getElementById("lcourses");
   
    let x =`
    <table class="w-100 mb-3">
        <tr>
        <th class="xyz">Semester: ${semno}</th>
        </tr>
        <tr>
        <th>Course Name</th>
        <th>Course Type</th>
        <th>Credits</th>
        </tr>
    `;
    for(let j=0;j<courseData.length;j++){
        x+=`
        <tr>
           <td>
            ${courseData[j].cname}
           </td> 
           <td>
            ${courseData[j].ctype}
           </td> 
           <td>
            ${courseData[j].credits}
           </td> 
        </tr>
        `
    }
    x+=`
    </table>
    `;
    lc.innerHTML+= x;
}
function fillFormData(offeredCourses){
  
       /* {
            "course_id": 21,
            "cname": "DATABASE SYSTEMS",
            "ctype": "CORE",
            "dept_id": 0,
            "semno": 6,
            "credits": 4
        }*/
        let semno = offeredCourses[0].semno;
        let k = document.getElementById("reg");
        let x=`
                <h6 class="text-center bg-dark text-white border border-dark p-2">Register</h6>
                </hr>

                <table class="w-75 mx-auto">
                    <tr>
                        <th>Course Name</th>
                        <th>Course Type</th>
                        <th>Credits</th>
                        <th>Register</th>
                    </tr>`
        for(let i=0;i<offeredCourses.length;i++)
        {
                x+=`
                <tr>
                    <td>
                        ${offeredCourses[i].cname}
                    </td>
                    <td>
                        ${offeredCourses[i].ctype}
                    </td>
                    <td>
                        ${offeredCourses[i].credits}
                    </td>
                    <td><input type="checkbox" name="${offeredCourses[i].course_id}" id=${offeredCourses[i].course_id}></td>
                </tr>
                `
        }
        x+=`
        </table>`;
        x+=`
           <div class="mt-2 d-flex justify-content-center"> <button type="submit" class="btn btn-dark" id="register">Register</button></div>
        `;
        k.innerHTML = x;
        let p = document.getElementById("register");
        //console.log(p);
        if(p){
            //console.log(p);
            p.addEventListener("click",async (e)=>{
                    e.preventDefault();
                    p.disabled=true;
                    //console.log("clicked");
                    let regDiv = document.getElementById("reg");
                    let chkbx = regDiv.getElementsByTagName("input");
                    let regData = [];
                    for(let i=0;i<chkbx.length;i++){
                        if(chkbx[i].checked){
                            regData.push(chkbx[i].name);
                        }
                    }
                    console.log(regData);

                    p.innerHTML = `<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    Registering...`
                    /*let response = await axios({
                        url:"https://jsonplaceholder.typicode.com/todos/",
                        method:"post",
                        data:regData
                    })*/
                    //console.log(response);
                    //fillCourseTable(response.data,semno);
                    console.log(semno);
            });
        }
    

}
(function(){
    
   getDataAndFill('https://jsonplaceholder.typicode.com/todos/1');
   
})();
