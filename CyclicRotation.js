function solution(a, k){
  
let len = a.length

let index = k % len
let newarr = []
if (index == 0 || a == false){
 newarr = a
} 
else{
 strarr = (a.slice(-index) + "," + a.slice(0,-index)).split(",")
newarr = strarr.map((i) => Number(i)) 
}
  
return newarr
}
