
input = document.getElementById("input")
runBtn = document.getElementById('runBtn')
result = document.getElementById('result')


runBtn.addEventListener('click',()=>{
        input = input.value
        for(let i in input){
            if(input[i]==="+"){
                var ans = input.split('+')
                result.innerHTML = parseInt(ans[0])+parseInt(ans[1])
            }
            else if(input[i]==="-"){
                var ans = input.split('-')
                result.innerHTML = parseInt(ans[0])-parseInt(ans[1])
            }
            else if(input[i]==="*"){
                var ans = input.split('*')
                result.innerHTML = parseInt(ans[0])*parseInt(ans[1])
            }
            else if(input[i]==="/"){
                var ans = input.split('/')
                result.innerHTML = parseInt(ans[0])/parseInt(ans[1])
            }
        }
})





