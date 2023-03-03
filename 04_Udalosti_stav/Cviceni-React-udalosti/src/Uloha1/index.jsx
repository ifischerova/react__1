import React from 'react'

// Zadání: Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.
const ukazBublinuPoKliku = () => {
	alert('Koukej bublina');
}

export const Uloha1 = () => {
	return <button onClick={ukazBublinuPoKliku}>Ukaž bublinu</button>
}
