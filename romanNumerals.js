function toRoman(num) {
  romanObj= {
    1000:'M',
    900:'DM',
    500:'D',
    400:'CD',
    100:'C',
    90:'LC',
    50:'L',
    40:'XL',
    10:'X',
    9:'IX',
    5:'V',
    4:'IV',
    1:'I',
  }

let ans = ''

  if (num >=1000){
    ans += romanObj[1000].repeat((Math.floor(num/1000)))
    num-= 1000 * (Math.floor(num/1000))
  }
  if(num >=900){
    ans += romanObj[100] + romanObj[1000]
    num-= 900
  }
  if(num >= 500){
    ans += romanObj[500].repeat((Math.floor(num/500)))
    num-= 500 * (Math.floor(num/500))
  }
  if(num >=400){
    ans += romanObj[100] + romanObj[500]
    num-= 400
  }
  if(num >= 100){
    ans += romanObj[100].repeat((Math.floor(num/100)))
    num-= 100 * (Math.floor(num/100))
  }
  if(num >=90){
    ans += romanObj[10] + romanObj[100]
    num-= 90
  }
  if(num >= 50){
    ans += romanObj[50].repeat((Math.floor(num/50)))
    num-= 50 * (Math.floor(num/50))
  }
  if(num >=40){
    ans += romanObj[10] + romanObj[50]
    num-= 40
  }
  if(num >= 10){
    ans += romanObj[10].repeat((Math.floor(num/10)))
    num-= 10 * (Math.floor(num/10))
  }
  if(num == 9){
    ans += romanObj[1] + romanObj[10]
    num-= 9
  }
  if(num >= 5){
    ans += romanObj[5].repeat((Math.floor(num/5)))
    num-= 5 * (Math.floor(num/5))
  }
  if(num == 4){
    ans += romanObj[1] + romanObj[5]
    num-= 4
  }
  if(num >= 1){
    ans += romanObj[1].repeat((Math.floor(num/1)))
    num-= 1 * (Math.floor(num/1))
  }
    return ans
}

function toRomanLazy(num) {

  romanObj= {
    1:'I',
    5:'V',
    10:'X',
    50:'L',
    100:'C',
    500:'D',
    1000:'M'
  }

  let ans = ''

  if (num >=1000){
    ans += romanObj[1000].repeat((Math.floor(num/1000)))
    num-= 1000 * (Math.floor(num/1000))
  }
  if(num >= 500){
    ans += romanObj[500].repeat((Math.floor(num/500)))
    num-= 500 * (Math.floor(num/500))
  }
  if(num >= 100){
    ans += romanObj[100].repeat((Math.floor(num/100)))
    num-= 100 * (Math.floor(num/100))
  }
  if(num >= 50){
    ans += romanObj[50].repeat((Math.floor(num/50)))
    num-= 50 * (Math.floor(num/50))
  }
  if(num >= 10){
    ans += romanObj[10].repeat((Math.floor(num/10)))
    num-= 10 * (Math.floor(num/10))
  }
  if(num >= 5){
    ans += romanObj[5].repeat((Math.floor(num/5)))
    num-= 5 * (Math.floor(num/5))
  }
  if(num >= 1){
    ans += romanObj[1].repeat((Math.floor(num/1)))
    num-= 1 * (Math.floor(num/1))
  }
    return ans

}

module.exports = { toRoman, toRomanLazy };
