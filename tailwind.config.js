tailwind.config={
    theme:{
        extend:
        {

            gridTemplateColumns:{
                'auto':'repeat(auto-fit, minmax(200px,1fr))'
            },
            fontFamily:{
                Outfit: ["Outfit", "serif"],
                Ovo:["Ovo", "serif"]
            },
            animation:
            {
                spin_slow: 'spin 6s linear infinite'
            },
            colors:
            {
                lighthover: '#fcf4ff',
                darkhover: '2a004a',
                darkTheme: '#11001f'
            },
            boxShadow:
            {
                dark: '4px 4px 0 #000',
                white: '4px 4px 0 #fff',
            }
        }
    },
    darkMode: 'selector'
}