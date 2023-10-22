"use strict";(self.webpackChunkportfolio_site=self.webpackChunkportfolio_site||[]).push([[362],{6362:function(e,t,a){a.r(t);var n=a(9236),o=a(6459),s=(a(2791),a(1523)),i=a(2068),r=a.n(i),l=a(8126),d=a(184),h=function(e){var t=Object.assign({},((0,o.Z)(e),e));return(0,d.jsx)(s.rU,(0,n.Z)({},t))},c=["Introduction","The Process","The Results","Reflection"];t.default=function(){return(0,d.jsx)(l.Z,{title:"Pedal",description:"3D Printed Assistive Pedals for Xbox Copilot",children:(0,d.jsxs)("article",{className:"post markdown",id:"pedal",children:[(0,d.jsx)("header",{children:(0,d.jsxs)("div",{className:"title",children:[(0,d.jsx)("h2",{"data-testid":"heading",children:(0,d.jsx)(s.rU,{to:"/portfolio/pedal",children:"3D Printed Assistive Pedals for Xbox Copilot"})}),(0,d.jsx)("div",{className:"link-container",children:c.map((function(e){return(0,d.jsx)("h4",{children:(0,d.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,d.jsx)(r(),{source:'\n[//]: # (Any new Main Titles need to be added in Pedal.js to be in the Table of Contents)\n\n<div class="link-to" id="introduction"></div>\n<div class="title"><h3>Introduction</h3></div>\n\n<img class="headerImage" src="/images/portfolio/Pedal/Pedal_Vector.svg" alt="alt text placeholder"/>\n\nThis was my Capstone Project for my graduate program in HCDE, to view other projects like this in the program, you can view [past capstone projects](https://hcde.washington.edu/cap/past-capstone-projects). I spent one credit in the Winter 2022 quarter conducting formative research and ideating to narrow in on what my focus would be, before hitting the ground running in Spring 2022 quarter for the 10 week project.\n\n\n# Goals\n\nMy goal for this project was to **enable people who end their gameplay sessions due to hand and wrist pain or discomfort to play video games for longer**. My focus on achieving this goal was twofold:\n1. To understand and learn some of the common causes of hand and wrist pain in gaming.\n2. Develop a prototype to help ease the barriers that some players face due to hand and wrist pain. \n\n\n# Motivations\n\nWith the growth of the gaming industry, it\u2019s becoming increasingly obvious that there are gaps in the affordances and considerations provided to people outside of the \u2018traditional\u2019 gaming demographics. One of these gaps is in physical input devices and how they can cause or exacerbate hand and wrist pain and discomfort. With the pressure and drive from within the industry to be more inclusive -  I believe there is an opportunity to take a closer look at different input devices and how different users can have a mismatch between the physical input devices and the comfort and safety of using them. \n<div></div>\nPain in the hands and/or wrists, as well as discomfort is only going to become more and more important as time goes on. However this problem isn\u2019t only a consideration for older gamers. People of all ages can experience hand and wrist pain or discomfort. It\u2019s important to consider all people, including those with disabilities that can lead to this type of discomfort or pain, in this project.\n\n<div class="link-to" id="the process"></div>\n<div class="title"><h3>The Process</h3></div>\n<img src="/images/portfolio/Pedal/Process.svg" alt="alt text placeholder" style="width:100%;max-width:100%"/>\n\n# Formative Research\n\nInitial research helped me to narrow down and scope my design and research questions. I began this project with an open ended research question: of players who play games and face barriers that end their gameplay sessions before they want to, why?\nI wanted to look for a barrier that I could center this project around. I was looking for:\n- Barriers that multiple people experienced in similar ways\n- Barriers that are a broad issues rather than being related to a specific game\n- Barriers that I could reasonably research and prototype solutions for in a 10 week timeframe\n\nI conducted a survey with the aim of gathering data to help categorize and investigate high level findings for different game session barriers. My goal was to help narrow down on a specific barrier to focus on for this project, and to establish a list of people that were interested in participating further.\n\nThe survey was primarily shared on twitter, and circulated amongst the gaming and disability community.  For context on the respondents, only 7 of the 105 participants responded that they never end gameplay sessions before they would like to. \n\n<img class="headerImage displayInLight" src="/images/portfolio/Pedal/Survey_Light.png" alt="alt text placeholder"/>\n<img class="headerImage displayInDark" src="/images/portfolio/Pedal/Survey_Dark.png" alt="alt text placeholder"/>\n\n\nThe most frequent cause that interrupted game sessions was \u201cExternal Factors, followed by Stress and Emotional Fatigue, and finally Physical Pain. Additional causes mapped closely to the main cause that people experienced.\n\nExternal factors was the only category that did not seem to be affected much by genre.  However, respondents did describe how games could provide affordances (e.g. \u201cpausing\u201d) to help keep the external factor from becoming something that ends the session. \n\nWhile this was a clear reason and driver of people not being able to accomplish their goals in gaming, it was not a good candidate for my project, due to the breadth of problem space, as well as a seeming lack of motivation to change how much this barrier impacts people\u2019s gaming session times. As one respondent put, *\u201cThere is no cure for being an adult.\u201d*\nEmotional Fatigue or Stress/Frustration is the next category that had the most responses. This is also the category where I saw the responses impacted by current discourse on social media. I think it\u2019s important to keep in mind the context when reviewing the data:\n- As I was conducting the survey, the game \u201cElden Ring,\u201d from the studio From Software recently launched. The genre of games that that studio creates are designed to be very difficult and have intentional barriers.  Many responses discussed the frustration that came from these intentional mechanics (e.g. lack of pause, punishing boss fights and input schemes).\n- The survey circulated to the community of the game \u201cHalo Infinite\u201d by 343 Industries (of which I am an employee of). The game is currently going through its own controversies on social media due to a perceived lack of content, progression system design, as well as frustrating bugs (desync optimization, etc), and toxic players.\n\nOf the responses in this category, the running theme is that game design can cause emotional fatigue or stress/frustration, and players have various coping mechanics like self care and medication (breaks, tea, petting animals, stress balls, marijuana, rest). While these are interesting insights, I decided not to pursue this category due to both the individualistic nature of experiences, and a lack of common themes that were not tied to specific games.\nThe next two categories that bubbled up were Physical Pain and Physical Discomfort. Of the responses for both categories, one of the themes that stood out to me was how often people mentioned their hands and wrists. Most of the responses to the \u201cPhysical Pain\u201d and \u201cPhysical Discomfort\u201d categories fell into three buckets: hand/wrist issues, back issues, and headaches, with the majority of respondents describing pain or discomfort in their hands and wrists. Of respondents who mentioned their hands and/or wrists,\nthe causes varied widely. Some respondents described pain that resulted directly from the game they were playing, while others had hand and wrist pain that was from a health factor other than gaming (Carpal Tunnel, Arthritis, etc)\nThe genre of games seemed to have an impact. Some features that are present in games could cause or contribute to the problem. For example, racing games often require press and holds.\nParticipants used coping mechanisms such as compression gloves, specific controllers, or game features (when available) like remappable controls. \nLooking back at my success criteria for finding a barrier to research and design for, I decided to pursue how I could tackle the barrier of pain and/or discomfort that people experienced in their hands and wrists while playing games.\n\n# Interviewing\n\nI interviewed 7 different survey respondents, 2 of whom requested written interviews. \n\n<img class="headerImage" src="/images/portfolio/Pedal/interview1.png" alt="alt text placeholder"/>\n\n\n# Ideation\n\n<img class="headerImage" src="/images/portfolio/Pedal/Affinity_Map.png" alt="alt text placeholder"/>\n\n\nThe main way I organized my learnings in the space was through affinity mapping.  Having a visual in a shared space like Figma made it accessible for me to bring in some of my interviewees to discuss some of the topics and brainstorm ideas. \n\n[//]: # (More Info)\n\n\n# Protoyping\n\n<img class="headerImage" src="/images/portfolio/Pedal/Proto1.jpg" alt="alt text placeholder"/>\n<img class="headerImage" src="/images/portfolio/Pedal/Proto2.jpg" alt="alt text placeholder"/>\n<img class="headerImage" src="/images/portfolio/Pedal/Printers.jpg" alt="alt text placeholder"/>\n<img class="headerImage" src="/images/portfolio/Pedal/Playtesting.jpg" alt="alt text placeholder"/>\n\nGathering actionable feedback without a high fidelity prototype was difficult. The durability of initial prototypes hindered use and feedback, so getting to a high fidelity prototype and iterating from there was important. \n\n\n\n<div class="link-to" id="the results"></div>\n<div class="title"><h3>The Results</h3></div>\n\n# Design and Tools \n\n<img class="displayInLight headerImage" src="/images/portfolio/Pedal_Light.jpg" alt="alt text placeholder"/>\n<img class="displayInDark headerImage" src="/images/portfolio/Pedal_Dark.jpg" alt="alt text placeholder"/>\n\n## Parametric Gears and Racks\n<img class="headerImage" src="/images/portfolio/Pedal/RhinoNodegraph.png" alt="alt text placeholder"/>\n<img class="headerImage" src="/images/portfolio/Pedal/RhinoGearRack.png" alt="alt text placeholder"/>\n\n## Tolerances and Fitment \n\nEach piece is modular and designed to \u201cfriction fit\u201d together, which required a lot of iteration in order to tune tolerances. Each piece needed to be designed to reduce or eliminate the amount of support needed, and oriented in the best direction to 3D print. \n\n<img class="headerImage" src="/images/portfolio/Pedal/InventorAssembly.png" alt="alt text placeholder"/>\n\n# Assembly Instructions and File Hosting\n\n<img class="headerImage displayInLight" style="width:50%;transform: translate(50%, 0);" src="/images/portfolio/Pedal/Printables_Logo_Light.svg" alt="alt text placeholder"/>\n<img class="headerImage displayInDark" style="width:50%;transform: translate(50%, 0);" src="/images/portfolio/Pedal/Printables_Logo_Dark.svg" alt="alt text placeholder"/>\n\n<img class="headerImage" src="/images/portfolio/Pedal/Pedal_Printables.jpg" alt="alt text placeholder"/>\n\nThe files are hosted free to download on [Printables.com](https://www.printables.com/model/220907-xboxpc-copilot-controller-pedals). The instructions for assembly were written up and went through several iterations based on feedback received from folks who attempted to 3d print the final version of the pedals. \n\n<img class="headerImage" src="/images/portfolio/Pedal/Pedal_Assembly.png" alt="alt text placeholder"/>\n\nThere are 30 individual parts that make up the final assembly.\n\n[//]: # (Add information about the controller project once Caleb ends up creating a video and hosting on his website)\n\n\n# Showcase\n\n<img class="headerImage displayInLight" src="/images/portfolio/Pedal/HCDEAward_Light.svg" alt="alt text placeholder"/>\n<img class="headerImage displayInDark" src="/images/portfolio/Pedal/HCDEAward_Dark.svg" alt="alt text placeholder"/>\n\n<img class="headerImage" src="/images/portfolio/Pedal/Showcase_Demo.jpg" alt="alt text placeholder"/>\n\nI brought the earlier prototypes as well as the final prototype to demo at the HCDE Capstone Showcase. It was great to engage with the larger community around my project.  I\'m honored to have received an honorable mention for "Excellence in Technology."\n\n[//]: # (More info here)\n\n<img class="headerImage" src="/images/portfolio/Pedal/showcase_me.jpeg" alt="alt text placeholder"/>\n\n\nI had the opportunity to work on my Visual Design skills when it came it to the poster displayed for the showcase. I shamelessly stole UW\'s purple, and attempted to balance between content and visuals, while letting the hero image of the pedals steal the show, since my design and outcome were much stronger than my focus on the research space.\n\n<div class="imgFlex">\n    <img src="/images/portfolio/Pedal/Poster.jpg" alt="alt text placeholder" style="width:45%;padding:1%">\n    <img src="/images/portfolio/Pedal/Poster_Layout.jpg" alt="alt text placeholder" style="width:45%;padding:1%">\n</div>\n\n\nSome themes from the feedback and comments I received at the showcase:\n- People were very surprised that you could use two controllers as one input stream.\n- Many (*I risk making assumptions about people here*) older folks were really excited to see the work done here and would tell me stories about pain that they experienced in their hands.\n\n\n# Shortcomings\n\n- The Design of the pedal requires able-bodied use of the feet or arms to use. \n- It can be difficult to use feet for fine motor skills or precise inputs. \n- It is designed to be used with the controller facing upside down from the user, which can cause confusion when the right pedal presses the left trigger, which is the opposite of the handheld controller (note, this can be fixed in software, but there is currently a known issue on the Xbox platform preventing this).\n\n# What\'s Next\n\nOne of the reasons I wanted to go after a 3D printed solution was due to the "maker" and "remix" culture that exists. For this particular model, I\'ll keep an eye out if I get any feedback, and see if anyone takes it upon themselves to improve what\'s there. More than just the model itself, I\'m hopping this piece can spark ideas and conversations around advocacy for hand and wrist pain in gaming, and bring more awareness to the space.\n\n\n\n<div class="link-to" id="reflection"></div>\n<div class="title"><h3>Reflection</h3></div>\n\n# Working Alone Sucks \n\nNormally, an HCDE Capstone Project is a team of four students. Due to some curriculum changes, I opted in to running this project solo as an independent study. I was simultaneously the PM, Researcher, Designer, Visual Designer, AND that teammate that misses half of the study groups. This was a really fun exercise in stretching a breadth of skillsets for me, however it was a real challenge to juggle all of the aspects of a project like this alone. I\'ve gained a huge appreciate for velocity and quality accelerators that working on a team can be. A big thank you goes out to the friends, classmates, and my instructors that gave me feedback and helped guide me on this project; I wasn\'t really going this alone, and couldn\'t have done it without them. \n\n# What Would I Change looking back\n\n- Spend more time documenting the outcomes of research and creating visual ways of communicating the research space.\n- Have a framework for usability evaluations.\n\n# What Will I change looking forward \n\n- Seek out working on teams with a breadth of skills to grow my own.\n- Improve the consistency of documentation and ways of sharing it with stakeholders.\n\n\n\n',renderers:{Link:h},escapeHtml:!1})]})})}}}]);
//# sourceMappingURL=362.c125ccd7.chunk.js.map