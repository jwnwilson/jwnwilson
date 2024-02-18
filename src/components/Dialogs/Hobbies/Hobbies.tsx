import ReactMarkdown from "react-markdown";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { Gallery } from "react-grid-gallery";
import "yet-another-react-lightbox/styles.css";
import { images, CustomImage } from "./images";

const HobbyDialog = (props) => {
    return (
        <Dialog open={props.open} handler={props.handleOpen} size={"lg"} className="p-8 w-full h-screen md:h-auto overflow-y-auto">
            <DialogHeader >Hobbies</DialogHeader>
            <DialogBody className="w-full xs:h-full sm:h-100 p-0 md:p-4">
                <div className="grid-container grid grid-cols-1 md:grid-cols-[40%_60%]">
                    <div className="grid md:grid-1 overflow-hidden">
                        <div style={{zIndex:10000}}>
                            <Gallery
                                images={images}
                                enableImageSelection={false}
                                maxRows={1}                            
                            />
                        </div>
                    </div>
                    <div className="prose px-0 md:px-8">
                        <ReactMarkdown style={{ width: '100% !important' }}>{
                            `Living a rockstar lifestyle I love video and board games. I'm an old gymnast and see what I can still do with my buddies at our local gymnastics club.`
                        }
                        </ReactMarkdown>
                        <br></br>
                        <a href="https://www.instagram.com/noelwilsonlon/?hl=en">Here's my instagram</a>
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

export default HobbyDialog;