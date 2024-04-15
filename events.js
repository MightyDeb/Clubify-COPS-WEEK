
const clubs= [{id: 'e-cell',logo: 'e-cell.png', naming:'E-CELL',live: 0}, {id: 'animation',logo:'animation_img.jpg', naming: 'ANIMATION CLUB',live: 0},{id: 'cine',logo: 'cine_img.jpg', naming: 'CINEMA CLUB',live: 0},{id: 'photog', logo: 'photog_img.jpg', naming: 'PHOTOGRAPHY CLUB',live: 0},{id: 'media', logo:'media_img.jpg', naming: 'MEDIA CLUB',live: 0},{id: 'outreach', logo: 'outreach_img.png', naming: 'OUTREACH',live: 1,live_image: "outreach_live.webp",live_news: 'Join us in this exciting video where you can freely discuss about your endsem preparations. Expect a funny session!',live_date: 'Date: 14th June, 2024',live_time: 'Time: 4:00pm',live_venue: 'Venue: Electrical Grounds'},{id: 'sports', logo: 'games.png', naming: 'SPORTS COUNCIL',live: 1,live_image: "football_live.jpg",live_news: 'Football Match is scheduled between IIT-BHU and BHU. Do come to cheer your team at home.',live_date: 'Date: 15th June, 2024',live_time: 'Time: 5:00pm',live_venue: 'Venue: Gymkhana Grounds'},{id: 'wmc', logo: 'wmc_iitbhu.jpg', naming: 'W.M.C.',live: 0},{id: 'imc', logo: 'imc_img.jpg', naming: 'I.M.C.',live: 0},{id: 'masq', logo: 'masq_img.jpg', naming: 'MASQUERADES',live: 0},{id: 'dfz',logo: 'dfz_img.png', naming: 'D.F.Z.',live: 0},{id: 'fac',logo:'fac_img.jpg',naming: 'F.A.C.',live: 1,live_image: "fac_live.jpg",live_news: 'Poster Making Competition',live_date: 'Date: 13th June, 2024',live_time: 'Time: 3:00pm',live_venue: 'Venue: LT-3.1A'},{id: 'quiz',logo:'quiz_img.png',naming: 'QUIZ CLUB',live: 0},{id: 'lit',logo: 'lit_img.jpg',naming: 'LIT CLUB',live: 0},{id: 'cops', logo:'cops_img.jpg',naming: 'COPS',live: 1,live_image: "cops_live.jpg",live_news: 'COPS Week is going on from 7th June to 14th June, 2024. Entry of freshers will be decided based on this one week performance.',live_date: 'Date: 7th-14th June, 2024',live_time: 'Time: _all_',live_venue: 'Venue: _online_'},{id: 'robo',logo:'robo_img.png',naming: 'ROBOTICS CLUB',live: 0},{id: 'sae',logo:'sae_img.jpg',naming: 'SAE',live: 0},{id: 'amc',logo:'aero_img.png',naming: 'AMC',live: 0},{id: 'astro',logo:'astroiitbhu_logo.jpg',naming: 'ASTRO CLUB',live: 0},{id: 'biz',logo:'biz.jpg',naming: 'BUSINESS CLUB',live: 1,live_image: "biz_live.jpg",live_news: 'Business Hackathon will run from 12th June-14th June, 2024. Participate in large numbers!',live_date: 'Date: 7th- June, 2024',live_time: 'Time: _all_',live_venue: 'Venue: _online_'},{id: 'wellness',logo:'wellness_council_iit_bhu_varanasi_logo.jpg',naming: 'WELLNESS COUNCIL',live: 0},{id: 'academic',logo:'academic_council_iit_bhu_logo.jpg',naming: 'ACADEMIC COUNCIL',live: 1,live_image: 'scs_live.png',live_news: 'Student Mentor Feedback form has been uploaded. Kindly fill it within due date.',live_date: 'Date: 14th June, 2024 due',live_time: 'Time: _all_',live_venue: '_online_'},{id: 'career',logo:'career_council_iit_bhu_varanasi_logo.jpg',naming: 'CAREER COUNCIL',live: 0},{id: 'intn',logo:'international_exchnage_council_iit_bhu_logo.jpg',naming: 'INTERNATIONAL EXCHANGE',live: 0},{id: 'skills',logo:'skill_development_council_iit_bhu_logo.jpg', naming: 'SKILL DEVELOPMENT COUNCIL',live: 0}];
let clubinterest= JSON.parse(localStorage.getItem('clubinterest')) || [];

displayInterest(clubinterest);

let clubhtml='';
clubs.forEach((club)=>{
  const c=club.live;
  if(c!=0){
    clubhtml+=`<div class="box">
    <h3>${club.naming}</h3>
    <img src="Pictures/${club.live_image}">
    <p>${club.live_news}</p>
    <p>${club.live_date}</p>
    <p>${club.live_time}</p>
    <p>${club.live_venue}</p>
    </div>`
  }
});    
//console.log(clubhtml);
setTimeout(function(){
  what();
  function what(){
     document.getElementById('js_live').innerHTML = clubhtml;
  };
}, 50);



// /* interested clubs list formation
document.querySelectorAll('.interest').forEach((button)=>{
  button.addEventListener('click',() => {
    const classname=button.dataset.classname;
    //console.log(classname);
    let htmlcode='';
    let match;
    clubs.forEach((item)=>{
      //console.log(item);
      if(classname===item.id){
          match=item;
 
      if(match.live===0){
        htmlcode=`<div class="box interest">
                <h3>${match.naming}</h3>
                <img src="Pictures/${match.logo}">
                <p>NO LIVE EVENTS</p> </div>`
        //console.log(htmlcode);
        availability(clubinterest,match,htmlcode);
      }else{
        htmlcode=`<div class="box interest">
        <h3>${match.naming}</h3>
        <img src="Pictures/${match.live_image}">
        <p>${match.live_news}</p>
        <p>${match.live_date}</p>
        <p>${match.live_time}</p>
        <p>${match.live_venue}</p>
        </div>`
        //console.log(htmlcode);
        availability(clubinterest,match,htmlcode);
      } } 
  });
});
});   


function savetoStorage(){
  localStorage.setItem('clubinterest', JSON.stringify('clubinterest'));
}

function displayInterest(clubinterest){
  let code='';
  clubinterest.forEach((clubs)=>{
    code+=clubs.html;
  });
  if(code){
  setTimeout(function(){
    what();
    function what(){
      document.getElementById('js_interested').innerHTML=code;
    };
 }, 100);
}
}

function availability(clubinterest,match,htmlcode){
  if(clubinterest){
    let search=clubinterest.find((x)=>  x.club===match.id) || [];
    if(search.length===0){
      clubinterest.push({club: match.id,html: htmlcode});
      localStorage.setItem('clubinterest', JSON.stringify(clubinterest));
      displayInterest(clubinterest);
    }else{
      displayInterest(clubinterest);
    }
  }
}

document.querySelectorAll('.uninterest').forEach((button)=>{
  button.addEventListener('click',(e) => {
    const classname= e.currentTarget.dataset.classname;
    if(clubinterest){
      let search=clubinterest.find((x)=>  x.club===classname) || [];
      //console.log(search);
      if(search.length!=0){
        const index= clubinterest.indexOf(search);
        //console.log(index);
        if (index > -1) { 
          clubinterest.splice(index, 1); 
          localStorage.setItem('clubinterest', JSON.stringify(clubinterest));
          displayInterest(clubinterest);
        }
    }
  }});
});
       
