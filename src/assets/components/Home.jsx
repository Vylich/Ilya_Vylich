import { Link } from 'react-router-dom'
function Home() {
	const showBigText = (num) => {
		const links = document.querySelectorAll(home)
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
					<li className='nav__item'>
						<a data-link='1' onMouseOver={(e) => console.log(e.target.dataset.link)} href='#'>about</a>
					</li>
					<li className='nav__item'>
						<a data-link='2' href='#'>portfolio</a>
					</li>
					<li className='nav__item'>
						<a data-link='3' href='#'>experience</a>
					</li>
					<li className='nav__item'>
						<a data-link='4' href='#'>links</a>
					</li>
				</ul>
			</nav>
			<div className='home__wrapper'>
				<p data-text='1'>about</p>
				<p data-text='2'>portfolio</p>
				<p data-text='3'>experience</p>
				<p data-text='4'>Links</p>
			</div>
		</>
	)
}

export default Home
