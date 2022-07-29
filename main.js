document.querySelector('.hit').addEventListener('click', getFetch)

document.querySelector("#stand").addEventListener('click', standOne)

//document.querySelector('#stand').addEventListener('click', standFunc)

document.querySelector('#reset').addEventListener('click', reset)

document.querySelector('#reset').addEventListener('click', getFetchReset)




var image_x = document.getElementById('#pHand');

var playerScore = []
var pScore = 0

var dealerScore = []
var dScore = 0

function reset(){

const handDiv = document.querySelector('#pHand')
const dealDiv = document.querySelector('#deal')

 while(handDiv.children.length > 0) {
   handDiv.children[0].remove(),
   document.getElementById('pnum').innerHTML = 0
 }

 while(dealDiv.children.length >0){
  dealDiv.children[0].remove(),
  document.getElementById('Dnum').innerHTML = 0
 }

 playerScore =[], pScore=0, dealerScore =[], dScore =0

    }


function getFetch(){
  const choice = document.querySelector('input')
  const url = "https://www.deckofcardsapi.com/api/deck/e4m688fx5fta/draw/?count=1"
 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.cards[0].image)
        var img = document.createElement('img');
        img.src = data.cards[0].image
        var src = document.getElementById("pHand")
        src.appendChild(img)
        playerScore.push(data.cards[0].value)
        console.log(playerScore)

        pScore += [data.cards[0].value].map(el=> (el==='ACE' && pScore >10)? 1: el==='ACE'? 11:el==='JACK'? 10 : el ==='KING'? 10: el ==='QUEEN'? 10: Number(el.replace(/[^0-9]/g, ''))).reduce((a,b)=>a+b)
        document.getElementById('pnum').innerHTML = pScore;

        console.log(pScore)
        // if((playerScore[0] ==="ACE")||(playerScore[1]==='ACE')){
        // pScore += -10

         
        
    if(pScore >21){
      setTimeout(() => { alert('Bust, Dealer WINS!') }, 400)
      setTimeout(() =>{ reset()}, 2000)
      
    }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

    }

    




    function getFetchReset(){

    //  reset()


      const choice = document.querySelector('input')
  const url = "https://www.deckofcardsapi.com/api/deck/e4m688fx5fta/draw/?count=3"

  const url2 = "https://www.deckofcardsapi.com/api/deck/e4m688fx5fta/shuffle/"
  // const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6"
  fetch(url2)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)}),

    

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.cards[0].image)
        var img = document.createElement('img');
        img.src = data.cards[0].image
        var src = document.getElementById("pHand")
        src.appendChild(img)
        playerScore=[]
        playerScore.push(data.cards[0].value)


        var img = document.createElement('img');
        img.src = data.cards[1].image
        var src = document.getElementById("pHand")
        src.appendChild(img)
        playerScore.push(data.cards[1].value)
        pScore += playerScore.map(el=> (el==='ACE' && pScore >10)? 1: el==='ACE'? 11: el==='JACK'? 10 : el ==='KING'? 10: el ==='QUEEN'? 10: Number(el.replace(/[^0-9]/g, ''))).reduce((a,b)=>a+b)
         document.getElementById('pnum').innerHTML = pScore;




        var img = document.createElement('img');
        img.src = data.cards[2].image
        var src = document.getElementById("deal")
        src.appendChild(img)
        dealerScore.push(data.cards[2].value)
        dScore += dealerScore.map(el=>(el==='ACE' && dScore >10)? 1: el==='ACE'? 11: el==='JACK'? 10 : el ==='KING'? 10: el ==='QUEEN'? 10: Number(el.replace(/[^0-9]/g, ''))).reduce((a,b)=>a+b)

        

        // const element = document.getElementById('pHand');

        // element?.remove(); 

        // var image_x = document.getElementById('pHand');
        // image_x.parentNode.removeChild(image_x);
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

    }


    
function standFunc(){
  const choice = document.querySelector('input')
  const url = "https://www.deckofcardsapi.com/api/deck/e4m688fx5fta/draw/?count=1"
 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.cards[0].image)

 
        var img = document.createElement('img');
        img.src = data.cards[0].image
        var src = document.getElementById("deal")
        src.appendChild(img)
        dealerScore.push(data.cards[0].value)
        dScore = dealerScore.map(el=>(el==='ACE' && dScore >10)? 1: el==='ACE'? 11: el==='JACK'? 10 : el ==='KING'? 10: el ==='QUEEN'? 10: Number(el.replace(/[^0-9]/g, ''))).reduce((a,b)=>a+b)

        document.getElementById('Dnum').innerHTML = dScore
        //setTimeout(() =>{ standFunc()}, 3000)
      
     

      if((dScore <= 17)&&(dScore<pScore)){
        img.src = data.cards[0].image
        var src = document.getElementById("deal")
        src.appendChild(img)
        dealerScore.push(data.cards[0].value)
        dScore = dealerScore.map(el=>(el==='ACE' && dScore >10)? 1: el==='ACE'? 11: el==='JACK'? 10 : el ==='KING'? 10: el ==='QUEEN'? 10: Number(el.replace(/[^0-9]/g, ''))).reduce((a,b)=>a+b)
        setTimeout(() =>{ standFunc()}, 400)
        

       
      }else if(dScore>21){
        setTimeout(() => { alert('Bust, Player WINS!') }, 400),
        setTimeout(() =>{ reset()}, 3000)
       
       }else if((dScore > pScore) && ( dScore <=21 )){     
       setTimeout(() => { alert('Dealer WINS!') }, 400),
       setTimeout(() =>{ reset()}, 3000)

       }else if(dScore===pScore){
        setTimeout(() => { alert('Tie! Try again!') }, 400),
        setTimeout(() =>{ reset()}, 3000)
       }else if((dScore<pScore)&&(pScore<=21)){
        setTimeout(() => { alert('Player WINS!') }, 400),
        setTimeout(() =>{ reset()}, 3000)
       
      }
    }
)}


  function standOne(){
    const choice = document.querySelector('input')
    const url = "https://www.deckofcardsapi.com/api/deck/e4m688fx5fta/draw/?count=1"
   
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data.cards[0].image)
  
  var img = document.createElement('img');
          img.src = data.cards[0].image
          var src = document.getElementById("deal")
          src.appendChild(img)
          dealerScore.push(data.cards[0].value)
          dScore = dealerScore.map(el=>(el==='ACE' && dScore >10)? 1: el==='ACE'? 11: el==='JACK'? 10 : el ==='KING'? 10: el ==='QUEEN'? 10: Number(el.replace(/[^0-9]/g, ''))).reduce((a,b)=>a+b)
  
          document.getElementById('Dnum').innerHTML = dScore;

          if(dScore>pScore){
            setTimeout(() => { alert('Dealer WINS!') }, 400),
            setTimeout(() =>{ reset()}, 3000)


          }else if(dScore===pScore){
            setTimeout(() => { alert('Tie! Try again!') }, 400),
            setTimeout(() =>{ reset()}, 3000)

          }else if((dScore<=pScore)&&(dScore<17)){
            setTimeout(() =>{ standFunc()}, 1000)
          }else if((dScore<pScore)&&(dScore>=17)){
            setTimeout(() => { alert('Player WINS!') }, 400),
            setTimeout(() =>{ reset()}, 3000) 
          }
        
        })
      }


