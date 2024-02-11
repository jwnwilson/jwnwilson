import ReactMarkdown from "react-markdown";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import profile from '../../assets/profile.jpg'

const MainDialog = (props) => {
    return (
        <Dialog open={props.open} handler={props.handleOpen} size={"lg"} className="p-8">
            <DialogHeader>Hello! I'm Noel Wilson</DialogHeader>
            <DialogBody>
                <div class="columns-2xs">
                    <ReactMarkdown className="prose" style={{ width: '100% !important' }}>
                        {
                            `I'm an experienced Software Engineer comfortable across the tech stack. 
I Have worked in London for over 15 years in various industries.
I specialise in building and leading efficient teams, bringing people together to build great products.
`
                        }
                    </ReactMarkdown>
                    <div className="flex justify-center">
                        <img style={{ maxHeight: 175 }} className="block mx-auto rounded-full sm:mx-0 sm:shrink-0" src={profile} alt="Noel's Face" />
                    </div>
                </div>
                <br></br>
                {/* Replace with links to other dialog boxes */}
                <ReactMarkdown className="prose" style={{ width: '100% !important' }}>{
                    `## Topics`}
                </ReactMarkdown>
    
            </DialogBody>
            <DialogFooter>
                <Button variant="gradient" color="green" onClick={props.handleOpen}>
                    <span>Okie Dokie</span>
                </Button>
            </DialogFooter>
        </Dialog>)
}

export default MainDialog;