(function(){

    let data = [
        [
            "DATABASE SYSTEMS",
            "DATABASE SYSTEMS LAB"
        ],
        {
            "DATABASE SYSTEMS": [
                [
                    "18CS01001",
                    "SRIPAD",
                    2018,
                    6
                ],
                [
                    "18CS01003",
                    "STUDENT3",
                    2018,
                    6
                ],
                [
                    "18CS01004",
                    "STUDENT4",
                    2018,
                    6
                ]
            ],
            "DATABASE SYSTEMS LAB": [
                [
                    "18CS01001",
                    "SRIPAD",
                    2018,
                    6
                ],
                [
                    "18CS01003",
                    "STUDENT3",
                    2018,
                    6
                ],
                [
                    "18CS01004",
                    "STUDENT4",
                    2018,
                    6
                ]
            ]
        },
        2
    ]

    let tot_courses = data[2];
    let list_courses = data[0];
    
    let stud_data = data[1];
    let num_students=[];
    for(let i=0;i<tot_courses;i++){
        num_students.push(stud_data[list_courses[i]].length);
    }
    console.log(num_students)
    let k = document.getElementById("ccl");
    let x = "";
    for(let i=0;i<tot_courses;i++){
        x+=`
        <button type="button" id="${list_courses[i]}"  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        ${list_courses[i]}
        <span class="badge badge-primary badge-pill" data-toggle="tooltip" data-placement="left" title="#students">${num_students[i]}</span>
        </button>
        `
    }

    let current_course = list_courses[0];
    k.innerHTML = x;
   
    let buttons = document.getElementsByTagName("button");
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',(e)=>{
            //e.target.id = "DATABASE SYSTEMS"
            console.log(e.target)
            fillViewData(e.target.id,stud_data[e.target.id]);
        })
    }

    console.log(data);
    fillViewData(current_course,stud_data[current_course])

 })();
 
 function fillViewData(current_course,data){
        let current_sem = data[0][3];
        let current_batch = data[0][2];

        

        let k = document.getElementById("cdata-view");

        let x="";
        x=
        `<h6>Course: <span id="ccourse">DATABASE SYSTEMS</span></h6>
        <table> 
        <tr >
        <th class="xyz">
        Batch: ${current_batch}
        </th>
        <th class="xyz">
        </th>
        <th class="xyz">
        </th>
        <th class="xyz">
        Semester: ${current_sem}
        </th>
        </tr>

        <tr> <th>S.no</th><th>Student Name </th>
         <th>Roll No </th>
         <th>Grade </th>
        </tr>
        `
        let j=0;
        for(let i=0;i<data.length;i++){j++;
            x+=`

                <tr>
                <td>
                ${j}
                </td>
                <td>
                ${data[i][1]}
                </td>
                <td>
                ${data[i][0]}
                </td>
                <td>
                <input type="number" step="1" min="1" max="10" required />
                </td>
                </tr>
            `
        }
        x+=`
        </table>
        `;
        k.innerHTML +=x;
        
 }