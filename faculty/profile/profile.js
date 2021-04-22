(function(){
    //getAndFill('http://localhost:8081/myprofile');
    getAndFill('https://jsonplaceholder.typicode.com/todos/1');
})();

async function getAndFill(url){
    try{
        let response = await axios.get(url);
        if(response.status==200){
            let data = response.data;
            //console.log(response);
            console.log(data);
            // data = {
            //     "sroll": "18CS01001",
            //     "sname": "SRIPAD",
            //     "batch": 2018,
            //     "dept_id": 1,
            //     "email": "sri@s.com",
            //     "phone": "9876543210",
            //     "gender": "M",
            //     "program": "B.Tech",
            //     "address": "Kurnool, AP",
            //     "dob": "2000-05-07 00:00:00"
            // };
            data = {
                
                "fname": "PADMALOCHAN BERA",
                "joining_date": "2011-10-10 00:00:00",
                
                "email": "f1@s.com",
                "phone": "8765432109",
                "gender": "M",
                "salary": 1000000,
                
            }
        document.getElementById("fname").innerHTML = data.fname;
        document.getElementById("jdate").innerHTML = data.joining_date.substr(0,10);
        document.getElementById("email").innerHTML = data.email;
        document.getElementById("phone").innerHTML = data.phone;
        document.getElementById("gender").innerHTML = data.gender;
        document.getElementById("salary").innerHTML+= data.salary;
        }
     
    }catch(err){
        console.log(err);
    }
}



