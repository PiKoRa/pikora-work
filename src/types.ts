export interface WorkInfo {
    thumbnail: string;
    title: string;
    description: string;
    workUrl: string | undefined;
    githubUrl: string | undefined;
    nicovideoUrl: string | undefined;
    workingState: number;
    startDate: string;
    endDate: string | undefined;
}

export interface VideoInfo {
    thumbnail: string;
    title: string;
    description: string;
    nicovideoUrl: string;
    postedDate: string;
}

export interface ContactUrls {
    twitterUrl: string
    githubUrl: string
    nicovideoUrl: string
}
