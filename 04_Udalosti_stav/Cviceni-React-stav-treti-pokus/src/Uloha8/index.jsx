import React, { useState } from 'react'

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
	const [destVBrne, setDestVBrne] = useState('možná');

	const zmen = () => {
		if (destVBrne === 'možná') {
			setDestVBrne('ano');
		} else if (destVBrne ==='ano') {
			setDestVBrne('ne');
		} else {
			setDestVBrne('možná');
		}
	}

	return (
		<>
			<h3>Prší v Brně: {destVBrne}</h3>
			<button onClick={(zmen)}>změnit</button>
		</>
	)
}
