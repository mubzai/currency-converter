import inquirer from "inquirer"


const currency:any = { 
                   USD:1,
                   EUR:0.91,
                   GBP:0.76,
                   INR:74.57,
                   PKR:280                
                }  


let user_anwser =await inquirer.prompt(
              [
               {
                 name: "from",
                 message :"Enter From Currency", 
                type:"list",
                choices:["USD","EUR","GBP","INR","PKR"]
                },
                {
                    name: "to",
                    message :"Enter To Currency", 
                   type:"list",
                   choices:["USD","EUR","GBP","INR","PKR"]
                   },            
                   {
                    name: "Amount",
                   message :"Enter Your Amount", 
                  type:"number"
                }
            ]        
             
            )                

            let fromAmount = currency [user_anwser.from]
            let toAmount = currency [user_anwser.to]
            let Amount = user_anwser.Amount
            let baseAmount = Amount/fromAmount
            let convertedAmount= baseAmount*toAmount
            console.log(convertedAmount);
            
            
            