const cards=[
{module:'焦虑拆解',title:'焦虑五分法',prompt:'我现在很焦虑，请不要急着安慰我。请帮我把我的情况拆成：1. 已经发生的事实；2. 我脑子里的想象；3. 我真正担心的事情；4. 我能控制的部分；5. 我现在可以做的一个10分钟内小行动。请用清晰、冷静、具体的方式回答。'},
{module:'焦虑拆解',title:'事实 vs 脑补',prompt:'请帮我分析这件事里，哪些是已经发生的事实，哪些是我脑子里推演出来的想象。最后请告诉我：现在最值得处理的一件小事是什么。'},
{module:'焦虑拆解',title:'停止灾难化',prompt:'我好像在把事情想得越来越糟。请帮我识别其中的灾难化想法，并用更客观、可行动的方式重新表达。'},
{module:'内耗停止',title:'停止反复想',prompt:'我一直在反复想同一件事。请帮我拆解：我在反复想什么、我真正害怕什么、这件事现在能不能解决、如果能解决第一步是什么、如果不能解决我该如何先放下。'},
{module:'内耗停止',title:'事实与解读',prompt:'请帮我区分这件事中的事实和我的过度解读。请用表格输出：事实、我的解读、其他可能解释、我可以采取的行动。'},
{module:'内耗停止',title:'打断循环',prompt:'请给我一个停止反复思考的步骤，只需要今晚能用。要求简单，不要大道理。'},
{module:'睡前整理',title:'睡前收尾',prompt:'我现在睡前情绪很混乱，请帮我做一个整理：1. 今天发生了什么重要事情；2. 我现在最在意的点是什么；3. 哪些是事实，哪些是我的想象；4. 明天最重要的一件事是什么；5. 请帮我把大脑清空，让我可以安心睡觉。请用清晰结构回答，不要安慰，只要分析。'},
{module:'睡前整理',title:'三句话日记',prompt:'请帮我把今天整理成三句话：今天发生了什么；我现在最担心什么；明天先做哪一件小事。语言要简单、平静。'},
{module:'睡前整理',title:'睡前清空',prompt:'请帮我把现在脑子里的想法按：待办、担心、情绪、明天再说，四类整理出来。最后请给我一句结束今天的话。'},
{module:'拖延拆解',title:'10分钟启动',prompt:'我正在拖延一个任务。请帮我把它拆成10分钟内可以完成的第一步。要求小到不能再小。'},
{module:'拖延拆解',title:'找出卡点',prompt:'我知道该做这件事，但就是不想开始。请帮我分析我可能在害怕什么、抗拒什么、第一步可以如何降低难度。'},
{module:'拖延拆解',title:'降低任务难度',prompt:'请把这个任务降低到一个普通人在低能量状态下也能开始的版本，只保留最关键的一步。'},
{module:'关系情绪',title:'关系不舒服',prompt:'我在人际关系中感到不舒服。请帮我拆解：对方做了什么、我的感受是什么、我真正需要什么、我可以怎么表达。'},
{module:'关系情绪',title:'表达需求',prompt:'请帮我把我的感受和需求整理成一段清晰、不攻击人的表达。结构：我观察到、我感受到、我希望。'},
{module:'关系情绪',title:'建立边界',prompt:'我想建立一个健康边界，但不想把关系弄僵。请帮我写三种说法：温和版、直接版、坚定版。'},
{module:'自责修复',title:'停止攻击自己',prompt:'我现在很自责。请帮我区分：我真正需要负责的部分、我过度攻击自己的部分、我还能做的修复行动。'},
{module:'自责修复',title:'责任分清',prompt:'请帮我把这件事的责任拆开：我的责任、他人的责任、环境因素、我下一步可以改进的地方。'},
{module:'失恋整理',title:'失恋反复想起对方',prompt:'我最近失恋了，总是反复想起对方。请帮我整理：我真正难受的点是什么、哪些是事实、哪些是想象、我现在最需要照顾的情绪是什么、接下来10分钟我能做什么。'},
{module:'失恋整理',title:'停止反复回看聊天',prompt:'我总想回看聊天记录或关注对方动态。请帮我分析我在寻找什么，并给我一个今天能执行的替代动作。'},
{module:'失恋整理',title:'分清想念和不甘心',prompt:'请帮我区分：我是真的想念对方，还是不甘心、失落、习惯被打断。最后给我一个让自己稳定下来的小步骤。'}
];
const scenario=document.getElementById('scenario');
const situation=document.getElementById('situation');
const result=document.getElementById('result');
const cardGrid=document.getElementById('cardGrid');
cards.forEach((c,i)=>{const opt=document.createElement('option');opt.value=i;opt.textContent=`${c.module}｜${c.title}`;scenario.appendChild(opt);});
function build(){const c=cards[Number(scenario.value)||0];const text=situation.value.trim();result.textContent=`${c.prompt}\n\n我的具体情况：${text||'（在这里补充你的真实情况）'}\n\n请先帮我拆清楚，不要空泛安慰。最后给我一个10分钟内能做的小行动。`;}
document.getElementById('generate').onclick=build;
document.getElementById('copy').onclick=()=>navigator.clipboard.writeText(result.textContent).then(()=>{document.getElementById('copy').textContent='已复制';setTimeout(()=>document.getElementById('copy').textContent='复制提示词',1200)});
cards.forEach(c=>{const div=document.createElement('div');div.className='card';div.innerHTML=`<div class="module">${c.module}</div><h3>${c.title}</h3><p>${c.prompt}</p><button class="copy-card">复制</button>`;div.querySelector('button').onclick=()=>navigator.clipboard.writeText(c.prompt).then(()=>{div.querySelector('button').textContent='已复制';setTimeout(()=>div.querySelector('button').textContent='复制',1200)});cardGrid.appendChild(div);});
build();