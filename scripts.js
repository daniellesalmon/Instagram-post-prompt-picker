document.addEventListener("DOMContentLoaded", function () {
  let prompts = [];

  // Load prompts from JSON file
  fetch('prompts.json')
      .then(response => response.json())
      .then(data => {
          prompts = data;
      });

  document.getElementById("pickButton").addEventListener("click", function () {
      if (prompts.length > 0) {
          const randomIndex = Math.floor(Math.random() * prompts.length);
          document.getElementById("result").innerText = prompts[randomIndex];
      } else {
          document.getElementById("result").innerText = "No prompts available!";
      }
  });
});


// // Pre-defined list of social media post prompts
// const prompts = [
//     "Share your favorite quote of the day.",
//     "Post a behind-the-scenes look at your creative process.",
//     "Highlight a customer success story.",
//     "What inspires you in your work?",
//     "Share a quick tip for your audience.",
//     "Post a throwback to your early days in business.",
//     "Give your audience a fun fact about your brand."
//   ];
  
//   // Function to randomly select and display a prompt
//   function getRandomPrompt() {
//     const randomIndex = Math.floor(Math.random() * prompts.length);
//     document.getElementById("display-result").textContent = prompts[randomIndex];
//   }
  
//   // Event listener for the button
//   document.getElementById("randomize-button").addEventListener("click", getRandomPrompt);
  