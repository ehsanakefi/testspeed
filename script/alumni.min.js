document.addEventListener("DOMContentLoaded",function(){fetch("./data/alumni.json").then(a=>a.json()).then(a=>{alumni=a.alumni;let t=document.getElementById("alumni_box_team");result="",alumni.map(a=>result+=`
        <div class="card1">
              <div class="text_team1">
                <p class="name_text_team">${a.name}</p>
                <p class="status_text_team">${a.field}</p>
                <div class="icons_team1">
                  ${a.linkedin?`<a href="${a.linkedin}" class="tooltip" target="_blank"><img  src="./image/linkedin.png" class="icons_team_img" />
                      <span class="tooltiptext">${a.name} 's LinkedIn</span>
                      </a>`:""}
                  ${a.github?`<a href="${a.github}" class="tooltip" target="_blank"><img   src="./image/git.png" class="icons_team_img" />
                      <span class="tooltiptext">${a.name} 's GitHub</span>
                      </a>`:""}
                  ${a.google_scholar?`<a href="${a.google_scholar}" class="tooltip" target="_blank"><img src="./image/google.png" class="icons_team_img" />
                      <span class="tooltiptext">${a.name} 's Google Scholar</span>
                      </a>`:""}
                  ${a.homepage?`<a href="${a.homepage}" class="tooltip" target="_blank"><img src="./image/website.png" class="icons_team_img" />
                      <span class="tooltiptext">${a.name} 's Website</span>
                      </a>`:""}
                </div> 
              </div>
            </div> 
      `),t.innerHTML=result}).catch(a=>console.error("Error fetching data:",a))});
