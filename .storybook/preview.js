import '../assets/globals.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  backgrounds: { disable: true },
  themes: {
    default: 'Light',
    list: [
      { name: 'Light', class: ['bg-gray-50'], color: '#fff' },
      { name: 'Dark', class: ['dark', 'bg-gray-800'], color: '#000' }
    ],
  },
}