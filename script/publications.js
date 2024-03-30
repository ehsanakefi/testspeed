document.addEventListener("DOMContentLoaded",function(){fetch("./data/publications.json").then(a=>a.json()).then(a=>{publications=a.publications;let e=document.getElementById("publications_box_team");publicationsResult="",publications.map((a,e)=>{let s=""==a.image?"<span></span>":`<img src=${a.image} class="image_research" />
            `;publicationsResult+=`
        <div class="card_research">
        <div class="image_research_box">
        ${s}
        </div>
        <div class="left_research_box">
          <span>
          <a href="${a.url}" target="_blank">
            <div class="title_research_box">
              <h4 class="title_research">
              ${a.title}
              </h4>
            </div>
          </a>
            <div class="contain_text_research_box">
              <p class="contain_text_research">
              ${a.abstract}
              </p>
            </div>
            <p class="jurnal">
            ${a.journal}, ${a.year}
            </p>
            <p class="author">
            ${a.author}
            </p>
          </span>
          <div class="icons_research_box">
            <div class="icon_text_research">
              <img src="./image/quote.png" class="icon" />
              <p class="paragraph_icon_research">BibTeX</p>
            </div>
            ${a.pdf?`<a href="${a.pdf}" target="_blank">
              <div class="icon_text_research">
                <img src="./image/box.png" class="icon" />
                <p class="paragraph_icon_research">PDF</p>
              </div>
            </a>`:""}
            ${a.code?`<a href="${a.code}" target="_blank">
                <div class="icon_text_research">
                  <img src="./image/code.png" class="icon" />
                  <p class="paragraph_icon_research">Code</p>
                </div>
              </a>`:""}
            ${a.website?`<a href="${a.website}" target="_blank">
                <div class="icon_text_research">
                  <img src="./image/world.png" class="icon" />
                  <p class="paragraph_icon_research">Website</p>
                </div>
            </a>`:""}
            ${a.youtube?`<a href="${a.youtube}" target="_blank">
                  <div class="icon_text_research">
                    <img src="./image/youtube.png" class="icon" />
                    <p class="paragraph_icon_research">Youtube</p>
                  </div>
              </a>`:""}
          </div>
        </div>
      </div> 
      `}),e.innerHTML=publicationsResult}).catch(a=>console.error("Error fetching data:",a))});
