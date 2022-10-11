import {
    SofiaPlusRemake_DEMO,
    SofiaPlusWebServer_DEMO,
    OokamiBotWebsite_DEMO,
    OokamiBot_DEMO
} from '../../../Assets/Assets_data'


const projects = [
    {
        id: 1,
        nombre: 'SofiaPlus Remake',
        github_url: 'https://github.com/SENA-tech/SofiaPlus-Remake',
        deploy_url: 'https://sofia-plus-remake.vercel.app/',
        image: SofiaPlusRemake_DEMO
    },
    {
        id: 2,
        nombre: 'Ookami Bot',
        github_url: 'https://github.com/PintoGamer64/Ookami-Source-Code',
        deploy_url: undefined,
        image: OokamiBot_DEMO
    },
    {
        id: 3,
        nombre: 'Ookami Website',
        github_url: 'https://github.com/PintoGamer64/Ookami-Bot-Official',
        deploy_url: 'https://pintogamer64.github.io/Ookami-Bot-Official/',
        image: OokamiBotWebsite_DEMO
    },
    {
        id: 1,
        nombre: 'SofiaPlus Web Server Api',
        github_url: 'https://github.com/SENA-tech/SofiaPlus-Web-Server',
        deploy_url: undefined,
        image: SofiaPlusWebServer_DEMO
    },
]

export {
    projects
}