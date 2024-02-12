import ReactMarkdown from "react-markdown";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import pythonLogo from '../../assets/PythonLogo.png'

const TechDialog = (props) => {
    return (
        <Dialog open={props.open} handler={props.handleOpen} size={"lg"} className="p-8 w-full h-screen md:h-auto overflow-y-auto">
            <DialogHeader>Technology</DialogHeader>
            <DialogBody className="w-full xs:h-full sm:h-100">
                <div className="grid-container grid md:grid-cols-[30%_70%]">
                    <div className="flex justify-center">
                        <img style={{ maxHeight: 175 }} className="block mx-auto sm:mx-0 sm:shrink-0" src={pythonLogo} alt="Python Logo" />
                    </div>
                    <div>
                        <ReactMarkdown className="prose px-4" style={{ width: '100% !important' }}>{
                            `I'm a big believer in T-Shaped developers so am comfortable working in any discipline, my speciality is Python Backend Engineering, Dev Ops, Infra and Automation.`
                        }
                        </ReactMarkdown>
                        <ReactMarkdown className="prose px-4" style={{ width: '100% !important' }}>{
                            `I focus on what the team(s) need the most, training engineers to maintain quality as I work across disciplines.`}
                        </ReactMarkdown>
                    </div>
                </div>
                <br></br>
                <ReactMarkdown className="prose">{
                    `## Specialities`}
                </ReactMarkdown>
                <div className="columns-2xs">
                    <ReactMarkdown className="prose">{
                        `
* Python & Typescript
* Dev Ops / Automation / Continous Delivery
* APIs & Event Driven architecture
* AWS & GCP & Azure
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
            <DialogFooter>
                <Button variant="gradient" color="green" onClick={props.handleOpen}>
                    <span>Okie Dokie</span>
                </Button>
            </DialogFooter>
        </Dialog>)
}

export default TechDialog;