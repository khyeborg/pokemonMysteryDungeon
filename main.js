let App = Vue.createApp({
    data() {
        return {
            completedTest: false,
            personalityScores: {
                "Hardy": 0, 
                "Docile": 0,
                "Brave": 0,
                "Jolly": 0,
                "Impish": 0,
                "Naive": 0,
                "Timid": 0,
                "Hasty": 0,
                "Sassy": 0,
                "Calm": 0,
                "Relaxed": 0,
                "Lonely": 0,
                "Quirky": 0,
                "Gender": 0
            },
            resultPokemon: {
                "Hardy": ["Charmander", "Pikachu"], 
                "Docile": ["Bulbasaur", "Chikorita"],
                "Brave": ["Machop", "Charmander"],
                "Jolly": ["Squirtle", "Totodile"],
                "Impish": ["Pikachu", "Cubone"],
                "Naive": ["Totodile", "Eevee"],
                "Timid": ["Cyndaquil", "Mudkip"],
                "Hasty": ["Torchic", "Skitty"],
                "Sassy": ["Treecko", "Torchic"],
                "Calm": ["Mudkip", "Bulbasaur"],
                "Relaxed": ["Psyduck", "Squirtle"],
                "Lonely": ["Cubone", "Psyduck"],
                "Quirky": ["Meowth", "Treecko"]
            },
            finalPokemon: "",
            questions: [
                [
                    {
                        text: "A test is coming up. How do you study for it?",
                        answers: ["Study hard.", "At the last second.", "Ignore it and play."],
                        outcomes: [ {"Hardy": 2}, {"Relaxed": 2}, {"Impish": 2} ]
                    }, 
                    {
                        text: "Can you focus on something you like?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Hardy": 2, "Docile": 1}, {"Quirky": 2} ]
                    },
                    {
                        text: "When the going gets tough, do you get going?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Hardy": 2, "Brave": 2}, {"Sassy": 2, "Quirky": 2} ]
                    },
                    {
                        text: "There is a bucket. If you put water in it, how high will you fill it?",
                        answers: ["Full.", "Half.", "A little."],
                        outcomes: [ {"Hardy": 2}, {"Calm": 2}, {"Quirky": 2} ]
                    }
                ], 



                [
                    {
                        text: " You are offered a choice of two gifts. Which one will you take?",
                        answers: ["Big box.", "Small box."],
                        outcomes: [ {"Docile": 2, "Naive": 1}, {"Timid": 2, "Calm": 1} ]
                    }, 
                    {
                        text: "You broke a rotten egg in your room! What will you do?",
                        answers: ["Open a window right away.", "Take a sniff first."],
                        outcomes: [ {"Docile": 2, "Hasty": 1}, {"Naive": 2, "Relaxed": 1} ]
                    },
                    {
                        text: "A friend brought over something you'd forgotten. How do you thank your friend?",
                        answers: ["Say thank you regularly.", " Say thanks with a joke.", "Say thanks, but be cool."],
                        outcomes: [ {"Docile": 2}, {"Naive": 1, "Lonely": 1}, {"Sassy": 2} ]
                    },
                    {
                        text: "There is a wallet at the side of a road.",
                        answers: ["Turn it in to the police!", "Yay! Yay!", "Is anyone watching...?"],
                        outcomes: [ {"Docile": 2}, {"Naive": 2}, {"Impish": 2} ]
                    }
                ], 



                [
                    {
                        text: "You're going bungee jumping for the first time. Since it's scary, you decide to test the jump with a doll... And the bungee cord snaps! Will you still try to make a jump anyway?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Brave": 3, "Impish": 1}, {"Docile": 2, "Timid": 1} ]
                    },
                    {
                        text: "There is an alien invasion! What will you do?",
                        answers: ["Fight.", "Run.", "Ignore it."],
                        outcomes: [ {"Brave": 4}, {"Timid": 2}, {"Relaxed": 2} ]
                    },
                    {
                        text: "There is a scream from behind a door! How will you react?",
                        answers: ["Yank open the door.", "Scream in unison."],
                        outcomes: [ {"Hardy": 1, "Brave": 2}, {"Naive": 2} ]
                    },
                    {
                        text: "A delinquent is hassling a girl on a busy city street! What will you do?",
                        answers: ["Help without hesitation.", "Help, even if scared.", "Call the police.", "Do nothing out of fear."],
                        outcomes: [ {"Brave": 3}, {"Hardy": 2, "Brave": 2}, {"Docile": 1, "Timid": 1, "Relaxed": 1}, {"Timid": 2} ]
                    }
                ],



                [
                    {
                        text: "Are you a cheerful personality?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Jolly": 2, "Naive": 1}, {"Sassy": 1, "Quirky": 1} ]
                    },
                    {
                        text: "Do you like to noisily enjoy yourself with others?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Jolly": 2, "Lonely": 1}, {"Timid": 1} ]
                    },
                    {
                        text: "It's the summer holidays! Where would you like to go?",
                        answers: ["The beach!", "Spas.", "Anywhere."],
                        outcomes: [ {"Jolly": 2}, {"Calm": 2}, {"Quirky": 2} ]
                    },
                    {
                        text: "A foreign person has started up a conversation with you. To be honest, you don't have a clue what this fellow is saying. How do you reply?",
                        answers: ["Haha! Yes. Very funny!", "Um... Could you say that again?", "Right... Well, I gotta go."],
                        outcomes: [ {"Jolly": 3}, {"Hardy": 2}, {"Timid": 2} ]
                    }
                ],



                [
                    {
                        text: "Have you ever made a pitfall trap?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Impish": 2, "Lonely": 1}, {"Calm": 2} ]
                    },
                    {
                        text: "Do you like pranks?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Impish": 2}, {"Docile": 1, "Relaxed": 1} ]
                    },
                    {
                        text: "Are there many things that you would like to do?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Hardy": 1, "Impish": 2}, {"Sassy": 1, "Quirky": 2} ]
                    },
                    {
                        text: "Your friend is being bullied! What do you do?",
                        answers: ["Face up to the bully.", "Caution the bully from afar.", "Heckle the bully from behind."],
                        outcomes: [ {"Brave": 3}, {"Timid": 2}, {"Impish": 2} ]
                    }
                ],



                [
                    {
                        text: "Do you like groan-inducing puns?",
                        answers: ["Love them!", "A little.", "Spare me."],
                        outcomes: [ {"Impish": 1, "Naive": 3}, {"Jolly": 2}, {"Sassy": 2} ]
                    },
                    {
                        text: "Do you tend to laugh a lot?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Docile": 1, "Naive": 2}, {"Quirky": 2} ]
                    },
                    {
                        text: "Do others often call you childish?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Jolly": 1, "Naive": 2}, {"Calm": 2} ]
                    },
                    {
                        text: "Do you like to imagine things for your amusement?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Naive": 2}, {"Hasty": 2} ]
                    }
                ],



                [
                    {
                        text: "A human hand extends out of a toilet! What would you do?",
                        answers: ["Scream and run.", "Close the lid without a word.", "Shake hands with it."],
                        outcomes: [ {"Timid": 2}, {"Hardy": 1, "Calm": 2}, {"Brave": 2, "Impish": 1, "Naive": 1} ]
                    },
                    {
                        text: "Grab any digit on your left hand with your right hand. Which digit did you grab?",
                        answers: ["Thumb.", "Index finger.", "Middle finger.", "Ring finger.", "Little finger."],
                        outcomes: [ {"Timid": 2}, {"Hasty": 2}, {"Jolly": 2}, {"Sassy": 2}, {"Lonely": 2} ]
                    },
                    {
                        text: "You are suddenly locked inside a pitch-black room! What do you do?",
                        answers: ["Kick the door.", "Cry.", "Clean it."],
                        outcomes: [ {"Timid": 2}, {"Lonely": 2}, {"Impish": 2, "Quirky": 1} ]
                    },
                    {
                        text: "Can you go into a haunted house?",
                        answers: ["No problem!", "Uh... N-no...", "With someone I like."],
                        outcomes: [ {"Brave": 3}, {"Timid": 2}, {"Sassy": 2} ]
                    }
                ],



                [
                    {
                        text: "You receive a gift! But you don't know what's in it. You're curious, so what do you do?",
                        answers: ["Open it now.", "Open it later.", "Get someone to open it."],
                        outcomes: [ {"Hasty": 2}, {"Calm": 2}, {"Timid": 2} ]
                    },
                    {
                        text: "You win a lottery! What do you do with the money?",
                        answers: ["Spend it now.", "Save it.", "Give it away."],
                        outcomes: [ {"Jolly": 2, "Hasty": 1}, {"Hardy": 1, "Calm": 1}, {"Brave": 2, "Quirky": 2} ]
                    },
                    {
                        text: "You come across a treasure chest! What do you do?",
                        answers: ["Open it right away!", "No... Could be a trap...", "It's going to be empty..."],
                        outcomes: [ {"Hasty": 2}, {"Timid": 2}, {"Sassy": 2} ]
                    },
                    {
                        text: "Your friend fails to show up for a meeting at the promised time. What do you do?",
                        answers: ["Become irritated.", "Wait patiently.", "Get angry and bail."],
                        outcomes: [ {"Docile": 1, "Hasty": 2}, {"Relaxed": 2}, {"Hasty": 3} ]
                    }
                ],



                [
                    {
                        text: "Your country's leader is in front of you. How do you speak to him or her?",
                        answers: ["Speak calmly.", "Speak nervously.", "WHATEVER!!"],
                        outcomes: [ {"Hardy": 2}, {"Docile": 2}, {"Sassy": 2} ]
                    },
                    {
                        text: "Do others tell you to watch what you say?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Impish": 1, "Sassy": 2}, {"Calm": 2} ]
                    },
                    {
                        text: "Do you think you are cool? Be honest.",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Sassy": 2}, {"Relaxed": 2} ]
                    },
                    {
                        text: "Can you sincerely thank someone when you feel grateful?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Docile": 2, "Calm": 1}, {"Sassy": 2, "Quirky": 1} ]
                    }
                ],



                [
                    {
                        text: "Do you occasionally consider yourself dull and overly cautious?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Calm": 2, "Lonely": 1}, {"Hardy": 2} ]
                    },
                    {
                        text: "Do you dream of lounging around idly without much excitement?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Calm": 2}, {"Impish": 2} ]
                    },
                    {
                        text: "Do you like to fight?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Impish": 1, "Timid": 2}, {"Calm": 2, "Lonely": 1} ]
                    },
                    {
                        text: "Do you often yawn?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Calm": 2, "Relaxed": 1}, {"Hardy": 1, "Hasty": 2} ]
                    }
                ],



                [
                    {
                        text: "Are you often late for school or meetings?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Sassy": 1, "Relaxed": 2}, {"Hardy": 2, "Hasty": 1} ]
                    },
                    {
                        text: "Do you get the feeling that you've slowed down lately?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Relaxed": 2}, {"Impish": 1, "Hasty": 2} ]
                    },
                    {
                        text: "It is a pleasant day at the beach. How do you feel?",
                        answers: ["This feels great!", "Snore...", "I want to go home soon!"],
                        outcomes: [ {"Jolly": 2}, {"Relaxed": 2}, {"Hasty": 2} ]
                    },
                    {
                        text: "Do you fall asleep without noticing?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Calm": 1, "Relaxed": 2}, {"Hardy": 2} ]
                    }
                ],



                [
                    {
                        text: "Do you feel lonesome when you are alone?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Timid": 1, "Lonely": 2}, {"Sassy": 2} ]
                    },
                    {
                        text: "Do you hate to be the last person to leave class at the end of a school day?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Timid": 1, "Lonely": 2}, {"Brave": 3, "Relaxed": 1} ]
                    },
                    {
                        text: "What do you do with your room's light when you're going to bed at night?",
                        answers: ["Leave it on.", "Turn it off."],
                        outcomes: [ {"Timid": 1, "Lonely": 2}, {"Calm": 2} ]
                    },
                    {
                        text: "It's a weekend, but no one will play with you... What do you do?",
                        answers: ["Go on a trip.", "Hang around vacantly.", "Huddle in a corner."],
                        outcomes: [ {"Jolly": 1, "Lonely": 1}, {"Calm": 1, "Relaxed": 2}, {"Timid": 1, "Lonely": 3} ]
                    }
                ],



                [
                    {
                        text: "Do you sometimes run out of things to do all of a sudden?",
                        answers: ["Yes.", "No."],
                        outcomes: [ {"Quirky": 2}, {"Hardy": 2} ]
                    },
                    {
                        text: "How quickly do you respond to an e-mail?",
                        answers: ["Reply right away.", "May reply, may not.", "Too much trouble."],
                        outcomes: [ {"Hardy": 1, "Hasty": 1}, {"Quirky": 2}, {"Sassy": 2} ]
                    },
                    {
                        text: "There is a person you like... But there's no opportunity to get close. What do you do?",
                        answers: ["Bravely declare my love.", "Might say hello...", "Pull a prank to get attention.", "Look from afar."],
                        outcomes: [ {"Hardy": 1, "Brave": 3}, {"Quirky": 2}, {"Impish": 2}, {"Timid": 2} ]
                    },
                    {
                        text: "The road forks to the right and left. You are told there is a treasure on the right side. What do you do?",
                        answers: ["Instantly go right.", "It's a trap! Go left.", "Choose either side."],
                        outcomes: [ {"Docile": 2}, {"Sassy": 2}, {"Quirky": 2} ]
                    }
                ],



                [
                    {
                        text: "On vacation outings, you want to...",
                        answers: ["Go alone.", "Go with others."],
                        outcomes: [ {"Hasty": 1, "Quirky": 1}, {"Jolly": 1, "Lonely": 1} ]
                    },
                    {
                        text: "It's the summer festival! Do you like carnivals?",
                        answers: ["Love them!", "Don't care."],
                        outcomes: [ {"Jolly": 2}, {"Sassy": 1, "Quirky": 1} ]
                    },
                    {
                        text: "Somebody calls you \"weird but funny.\" How does that make you feel?",
                        answers: ["Happy!", "Not happy."],
                        outcomes: [ {"Naive": 1, "Lonely": 1}, {"Hasty": 1, "Sassy": 1} ]
                    }
                ],



                [
                    {
                        text: "Are you a boy or a girl?",
                        answers: ["Boy.", "Girl."],
                        outcomes: [ {"Gender": 0}, {"Gender": 1} ]
                    }
                ]
            ]
        }
    },
    computed: {

    },
    methods: {
        answerSelected2(index, currentQuestion, currentRandomNumber) {
            let tempOutcome = this.questions[currentQuestion][currentRandomNumber].outcomes[index];
            let tempOutcomeKeys = Object.keys(tempOutcome);
            let tempOutcomeValues = Object.values(tempOutcome);

            for (let i = 0; i < tempOutcomeKeys.length; i++) {
                // console.log(tempOutcomeKeys[i], tempOutcomeValues[i])
                this.personalityScores[tempOutcomeKeys[i]] += tempOutcomeValues[i];
            }

            // console.log(this.personalityScores)
        }, 
        answerSelectedFinal(index, currentQuestion, currentRandomNumber) {
            let tempOutcome = this.questions[currentQuestion][currentRandomNumber].outcomes[index];
            let tempOutcomeKeys = Object.keys(tempOutcome);
            let tempOutcomeValues = Object.values(tempOutcome);

            for (let i = 0; i < tempOutcomeKeys.length; i++) {
                this.personalityScores[tempOutcomeKeys[i]] = tempOutcomeValues[i];
            }

            console.log(this.personalityScores);

            this.determinePokemon();
        },
        determinePokemon() {
            let personalityScoresArray = Object.keys(this.personalityScores);
            let personalityScoresValueArray = Object.values(this.personalityScores);
            let maxValue = 0;
            let personality = [];
            let gender = 0;

            for (let i = 0; i < personalityScoresArray.length - 1; i++) {
                if (personalityScoresValueArray[i] > maxValue) {
                    personality = [personalityScoresArray[i]];
                    maxValue = personalityScoresValueArray[i];
                }
            }

            // more than 1 high score? 
            for (let i = 0; i < personalityScoresArray.length - 1; i++) {
                if (personalityScoresValueArray[i] == maxValue) {
                    personality.push(personalityScoresArray[i]);
                }
            }

            if (this.personalityScores["Gender"] == 0) {
                gender = 0;
            }

            else {
                gender = 1;
            }
            
            this.finalPokemon = this.resultPokemon[personality[Math.floor(Math.random() * personality.length)]][gender];
            this.completedTest = true;
            console.log(this.finalPokemon);
        }
    }
});

