export default function waitForElement(selector: string): Promise<Element | undefined> {
	return new Promise((resolve) => {
		const element = document.querySelector(selector)
		if (element) resolve(element)

		const observer = new MutationObserver(() => {
			const element = document.querySelector(selector)

			if (element) {
				observer.disconnect()
				resolve(element)
			}
		})

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		})
	})
}
