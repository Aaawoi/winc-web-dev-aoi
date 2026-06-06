const word = () => {
    console.log('hello world')
}
word()

const userName = document.querySelector("#user-Name");
const skillslist = document.querySelector("#skills-list");

console.log(userName);
console.log(skillslist);

userName.textContent = "齊藤　碧海";
skillslist.textContent = "HTML,CSS, JavaScript","カメラ";
skills.forEach(skill =>{
    const item = document.createElement("div");
    TimeRanges.textContent = skill;
    skillslist.appendChild(item);

})