const LenguajeReducer = (state, action) => {
    const { type } = action;

    if (type === 'es-ES') {
        return {
            ...state,
            verify: 'es-ES',
            navbar: [
                {
                    id: 1,
                    nombre: 'Trabajos',
                    url: '/works'
                },
                {
                    id: 3,
                    nombre: 'Inicio',
                    url: '/home'
                },
                {
                    id: 5,
                    nombre: 'Contacto',
                    url: '/contact'
                },
            ],
            body: {
                home:
                {
                    title: 'Soy Joan Cardozo y este es mi portafolio',
                    descripcion: 'Tengo 17 años, vivo en Bogotá Colombia y soy Desarrollador FullStack',
                    subtitle: 'Tecnologias que conosco',
                    tools: 'Herramientas que uso'
                },
                works:
                {
                    title: 'Proyectos personales o grupales',
                    descripcion: 'Proyectos en los que he trabajado'
                },
                contact:
                {
                    title: 'Contactame',
                    descripcion: 'Puedes usar estas redes para contactarme, te estare leyendo'
                }
            },
            footer: 'Derechos a PintoGamer64 / Joan Cardozo 2022'
        }
    } else {
        return {
            ...state,
            verify: 'en-EN',
            navbar: [
                {
                    id: 1,
                    nombre: 'Works',
                    url: '/works'
                },
                {
                    id: 3,
                    nombre: 'Home',
                    url: '/home'
                },
                {
                    id: 5,
                    nombre: 'Contact',
                    url: '/contact'
                },
            ],
            body: {
                home:
                {
                    title: 'I am Joan Cardozo and this is my portfolio',
                    descripcion: "I'm 17 years old, I live in Bogota Colombia and I'm a FullStack Developer",
                    subtitle: 'Technologies I know',
                    tools: 'Tools I use'
                },
                works:
                {
                    title: 'Personal or group projects',
                    descripcion: 'Projects I have worked on'
                },
                contact:
                {
                    title: 'Contact me',
                    descripcion: 'You can use these networks to contact me, I will be reading you'
                }
            },
            footer: 'Rights to PintoGamer64 / Joan Cardozo 2022'
        }
    }
}

export default LenguajeReducer;