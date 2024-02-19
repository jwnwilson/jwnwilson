import ReactMarkdown from "react-markdown";
import Image from 'next/image';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import pythonLogo from '../../assets/technology/PythonLogo.png'
import tsLogo from '../../assets/technology/ts_logo.png'

const BackIcon = () => {
    return (
        <svg height="25" id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" width="25"><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>
    )
}

export interface Props {
    open: boolean;
    handleOpen: () => void;
    goBack: (event: any) => void;
}

const TechDialog = (props: Props) => {
    return (
        <Dialog placeholder="Technology Dialog" open={props.open} handler={props.handleOpen} size={"lg"} className="p-8 w-full h-screen md:h-auto overflow-y-auto">
            <DialogHeader placeholder="Technology Header"><a onClick={props.goBack} style={{cursor: 'pointer'}}><BackIcon></BackIcon></a>Technology</DialogHeader>
            <DialogBody className="w-full xs:h-full sm:h-100" placeholder="Technology Dialog">
                <div className="grid-container grid md:grid-cols-[30%_70%]">
                    <div className="grid grid-cols-2  md:grid-cols-1 flex justify-center items-center">
                        <Image className="object-contain w-10 md:w-32 block mx-auto" src={pythonLogo} alt="Python Logo" />
                        <Image className="object-contain w-16 md:w-32 block mx-auto" src={tsLogo} alt="Typescript Logo" />
                    </div>
                    <div>
                        <ReactMarkdown className="prose px-4 mt-2 md:mt-0 ">{
                            `I'm fullstack, my specialities are
- Python Backends
- Typescript Frontends
- Infrastructure as Code
- Dev Ops & Continuous Delivery.`
                        }
                        </ReactMarkdown>
                        <ReactMarkdown className="prose px-4">{
                            `I focus on what the teams need the most, training engineers to maintain quality and velocity.`}
                        </ReactMarkdown>
                        <br></br>
                        <a className="mx-4" href="https://github.com/jwnwilson">Here's my github!</a>
                    </div>
                </div>
                <br></br>
                <ReactMarkdown className="prose">{
                    `## Other skills`}
                </ReactMarkdown>
                <div className="columns-2xs">
                    <ReactMarkdown className="prose">{
                        `
* AWS & GCP & Azure
* Cloud Architecture
* APIs & Event Driven architecture
* Serverless & Managed Container services
* Team building and mentoring
`
                    }
                    </ReactMarkdown>
                </div>
                <br></br>
                <ReactMarkdown className="prose">{
                    `## Weaknesses`}
                </ReactMarkdown>
                <div className="columns-2xs">
                    <p style={{width: "150px", color: "black", transform: "translate(0px,25px) rotate(25deg)", transformOrigin: "center"}}>- CSS</p>
                    <p style={{width: "150px", color: "black"}}>- Bad jokes</p>
                </div>
            </DialogBody>
            <DialogFooter
                placeholder="Footer"
            >
                <Button 
                    variant="gradient"
                    color="green"
                    onClick={props.handleOpen}
                    placeholder="Close"
                >
                    <span>Okie Dokie</span>
                </Button>
            </DialogFooter>
        </Dialog>)
}

export default TechDialog;