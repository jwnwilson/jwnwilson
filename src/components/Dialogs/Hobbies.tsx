import ReactMarkdown from "react-markdown";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import pythonLogo from '../../assets/PythonLogo.png'

const HobbyDialog = (props) => {
    return (
        <Dialog open={props.open} handler={props.handleOpen} size={"lg"} className="p-8 w-full h-screen md:h-auto overflow-y-auto">
            <DialogHeader>Hobbies</DialogHeader>
            <DialogBody className="w-full xs:h-full sm:h-100">
                <div className="grid-container grid md:grid-cols-[30%_70%]">
                    <div className="flex justify-center">
                        <img style={{ maxHeight: 175 }} className="block mx-auto sm:mx-0 sm:shrink-0" src={pythonLogo} alt="Python Logo" />
                    </div>
                    <div>
                        <ReactMarkdown className="prose px-4" style={{ width: '100% !important' }}>{
                            `Living a rockstar lifestyle I love video and games and board games. I'm also an old gymnast and enjoy seeing what I can still do with my buddies at our local gymnastics club.`
                        }
                        </ReactMarkdown>
                    </div>
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

export default HobbyDialog;