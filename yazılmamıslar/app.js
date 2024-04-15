// 1. Her defe ferqli rengde ekrana cixmali (console.log(${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye);)


setInterval (()=>{
 let brithday = new Date("15-04-2024");
  let now= new Date();
  
 let between = now - brithday;
 let gun = Math.trunc(between / (1000 * 60 * 60 * 24));
 let saniye = Math.trunc(between / 1000) % 60;
 let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
 let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
 let r = Math.floor(Math.random() * 256);
 let g = Math.floor(Math.random() * 256);
 let b = Math.floor(Math.random() * 256);
 let color = Math.floor(Math.random() * 1000000);

 console.log(
   `%c${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`,`color: #${color}`
  );

}, 1000);


// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.
let students = [
    {
      name: "Sevinc",
      surname: "Zülfüqarlı",
      age: 20,
      
    },
    {
      name: "Nurhan",
      surname: "Hüseynov",
      age: 20,
    },
    {
      name: "Sona",
      surname: "Recebova",
      age: 20,
    },
    {
      name: "ilhan",
      surname: "Bayramlı",
      age: 20,
    },
    {
      name: "Elnar",
      surname: "Memmedova",
      age: 20,
    },]
console.log(students);
let search = prompt("Search: ").toLowerCase();
let student = students.find( (user)=>user.name=== search) 

// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
//Ornek: hello
//h
//he
//hel
//hell
//hello
//hell
//hel
//he
//h


let söz =prompt ("Sözü daxil et: ");
let i = 0
let direction= true

let interval= setInterval(()=>{
  if(i===söz.length){
    direction=false
 }
  if(i==0){
   direction=true
 }
 if(direction){
   i++;
 }else{
    i--;
   if (i ===1){
     clearInterval(interval);
   }
 }
  console.log(söz.slice(0,i));
  ;100})

// 4. toLocaleDateString(); ->arashdir

//toLocaleDateString() Numuneler metodu yerli konvensiyalardan 
//istifadə edərək tarix obyektinin tarixini (vaxtını deyil)
//sətir kimi qaytarır.