App.component("question", {
    props:["questions"],
    data() {
        return {
            questionsNumbers: [],
            currentQuestion: 0,
            currentRandomNumber: 0
        }
    },
    created() {
        let questionNumberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        
        while (this.questionsNumbers.length < 8) {
            let tempRand = Math.floor(Math.random() * questionNumberArray.length);
            this.questionsNumbers.push(questionNumberArray[tempRand]);

            questionNumberArray.splice(tempRand, 1);
        }

        this.questionsNumbers.push(14);
    },
    template: `<div class="question_big_div">
        <div class="question_div">{{ computeQuestion }}</div>
    </div>

    <div class="answer_big_div">
        <answer v-for="(answer, index) in questions[questionsNumbers[currentQuestion]][currentRandomNumber].answers" 
                :answer="answer"
                :index="index" 
                :currentQuestion="questionsNumbers[currentQuestion]"
                @selected-answer="answerSelected">
        </answer>
    </div>`,
    computed: {
        computeQuestion() {
            this.computeRandomNumber(Object.keys(this.questions[this.questionsNumbers[this.currentQuestion]]).length);
            
            let question = this.questions[this.questionsNumbers[this.currentQuestion]][this.currentRandomNumber].text;
            return question;
        }
    },
    methods: {
        computeRandomNumber(num) {
            this.currentRandomNumber = Math.floor(Math.random() * num);
        },
        answerSelected(index) {
            // when there are questions remaining
            if (this.currentQuestion < 8) {
                this.$emit("selected-answer2", index, this.questionsNumbers[this.currentQuestion], this.currentRandomNumber);
                this.currentQuestion++;
            }

            // when it is the last question
            else {
                this.$emit("selected-answer-final", index, this.questionsNumbers[this.currentQuestion], this.currentRandomNumber);
            }
        }
    }
});

App.component("answer", {
    props:["answer", "index"],
    data() {
        return {

        }
    },
    template: `<div class="answer_div" @click="registerAnswer">{{ answer }}</div>`,
    methods: {
        registerAnswer() {
            this.$emit("selected-answer", this.index);
        }
    }
});

App.component("result", {
    props:["pokemon"],
    data() {
        return {

        }
    },
    template: `<div>
        {{ pokemon }}
        <img :src="computeImage">
    </div>
    `,
    computed: {
        computeImage() {
            console.log("images/" + this.pokemon + ".png")
            return "images/" + this.pokemon + ".png";
        }
    },
    methods: {

    }
});
  
App.mount("#app");