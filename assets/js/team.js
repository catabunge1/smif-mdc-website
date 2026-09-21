// Photo assignments verified against the numbered roster.
var TEAM=[
  {group:"Board", people:[
    {name:"Carmen Hagitani", role:"Board", photo:"member-14.jpg", li:"https://www.linkedin.com/in/carmen-hagiiani-529674385"},
    {name:"Catalina Bunge", role:"Board", photo:"member-15.jpg", li:"https://www.linkedin.com/in/catalinabunge"},
    {name:"Daniel Belov-Khata", role:"Board", photo:"member-08.jpg", li:"https://www.linkedin.com/in/daniel-belov-khata/"},
    {name:"Vira Tsupriian", role:"Board", photo:"member-01.jpg", li:"https://www.linkedin.com/in/vira-tsupriian/"}
  ]},
  {group:"Members", people:[
    {name:"Alejandro Hernandez", role:"Healthcare Analyst", photo:"member-02.jpg", li:"https://www.linkedin.com/in/alejandro-hernandez-83a620397/"},
    {name:"Dennis Favier", role:"Artificial Intelligence Analyst", photo:"member-03.jpg", li:"https://www.linkedin.com/in/dennis-favier-8337973b7/"},
    {name:"Felipe Varallo", role:"Macroeconomic Analyst", photo:"member-11.jpg", li:"https://www.linkedin.com/in/felipe-salles-varallo/"},
    {name:"Joaquin Blanco", role:"Real Estate Analyst", photo:"member-07.jpg", li:"https://www.linkedin.com/in/joaquin-blanco-0360a1410/"},
    {name:"Noe TouBoul", role:"Financial Services Analyst", photo:"member-09.jpg", li:"https://www.linkedin.com/in/noetouboul/"},
    {name:"Osiris Guerra", role:"Senior Technology Analyst", photo:"member-05.jpg", li:"https://www.linkedin.com/in/osiris-guerra-2a58ba165/"},
    {name:"Simon Lancri", role:"Crypto Analyst", photo:"member-10.jpg", li:"https://www.linkedin.com/in/simon-lancri-a127b8433/"}
  ]},
  {group:"Alumni", people:[
    {name:"Andrew Esposito", role:"Alumni", photo:"member-12.jpg", li:"https://www.linkedin.com/in/andrew-esposito-fin/"},
    {name:"Covadonga Quintano", role:"Alumni", photo:"member-06.jpg", li:"https://www.linkedin.com/in/covadonga-quintano/"},
    {name:"Estefania Cuervo", role:"Alumni", photo:"member-13.jpg", li:"https://www.linkedin.com/in/estefania-cuervo/"}
  ]},
  {group:"Faculty Advisor", people:[
    {name:"Robert Foran", role:"Advisor", photo:"member-04.jpg", li:"https://www.linkedin.com/in/robert-jeff-foran-088103262/"}
  ]}
];
var liSvg='<svg viewBox="0 0 24 24"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.07 1.4-2.07 2.85V21H9z"/></svg>';
var mount=document.getElementById('teamMount');
if(mount){
  mount.innerHTML=TEAM.map(function(g){
    return '<div class="team-group reveal"><div class="gh"><h3>'+g.group+'</h3><span class="rule"></span><span class="cnt">'+g.people.length+' '+(g.people.length>1?'members':'member')+'</span></div><div class="grid-people">'+
    g.people.map(function(p){
      return '<article class="person"><div class="ph"><img src="assets/team/'+p.photo+'" alt="'+p.name+'" loading="lazy"></div><div class="meta"><h4>'+p.name+'</h4><div class="role">'+p.role+'</div>'+
      (p.li?'<a class="li" href="'+p.li+'" target="_blank" rel="noopener">'+liSvg+' LinkedIn</a>':'')+'</div></article>';
    }).join('')+'</div></div>';
  }).join('');
  document.querySelectorAll('.team-group.reveal').forEach(function(el){window.__io.observe(el)});
}
