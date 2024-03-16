# Web Development Project 3 - Software development Flashcard Set With Guessing feature!
Submitted by: Jaime Gomez

This web app: I built this React webapp program that is a dynamic flashcard viewer designed to help users explore and learn the basics of software development through an interactive quiz format. It features a set of flashcards covering key topics in web development and the Software Development Life Cycle (SDLC), such as the core technologies of HTML, CSS, and JavaScript, as well as the stages of developing software. Users can navigate through the flashcards randomly by clicking a "Next" button, which displays a new card each time, offering a fun and engaging way to test and reinforce their knowledge. The current card number is displayed, providing users with a sense of progression through the set. Each flashcard presents a question that, when clicked, reveals the answer, encouraging active participation and self-assessment. There is also the ability to guess an answer, and when submitting, will let you know if you are right or wrong! This helps with learning as you make educated guesses on the flaskcards with realtime feedback.

Time spent: 5 hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess in a box before seeing the flipside of the card**
- [X] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [X] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [X] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [ ] A shuffle button is used to randomize the order of the cards
- [ ] A user's answer may be counted as correct even when it is slightly different from the target answer
- [ ] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [X] Removed the worry about camel case guessing for answers on guessing an answer
* [X] there are multiple answers you can guess correctly, all refering to single word corect answers that are found on the other side of the flashcard
      

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

[ScreenToGif](https://www.screentogif.com/) for Windows


## Notes

One of the biggest challenges I faced while developing the extra features of this app was figuring out how I was going to gop about providing feedback for the User when an answer is typed. I wanted to make sure that users did not have to type sentences or worry about upper or lower case characters when guessing. My questions and answers were quite long so I worked on implementing a guessing mehtod where theres a key of answers and any of those words would count as correct. that was the biggest challenge when building this functionality.

## License

    Copyright [2024] [Jaime Gomez]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
