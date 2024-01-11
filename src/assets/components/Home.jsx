import { useState } from 'react'
import { Link } from 'react-router-dom'
function Home() {
	const [links, setLinks] = useState([
		'about',
		'portfolio',
		'experience',
		'links',
	])
	const [bigText, setBigText] = useState([]);



	const showBigText = (e) => {
		if (e.type == 'mouseout') {
			bigText.forEach((item) => {
				if(item.dataset.text === e.target.dataset.link) {
					item.style.color = ''
				}
			})
		}
		if (e.type == 'mouseover') {
			const bigTexts = document.querySelectorAll('[data-text]');
			setBigText([...bigTexts])
			bigText.forEach((item) => {
				if(item.dataset.text === e.target.dataset.link) {
					item.style.color = '#4b4b4b1e'
				}
			})
		}
	}

	return (
		<>
			<h1 className='home__title'>
				<span>Hi, </span>
				<br />
				<span>My name is </span>
				<br />
				<span>Ilya</span>
				<br />
			</h1>
			<nav className='home__nav'>
				<ul className='nav'>
					{links.map((item, id) => (
						<li key={id} className='nav__item'>
							<Link to={item} data-link={id} onMouseOver={showBigText} onMouseOut={showBigText} href='#'>
								{item}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className='home__wrapper'>
				{links.map((item, id) => (
					<p key={id} data-text={id}>{item}</p>
				))}
			</div>
		</>
	)
}

export default Home
