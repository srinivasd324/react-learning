import quizComplete from '../assets/quiz-complete.png';

export default function Header(){
    return (
        <header>
            <img src={quizComplete} alt="Quiz Logo" />
            <h1>
                React Quiz 
            </h1>
        </header>
    )
}