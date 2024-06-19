interface Projects {
    project: Project[];
}

interface Project {
    id: number;
    caption: string;
    description: string;
    thumb: string;
    image: string;
    link: string;
    poweredBy: string;
}
