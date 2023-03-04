import React, { useState } from 'react'
import { zahraj } from './zahraj'

// 1. Nahraď jednotlivé tlačítka/kameny za výpis pole pomocí `.map`. Použij následující pole `kameny`.
const kameny = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

kameny.map((kamen) => <button onClick={() => setNadpis(event.target.textContent)}  type="button" className="kamen">{kamen}</button>)

// 2. Přichystej si stavovou proměnnou `nadpis`, ve které jako výchozí hodnotu nastav „Xylofon“ a proměnnou vypiš uvnitř tagu `<h1>`.
// 3. Po kliknutí na jakýkoliv kámen změň hodnotu nadpisu na text „Cink!“. Zkontroluj, že se nadpis opravdu změní.
// 4. Místo „Cink!“ změň nadpis na název tónu. Nápověda: Název najdeš v `event.target.textContent`.
// 5. Zahraj příslušný tón zavoláním funkce `zahraj('C')` a `'C'` nahraď názvem odpovídajícího tónu. Import přehrávací funkce už máš předchystaný výše.
// 6. Zapni si v počítači zvuk a xylofon otestuj.

export const Xylofon = () => {
	const [nadpis, setNadpis] = useState('Xylofon');

	const kameny = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

	kameny.map((kamen) => <button onClick={() => setNadpis(event.target.textContent)}  type="button" className="kamen">{kamen}</button>)


	return (
		<>
			<h1>{nadpis}</h1>
			<div className="xylofon">
				{kameny.map((kamen) => <button
					type="button" 
					className="kamen"
					key={kamen} 
					// do udalosti lze dat vice funkci!
					onClick={(event) => {
						setNadpis(event.target.textContent)
						zahraj(event.target.textContent)
						}}  
					>{kamen}</button>)}
			</div>
		</>
	)
}
