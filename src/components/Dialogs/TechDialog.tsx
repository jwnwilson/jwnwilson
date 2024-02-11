import ReactMarkdown from "react-markdown";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const TechDialog = (props) => {
    return (
        <Dialog open={props.open} handler={props.handleOpen} size={"lg"} className="p-8">
            <DialogHeader>Technology</DialogHeader>
            <DialogBody>
                <ReactMarkdown className="prose" style={{ width: '100% !important' }}>{
                    `## Specialities`}
                </ReactMarkdown>
                <div class="columns-2xs">
                    <ReactMarkdown className="prose" style={{ width: '100% !important' }}>{
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
                    <ReactMarkdown className="prose" style={{ width: '100% !important' }}>{
                        `
`
                    }
                    </ReactMarkdown>
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