document.addEventListener('DOMContentLoaded', () => {
  
    const quiz_data = [ 


        {
            question: "What is the capital of France?",
            a: "Paris",
            b: "Rome",
            c: "Madrid",
            d: "London",
            correct: "a",
        },
        {
            question: "What is the capital of Italy?",
            a: "Paris",
            b: "Rome",
            c: "Madrid",
            d: "London",
            correct: "b",
        },
        {
            question: "What is the capital of Spain?",
            a: "Paris",
            b: "Rome",
            c: "Madrid",
            d: "London",
            correct: "c",
        },
        {
            question: "What is the capital of England?",
            a: "Paris",
            b: "Rome",
            c: "Madrid",
            d: "London",
            correct: "d",
        },

    ];

    const quiz = document.getElementById("quiz");
    const question_el = document.getElementById('question');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const submit_btn = document.getElementById('submit');
    const answer_els = document.querySelectorAll('.answer');


    let current_quiz = 0;

    let score = 0;

    load_quiz();



    function load_quiz() {

       deselect_answers();
       const current_quiz_data = quiz_data[current_quiz];

       
       question_el.innerText = current_quiz_data.question;

        a_text.innerText = current_quiz_data.a;
        b_text.innerText = current_quiz_data.b;
        c_text.innerText = current_quiz_data.c;
        d_text.innerText = current_quiz_data.d;
    }   


    function get_selected() {

        let answer = undefined;

        answer_els.forEach((answer_el) => {

            if(answer_el.checked) {

                answer = answer_el.id;
            }
        });

        return answer;

    }

    function deselect_answers() {
        answer_els.forEach((answer_el) => {
            answer_el.checked = false;
        });
    }



    submit_btn.addEventListener('click', () => {

        const answer = get_selected();

        if (answer) {
            if (answer === quiz_data[current_quiz].correct) {
                score++;
        
            }
        }
        current_quiz++;

        if (current_quiz < quiz_data.length) {
            load_quiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quiz_data.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    });
});