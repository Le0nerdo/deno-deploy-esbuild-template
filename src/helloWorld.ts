export const helloWorld = (parent: HTMLElement): void => {
	const div: HTMLDivElement = document.createElement("div")
	div.innerHTML = "Hello World"

	parent.appendChild(div)
}
