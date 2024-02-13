import ReactMarkdown from "react-markdown";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const PetDialog = (props) => {
    return (
        <Dialog open={props.open} handler={props.handleOpen} size={"lg"} className="p-8 w-full h-screen md:h-auto overflow-y-auto">
            <DialogHeader>My Pets!</DialogHeader>
            <DialogBody className="w-full xs:h-full sm:h-100">
                <div className="grid-container grid md:grid-cols-[30%_70%]">
                    <div className="flex justify-center">
                        <img style={{ maxHeight: 175 }} className="block mx-auto sm:mx-0 sm:shrink-0" src="https://media1.tenor.com/m/y2uYuMOO-RoAAAAC/pictures-of-my-kids-family-guy.gif" alt="Python Logo" />
                    </div>
                    <div>
                        <ReactMarkdown className="prose px-4" style={{ width: '100% !important' }}>{
                            `Look at my Bunnies!`
                        }
                        </ReactMarkdown>
                    </div>
                </div>
                <br></br>
            </DialogBody>
            <DialogFooter>
                <Button variant="gradient" color="green" onClick={props.handleOpen}>
                    <span>Okie Dokie</span>
                </Button>
            </DialogFooter>
        </Dialog>)
}

export default PetDialog;