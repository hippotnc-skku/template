/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				icon: {
					gray: '#afafaf',
					200: '#FF7811',
					300: '#FFA42C'
				},
				hippBlue: {
					DEFAULT: '#205cc2',
					100: '#ECF3F7',
					200: '#3561AC'
				},
				hippRed: {
					DEFAULT: '#DB0F26',
					100: '#F15D5D'
				},
				hippNavy: {
					DEFAULT: '#1E2666'
				},
				hippGray: {
					DEFAULT: '#373838',
					100: '#F8F8F8',
					200: '#BCBCBC'
				}
			},
			boxShadow: {
				'soft-xxs': '0 1px 5px 1px #ddd',
				'soft-xs': '0 3px 5px -1px rgba(0,0,0,.09),0 2px 3px -1px rgba(0,0,0,.07)',
				'soft-sm':
					'0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)',
				'soft-md': '0 4px 7px -1px rgba(0,0,0,.11),0 2px 4px -1px rgba(0,0,0,.07)',
				'soft-lg': '0 2px 12px 0 rgba(0,0,0,.16)',
				'soft-xl': '0 20px 27px 0 rgba(0,0,0,.05)',
				'soft-dark-xl':
					'0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
				'soft-2xl': '0 .3125rem .625rem 0 rgba(0,0,0,.12)',
				'soft-3xl': '0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)'
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};
