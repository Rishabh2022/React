
import { useState } from "react"
export function UserInput( {onChange,userInput}) {


    return (<section id="user-input">
        <div className="input-group">
            <span>
                <label>Initial Investment</label>
                <input type="numbers" required value={userInput.initialInvestment} onChange={(event)=>onChange('initialInvestment',event.target.value)} ></input>
            </span>
            <span>
                <label>Annual Investment</label>
                <input  type="numbers" required value={userInput.annualInvestment} onChange={(event)=>onChange('annualInvestment',event.target.value)} ></input>
            </span>
        </div>

        <div className="input-group">
            <span>
                <label>Expcted Return</label>
                <input  type="numbers" required value={userInput.expectedReturn} onChange={(event)=>onChange('expectedReturn',event.target.value)} ></input>
            </span>
            <span>
                <label>Duration</label>
                <input  type="numbers" required value={userInput.duration} onChange={(event)=>onChange('duration',event.target.value)} ></input>
            </span>
        </div>

    </section>)
}