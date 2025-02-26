export default function UserInput({onHandleChange, userInput}) {


    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label name=""> Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} id="" onChange={(event) => onHandleChange("initialInvestment", event.target.value)} />
                </p>
                <p>
                    <label name=""> Annual Invesment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event) => onHandleChange("annualInvestment", event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label name=""> Expected Return</label>
                    <input type="number" required name="" id="" value={userInput.expectedReturn} onChange={(event) => onHandleChange("expectedReturn", event.target.value)} />
                </p>
                <p>
                    <label name=""> Duration</label>
                    <input type="number" required name="" value={userInput.duration} id="" onChange={(event) => onHandleChange("duration", event.target.value)} />
                </p>
            </div>

        </section>
    );
}