 let userScore = 0;
    let computerScore = 0;
    let userChoice;
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = { 'rock': '👊🏾', 'paper': '📝', 'scissors': '✂️' };

    function playGame() {
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      let result = '';

      if (userChoice === computerChoice) {
        result = `It's a tie! 🤝's a tie! 🤝`;
      } else if ((userChoice === 'rock' && computerChoice === 'scissors') || 
                 (userChoice === 'paper' && computerChoice === 'rock') || 
                 (userChoice === 'scissors' && computerChoice === 'paper')) {
        result = `You win! 🎉 You chose ${emojis[userChoice]} and computer chose ${emojis[computerChoice]}.`;
        userScore++;
      } else {
        result = `Computer wins! 🤖 Computer chose ${emojis[computerChoice]} and you chose ${emojis[userChoice]}.`;
        computerScore++;
      }

      document.getElementById('result').innerHTML = result;
      document.getElementById('score').innerHTML = `Score: You - ${userScore}, Computer - ${computerScore}`;
    }