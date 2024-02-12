import ReactMarkdown from "react-markdown";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import profile from '../../assets/profile.jpg'

const ClickableIcon = (props) => {
    return (
        <a href={props.url} className="border-2 h-10 flex justify-center items-center hover:bg-gray-400 rounded-full">
            {props.children}
        </a>
    )
}

const GithubIcon = () => {
    return (
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clip-rule="evenodd"/>
        </svg>
    )
}

const LinkedInIcon = () => {
    return (
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
            <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
        </svg>  
    )
}

const InstaIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
        </svg>
    )
}

const EmailIcon = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341"/>
        </svg>
    )
}

const MainDialog = (props) => {
    return (
        <Dialog open={props.open} handler={props.handleOpen} size={"lg"} className="p-8 w-full h-screen md:h-auto overflow-y-auto">
            <DialogHeader>Hello! I'm Noel Wilson</DialogHeader>
            <DialogBody className="w-full xs:h-full sm:h-100">
                <div className="grid-container grid md:grid-cols-[30%_70%]">
                    <div className="flex justify-center">
                        <img style={{ maxHeight: 175 }} className="block mx-auto sm:mx-0 sm:shrink-0" src={profile} alt="Noel's Face" />
                    </div>
                    <div className="grid-rows-4 grid-flow-col">
                        <ReactMarkdown className="prose px-4" style={{ width: '100% !important' }}>
                            {
                                `I'm an experienced Software Engineer comfortable across the tech stack. 
    I Have worked in London for over 10 years in various industries.
    I specialise in building and leading efficient teams, bringing people together to build great products.
    `
                            }
                        </ReactMarkdown>
                        <br></br>
                        <div className="grid-container grid gap-4 grid-cols-3 md:grid-cols-8 px-8">
                            <ClickableIcon url={"https://github.com/jwnwilson"}>
                                <GithubIcon></GithubIcon>
                            </ClickableIcon>
                            <ClickableIcon url={"https://www.linkedin.com/in/noel-wilson-0a194225/"}>
                                <LinkedInIcon></LinkedInIcon>
                            </ClickableIcon>
                            <ClickableIcon url={"https://www.instagram.com/noelwilsonlon/?hl=en"}>
                                <InstaIcon></InstaIcon>
                            </ClickableIcon>
                            <ClickableIcon url={"mailto:jwnwilson@hotmail.co.uk"}>
                                <EmailIcon></EmailIcon>
                            </ClickableIcon>
                        </div>
                    </div>
                    
                </div>
                <br></br>
                {/* Replace with links to other dialog boxes */}
                <ReactMarkdown className="prose" style={{ width: '100% !important' }}>{
                    `## About Me`}
                </ReactMarkdown>
                <br></br>
                <div className="grid-container grid gap-4 md:grid-cols-4">
                    <Button onClick={props.handleOpenTech}>Technology</Button>
                    <Button>Blog</Button>
                    <Button>Hobbies</Button>
                    <Button>Pets</Button>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button variant="gradient" color="green" onClick={props.handleOpen}>
                    <span>Okie Dokie</span>
                </Button>
            </DialogFooter>
        </Dialog>)
}

export default MainDialog;