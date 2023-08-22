let total = 0
function handleClick1(target){
   const itemsName = (document.getElementById('card-1').innerText)
   console.log(itemsName)
   console.log(itemsName)
   const li = document.createElement('li')
   li.innerText = itemsName
   
   const section = document.getElementById('section')
   section.appendChild(li)
   const price = document.getElementById('price1').innerText
  
    total = parseFloat(total)+parseFloat(price)
   document.getElementById('total').innerText = total


}

function handleClick2(target){
   const itemsName = (document.getElementById('card-2').innerText)
   console.log(itemsName)
   const li = document.createElement('li')
   li.innerText = itemsName
   
   const section = document.getElementById('section')
   section.appendChild(li)
   const price = document.getElementById('price2').innerText
  
    total = parseFloat(total)+parseFloat(price)
   document.getElementById('total').innerText = total

}
 
function handleClick3(target){
   const itemsName = (document.getElementById('card-3').innerText)
//    console.log(itemsName)
   const li = document.createElement('li')
   li.innerText = itemsName
   
   const section = document.getElementById('section')
   section.appendChild(li)
   const price = document.getElementById('price3').innerText
  
    total = parseFloat(total)+parseFloat(price)
   document.getElementById('total').innerText = total

}
 
function handleClick4(target){
   const itemsName = (document.getElementById('card-4').innerText)
//    console.log(itemsName)
   const li = document.createElement('li')
   li.innerText = itemsName
   
   const section = document.getElementById('section')
   section.appendChild(li)
   const price = document.getElementById('price4').innerText
  
    total = parseFloat(total)+parseFloat(price)
   document.getElementById('total').innerText = total

}
function handleClick5(target){
   const itemsName = (document.getElementById('card-5').innerText)
//    console.log(itemsName)
   const li = document.createElement('li')
   li.innerText = itemsName
   
   const section = document.getElementById('section')
   section.appendChild(li)
   const price = document.getElementById('price5').innerText
  
    total = parseFloat(total)+parseFloat(price)
   document.getElementById('total').innerText = total

}
function handleClick6(target){
   const itemsName = (document.getElementById('card-6').innerText)

   const li = document.createElement('li')
   li.innerText = itemsName
   
   const section = document.getElementById('section')
   section.appendChild(li)
   const price = document.getElementById('price6').innerText
  
    total = parseFloat(total)+parseFloat(price)
   document.getElementById('total').innerText = total

}
 
  


