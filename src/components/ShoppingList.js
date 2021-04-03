import { useState, useEffect } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	function addToCart(name, price) {
		const currentPlanteSaved = cart.find((plant) => plant.name == name)
		if (currentPlanteSaved) {
			const cartFilterCurrentPlant = cart.filter(
				(plant) => plant.name != name
			)
			updateCart([
				...cartFilterCurrentPlant,
				{name, price, amount: currentPlanteSaved.amount +1 }
			])
		}
		else {
			updateCart([
				...cart, {name, price, amount: 1}
			])
		}

	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter au panier 🛒</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
