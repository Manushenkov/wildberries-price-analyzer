const CLEANUP_SELECTORS = [
  ".inject-special-offer-container",
  ".inject-warehouses-container",
];

export default function cleanupElements() {
  CLEANUP_SELECTORS.forEach(deleteElement);
}

function deleteElement(selector: string) {
  document.querySelectorAll(selector).forEach((e) => e.remove());
}
