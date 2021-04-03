import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName} ?\nTrès bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
			<div className='lmj-plant-item-price'>
				{price} €
			</div>
		</li>
	)
}

export default PlantItem