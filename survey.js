const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) : `, (name) => {
  console.log(`Your name is: ${name}`);

  rl.question(`What's an activity you like doing?: `, (activity) => {
    console.log(`Your favorite activity is: ${activity}`);

    rl.question(`What do you listen to while doing that?: `, (genre) => {
      console.log(`Your favorite genre is: ${genre}`);

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.): `, (meal) => {
        console.log(`Your favorite meal of the day is: ${meal}`);

        rl.question(`What's your favourite food?: `, (food) => {
          console.log(`Your favorite food: ${food}`);

          rl.question(`Which sport is your absolute favourite?: `, (sport) => {
            console.log(`Your favorite sport: ${sport}`);

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!: `, (talent) => {
              console.log(`Your talent is: ${talent}`);
              console.log(`Thank you for completing your profile, welcome to Linder!:p This is your profile!`);
              console.log(`${name} enjoys ${activity} and likes listening to ${genre}.\nTheir favorite meal is ${meal} and their favorite food is ${food}.\nThey like playing ${sport} and their talented at ${talent}!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
