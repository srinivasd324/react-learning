
import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Result({userInput}) {
    

    const results = calculateInvestmentResults(userInput);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Investment</th>
                    <th>Invested Capital</th>
                </tr> 
            </thead>
            <tbody>
                {results.map((result) => {
                    const totalInvestment = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                    const totalAmountInvested = result.valueEndOfYear + totalInvestment;
                    return(
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInvestment)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>

                        </tr>
                    )

                })}

            </tbody>
        </table>
    );
}