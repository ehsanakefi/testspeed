document.addEventListener("DOMContentLoaded",function(){fetch("./data/faculty.json").then(a=>a.json()).then(a=>{faculty=a.faculty;let t=document.getElementById("faculty_box_team");facultyResult="",faculty.map((a,t)=>{let e=""==a.image?`<div class=${t%2==0?"empty_image_box1":"empty_image_box2"}></div>`:` <img src=${a.image} class="profile_img_team" />`;facultyResult+=`<div class="card">
              <div class="image_box">
               ${e}
              </div>
              <div class="text_team">
                <p class="name_text_team">${a.name}</p>
                <p class="status_text_team">${a.field}</p>
                <div class="icons_team">
                  ${a.linkedin?`<a href="${a.linkedin}" class="tooltip" target="_blank"><img src="./image/linkedin.png" class="icons_team_img" />
                      <span class="tooltiptext">${a.name} 's LinkedIn</span></a>`:""}
                  ${a.github?`<a href="${a.github}" class="tooltip" target="_blank"><img src="./image/git.png" class="icons_team_img" />
                      <span class="tooltiptext">${a.name} 's GitHub</span></a>`:""}
                  ${a.google_scholar?`<a href="${a.google_scholar}" class="tooltip" target="_blank"><img src="./image/google.png" class="icons_team_img" />
                      <span class="tooltiptext">${a.name} 's Google Scholar</span></a>`:""}
                  ${a.homepage?`<a href="${a.homepage}" class="tooltip" target="_blank"><img src="./image/website.png" class="icons_team_img" />
                      <span class="tooltiptext">${a.name} 's Website</span></a>`:""}
                </div> 
              </div>
            </div>  
      `}),t.innerHTML=facultyResult}).catch(a=>console.error("Error fetching data:",a))});
