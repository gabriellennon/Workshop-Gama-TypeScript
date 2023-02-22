
interface IDataInfoJob {
    slug: string;
    company_name: string;
    title: string;
    description: string;
    remote: boolean;
    url: string;
    tags: string[];
    job_types: string[];
    location: string;
    created_at: number;
}

interface IResponseJobs {
    data: IDataInfoJob[]
}

const linkAPIGetJobs = 'https://www.arbeitnow.com/api/job-board-api';
let dataJobs: null | IResponseJobs = null;
const list: HTMLElement | null = document.querySelector('#jobs')

const handleGetJobs = async () => {
    (document.getElementById("buttonGetJobs") as HTMLButtonElement).disabled = true;

    const response = await fetch(linkAPIGetJobs);
    const responseJson = await response.json();
    const dataResponseJobs: IResponseJobs = responseJson;
    dataJobs = dataResponseJobs;

    for(let i=0; i < 10; i++) {
        const liElement = document.createElement('li');
        const div = document.createElement('div');
        const linkJobDescription = document.createElement('a');
        const textTitleJob = document.createElement('p');
        const textCompanyName = document.createElement('p');
        const textRemoteJob = document.createElement('p');


        let isRemoteJob = dataResponseJobs.data[i].remote ? 'Sim' : 'Não'


        textTitleJob.textContent = `${dataResponseJobs.data[i].title}`;
        textTitleJob.classList.add('title-job');
        
        textCompanyName.textContent = `${dataResponseJobs.data[i].company_name}`;
        textCompanyName.classList.add('other-info');

        textRemoteJob.textContent = `${isRemoteJob}`;
        textRemoteJob.classList.add('other-info');

        linkJobDescription.textContent = 'Ver vaga ';
        linkJobDescription.href = `${dataResponseJobs.data[i].url}`;
        linkJobDescription.target = "_blank"
        linkJobDescription.classList.add('link-job');


        div.classList.add('content-description-job');
        div.append(textTitleJob, textCompanyName, textRemoteJob, linkJobDescription);
        liElement.appendChild(div);

        document.getElementById("jobs")?.appendChild(liElement);
    }

    (document.getElementById("buttonGetJobs") as HTMLButtonElement).disabled = false;
}