
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	section.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height){
			navLinks.forEach(links => {
				links.classlist.remove('active');
				document.querySelector('header nav a[href '=  + id + ']').classlist.add('active')
			})
		}
	}) 
}

menuIcon.onclick = () => {
	menuIcon.classlist.toggle('bx-x');
	navbar.classlist.toggle('active');
}