import { createSlice } from "@reduxjs/toolkit";


export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light'
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            state.theme === 'light' ? (
                document.querySelector('html').classList.add('dark'),
                document.querySelector('html').classList.remove('light')) : (
                document.querySelector('html').classList.add('light'),
                document.querySelector('html').classList.remove('dark'))
        }
    }
})