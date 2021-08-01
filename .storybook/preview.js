import '../assets/globals.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  backgrounds: { disable: true },
  themes: {
    default: 'Light Mode',
    list: [
      { name: 'Light Mode', class: ['bg-gray-50'], color: '#fff' },
      { name: 'Dark Mode', class: ['dark', 'bg-gray-900'], color: '#000' },
      { name: 'Dark Background', class: ['bg-gray-900'], color: '#000' }
    ]
  }
}
