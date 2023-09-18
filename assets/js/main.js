async function getfacultyjson(){
    let result= await fetch(`data/faculty.json`).then((x)=>x.json());
    console.log(result)
    return result;
    
}

async function updatesUniversityName(){
    let sonc=await getfacultyjson();
    document.getElementById('university_name').innerText=sonc['SchoolName']
    
}
