let Line;
(function(){
    getData('https://jsonplaceholder.typicode.com/todos/1')
})();
async function getData(url){
    try {
        let response = await axios.get(url);
        if(response.status==200){
            console.log(response.data);
            fillData(response.data);
        }
    } catch (error) {
        console.log(error);
    }
}
function fillData(data){
    let programme = "b.tech"
    data = {
        "sgrades": [
            {
                "sroll": "18CS01001",
                "cname": "PDS",
                "ctype": "CORE",
                "grade": 10,
                "semno": 1,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "ENGLISH",
                "ctype": "CORE",
                "grade": 10,
                "semno": 1,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "PHYSICS",
                "ctype": "CORE",
                "grade": 10,
                "semno": 1,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "MATHS",
                "ctype": "CORE",
                "grade": 10,
                "semno": 1,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "MATHS2",
                "ctype": "CORE",
                "grade": 10,
                "semno": 2,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "CHEMISTRY",
                "ctype": "CORE",
                "grade": 10,
                "semno": 2,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "ENGLISH2",
                "ctype": "CORE",
                "grade": 10,
                "semno": 2,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "CHEMISTRY LAB",
                "ctype": "LAB",
                "grade": 10,
                "semno": 2,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "DATA STRUCTURES",
                "ctype": "CORE",
                "grade": 10,
                "semno": 3,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "MATHS3",
                "ctype": "CORE",
                "grade": 10,
                "semno": 3,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "DATA STRUCTURES LAB",
                "ctype": "LAB",
                "grade": 9,
                "semno": 3,
                "credits": 3
            },
            {
                "sroll": "18CS01001",
                "cname": "DISCRETE MATHS",
                "ctype": "CORE",
                "grade": 9,
                "semno": 3,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "COMBINATORICS",
                "ctype": "CORE",
                "grade": 10,
                "semno": 4,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "ALGORITHMS",
                "ctype": "CORE",
                "grade": 10,
                "semno": 4,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "ALGORITHMS LAB",
                "ctype": "LAB",
                "grade": 9,
                "semno": 4,
                "credits": 3
            },
            {
                "sroll": "18CS01001",
                "cname": "INTRO TO ML",
                "ctype": "CORE",
                "grade": 10,
                "semno": 4,
                "credits": 1
            },
            {
                "sroll": "18CS01001",
                "cname": "OPERATING SYSTEMS LAB",
                "ctype": "LAB",
                "grade": 10,
                "semno": 5,
                "credits": 3
            },
            {
                "sroll": "18CS01001",
                "cname": "COA",
                "ctype": "CORE",
                "grade": 9,
                "semno": 5,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "OPERATING SYSTEMS",
                "ctype": "CORE",
                "grade": 10,
                "semno": 5,
                "credits": 4
            },
            {
                "sroll": "18CS01001",
                "cname": "COA LAB",
                "ctype": "LAB",
                "grade": 10,
                "semno": 5,
                "credits": 3
            }
        ],
        "sgpa": [
            {
                "sroll": "18CS01001",
                "gpa": 10.0,
                "semno": 1
            },
            {
                "sroll": "18CS01001",
                "gpa": 10.0,
                "semno": 2
            },
            {
                "sroll": "18CS01001",
                "gpa": 9.53,
                "semno": 3
            },
            {
                "sroll": "18CS01001",
                "gpa": 9.75,
                "semno": 4
            },
            {
                "sroll": "18CS01001",
                "gpa": 9.71,
                "semno": 5
            }
        ]
    }
    let sgpa = data.sgpa;
    let grades = data.sgrades;
    let k = document.getElementById("gtables");
    let globalTable =``;
    let sem_wise = [];
    for(let i=0;i<8;i++){
        sem_wise.push([]);
    }
    for(let i=0;i<grades.length;i++){
        sem_wise[grades[i].semno-1].push(grades[i]);
    }
    let sem_wise_grades = [];
    for(let i=0;i<8;i++){
        sem_wise_grades.push([]);
    }
    for(let i=0;i<sgpa.length;i++){
        sem_wise_grades[sgpa[i].semno-1].push(sgpa[i].gpa);
    }
    let CGPA=0;
    let counter=0;
    let gradesForP =[];
    for(let i=0;i<8;i++){
        gradesForP.push(sem_wise_grades[i].length==0?0:sem_wise_grades[i][0]);
        if(sem_wise_grades[i].length!=0){
            CGPA+= sem_wise_grades[i][0];
            //counter++;
        }
    } 
    
    console.log(sem_wise_grades);
    for(let i=0;i<8;i++){
        if(sem_wise[i].length!=0){
            let x = `
            <p>
               
            </p>
            <p>
               
            </p>
            <table class="w-100 mx-auto">
                <tr>
                <th class="xyz1">
                Semester: ${i+1}
                </th>
                <th class="xyz1">
                </th>
                <th class="xyz1">
                </th>
                <th class="xyz1 xyz2">
                SGPA: ${sem_wise_grades[i][0]}
                </th>
                </tr>
                <tr>
                    <th>
                        ${"Course Name"}
                    </th>
                    <th>
                        ${"Course Type"}
                    </th>
                    <th>
                        ${"Credits"}
                    </th>
                    <th>
                        ${"Grade"}
                    </th>
                </tr>
            `
            for(let j=0;j<sem_wise[i].length;j++){
                x+=`
                <tr>
                <td>
                    ${sem_wise[i][j].cname}
                </td>
                <td>
                    ${sem_wise[i][j].ctype}
                </td>
                <td>
                    ${sem_wise[i][j].credits}
                </td>
                <td>
                    ${sem_wise[i][j].grade}
                </td>
                </tr>
                `
            }
            x+=`
            </table>
            `
           globalTable+=x;
        }
        
    }
    while(gradesForP.length && gradesForP[gradesForP.length-1]==0){
        //console.log(gradesForP.length)
        gradesForP.pop();
    }
    counter = gradesForP.length; 
    CGPA = (counter==0)? 0:CGPA/counter;
    globalTable+=`
    <div>
       <strong>CGPA</strong>: ${CGPA}
    </div>
    `
    k.innerHTML = globalTable;

    let cxt = document.getElementById("progress");
    if(programme=="b.tech")drawLine(cxt,gradesForP,[1,2,3,4,5,6,7,8]);
    if(programme=="m.tech")drawLine(cxt,gradesForP,[1,2,3,4]);
}
function drawLine(cxt,grades,labels){
    if(Line){
        Line.destroy();
    }
    let _data = {
        labels:labels,
        datasets:[
            {
                label:'SGPA',
                fill:false,
                data:grades,
                borderColor:'rgb(0,0,0)'
            }
        ]
    }
    let _options = {
        
            scales: {
                y: {
                    title:{
                        display:true,
                        text:"SGPA",
                        font: {
                            size: 15
                        }
                    }
                },
                x:{
                    title:{
                        display:true,
                        text:"Semester",
                        font: {
                            size: 15
                        }
                    }
                }
            }
        
    }
    Line = new Chart(cxt,
        {
            type:'line',
            data:_data,
            options:_options
        });
        
}