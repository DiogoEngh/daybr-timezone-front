import GetStarted from "./views/getStarted/getStarted";
import ContentMain from "./views/content/contentMain"

const navigations = [
    {
        path: '/getStarted',
        component: <GetStarted />
    },
    {
        path: `/getStarted/${window.location?.pathname?.split('/getStarted/')[1]}`,
        component: <ContentMain param={window.location?.pathname?.split('/getStarted/')[1]}/>
    }
]

export default navigations