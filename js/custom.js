function loadjson(file){ //json file
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	details(data.carddetails1);
	details2(data.carddetails2);

})

var cardview = document.querySelector(".card-view");

function details(det){
	var img1 = document.createElement("img");
	img1.src =  det.image;
	cardview.appendChild(img1);


	var fullname=document.createElement("h3");
	fullname.textContent = det.fullname;
	cardview.appendChild(fullname);

	var rollno=document.createElement("p");
	rollno.textContent = det.rollno;
	cardview.appendChild(rollno);

	cardview.appendChild(document.createElement("hr"));

	var btn=document.createElement("button");
	btn.textContent=det.btn;
	btn.setAttribute("class","btn");
	btn.classList.add("class", "btn", "btn-primary");
	btn.onclick=function moveToPage() {
    	location.href="static-resume.html";
	}
	cardview.appendChild(btn);

}

var cardview2 = document.querySelector(".card-view2");

function details2(det){
	var img1 = document.createElement("img");
	img1.src =  det.image;
	cardview2.appendChild(img1);


	var fullname=document.createElement("h3");
	fullname.textContent = det.fullname;
	cardview2.appendChild(fullname);

	var rollno=document.createElement("p");
	rollno.textContent = det.rollno;
	cardview2.appendChild(rollno);

	cardview2.appendChild(document.createElement("hr"));

	var btn=document.createElement("button");
	btn.textContent=det.btn;
	btn.setAttribute("class","btn");
	btn.classList.add("class", "btn", "btn-primary");
	btn.addEventListener("click", moveToDynpage);
	cardview2.appendChild(btn);

}