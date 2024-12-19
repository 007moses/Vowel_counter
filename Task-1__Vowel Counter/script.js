const btn = document.getElementById('btn')
const content = document.getElementById('content');
const InputBox= document.getElementById('InputBox');
const count = document.getElementById('result');
const vowelPara = document.getElementById('vowels')



InputBox.addEventListener('change',function InputBox(event){
    let para = event.target.value;
    content.innerText=para;
    
   
    let para1 = String(para);
    let splitted = para1.split("");
   
    let vowels ='aeiouAEIOU';
    let filteredVowels= splitted.filter(char=>
       vowels.includes((char))
    )
    vowelPara.innerText= filteredVowels.join(',');
    count.innerText= filteredVowels.length
   })













 

