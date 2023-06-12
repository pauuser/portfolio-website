import qoollo from '../assets/qoollo.png'
import shkolkovo from '../assets/shkolkovo.png'
import academy from '../assets/academy-a.png'
import estiem from '../assets/estiem.png'
import aspnet from '../assets/aspnet.webp'
import postgresql from '../assets/postgres.png'
import mongodb from '../assets/mongo.webp'
import docker from '../assets/docker.webp'
import gitlab from '../assets/gitlab.png'
import redis from '../assets/redis.svg'

const INFO= {
    hardSkills: [
        '.NET (C#, ASP.NET, EF Core)',
        'DBMS (PostgreSQL, MongoDB, Redis)',
        'Understanding of Linux',
        'Clean architecture building',
        'C, C++ and Python skills'
    ],
    softSkills: [
        'Leadership',
        'Great at working in teams',
        'Diplomatic and open-minded',
        'Ambitious, ready to aim high'
    ],
    technologies: [
        {
            logo: aspnet,
            alt: 'ASP.NET Logo',
            title: 'ASP.NET'
        } ,
        {
            logo: postgresql,
            alt: 'PostgreSQL Logo',
            title: 'PostgreSQL'
        },
        {
            logo: mongodb,
            alt: 'MongoDB Logo',
            title: 'MongoDB'
        },
        {
            logo: docker,
            alt: 'docker logo',
            title: 'Docker'
        },
        {
            logo: gitlab,
            alt: 'GitLab Logo',
            title: 'GitLab CI/CD'
        },
        {
            logo: redis,
            alt: 'Redis logo',
            title: 'Redis'
        }
    ],
    works: [
        {
            logo: qoollo,
            alt: 'Qoollo logo',
            title: 'Junior Backend Developer',
            place: 'Qoollo, May 2023 - Now',
            description: 'Continued on REST API development with C# ASP.NET and MongoDB. ' +
                'Developed unit and integration tests using xUnit.'
        },
        {
            logo: qoollo,
            alt: 'Qoollo logo',
            title: 'Intern Backend Developer',
            place: 'Qoollo, September 2022 - May 2023',
            description: 'REST API development via C# ASP.NET, PostgreSQL and MongoDB with EF Core, Docker, NLog. ' +
                'Also was involved in making educational content about Backend.'
        },
        {
            logo: qoollo,
            alt: 'Qoollo logo',
            title: 'Qoollo Summer Practice',
            place: 'Qoollo, July 2022',
            description: 'Worked on REST API for Instagram Proxy. Worked with ASP.NET, PostgreSQL, Gitlab CI/CD.'
        },
        {
            logo: estiem,
            alt: 'ESTIEM logo',
            title: 'President (Volunteering)',
            place: 'ESTIEM Local Group Moscow, May 2022 - May 2023',
            description: 'Leaded an organisation of 100+ students which is a part of one of the biggest student ' +
                'organisations in Europe - European Students of Industrial Engineering and Management (ESTIEM).'
        },
        {
            logo: shkolkovo,
            alt: 'Shkolkovo logo',
            title: 'Mathematics Expert',
            place: 'Shkolkovo, January 2021 - June 2021',
            description: 'Gave feedback on over 800 written mathematics tests of online school students.'
        },
        {
            logo: academy,
            alt: 'Academy A logo',
            title: 'Motivation curator',
            place: 'Insperia, September 2020 - June 2021',
            description: 'Helped 30 students to maintain work-life balance and keep motivation, ' +
                'following their study path for Russian State Exams.'
        }
    ]
};

export default INFO;