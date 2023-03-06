import React, { useState } from 'react'

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
	const [numberOne, setNumberOne] = useState(0);
	const [numberTwo, setNumberTwo] = useState(0);

	//const soucet = numberOne + numberTwo

	return (
		<>
			<input type="number" defaultValue="0" onChange={() => setNumberOne(Number(event.target.value))}/> +{' '}
			<input type="number" defaultValue="0" onChange={() => setNumberTwo(Number(event.target.value))}/> = <output> {numberOne + numberTwo} </output>
		</>
	)
}
