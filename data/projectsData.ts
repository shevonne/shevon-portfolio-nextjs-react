interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'International Card WeChat Public Account and Mini-Program',
    description: `Developed an online mall for selling international phone cards with features such as global internet recharge, card management, and points mall.
Built the mini-program from scratch using Uniapp, and managed subsequent updates.
Integrated WeChat payment APIs and internal logic for hybrid recharge methods.
Implemented location services using Tencent Maps SDK for enhanced user experiences.`,
    imgSrc: '/static/images/web.png',
    // href: 'https://www.google.com',
  },
  {
    title: 'Data Visualization Intelligent Management Platform',
    description: `Designed and developed the front-end module using Vue, ElementUI, Webpack, and Echarts.
Created a generic Echarts component library, enhancing dynamic data visualization capabilities.
Standardized and modularized CSS styles for platform theme customization.`,
    imgSrc: '/static/images/chats.jpeg',
    // href: '/blog/the-time-machine',
  },
  {
    title: 'Smart Integration Platform System',
    description: `Integrated with Unity 3D client for IoT-based system monitoring and data collection.
Implemented real-time data exchange using Websocket and Ajax for dynamic data display.
Standardized CSS styles for theme customization and managed business design and system data integration.`,
    imgSrc: '/static/images/iot.jpeg',
    // href: '/blog/the-time-machine',
  },
]

export default projectsData
