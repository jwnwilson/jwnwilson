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
import { images } from "./images";

const BackIcon = () => {
    return (
        <svg height="25" id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" width="25"><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>
    )
};

export interface Props {
    open: boolean;
    handleOpen: () => void;
    goBack: (event: any) => void;
};

const HobbyDialog = (props:Props) => {
    return (
        <Dialog placeholder="Hobby Dialog" open={props.open} handler={props.handleOpen} size={"lg"} className="p-8 w-full h-screen md:h-auto overflow-y-auto">
            <DialogHeader placeholder="Hobby Dialog Header"><a onClick={props.goBack} style={{cursor: 'pointer'}}><BackIcon></BackIcon></a>Hobbies</DialogHeader>
            <DialogBody placeholder="Hobby Dialog Body" className="w-full xs:h-full sm:h-100 p-0 md:p-4">
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
                    <div className="prose px-0 md:px-8 mt-4 md:mt-0">
                        <ReactMarkdown>{
                            `Living a rockstar lifestyle I love video and board games. I'm an old gymnast and see what I can still do with my buddies at our local gymnastics club.`
                        }
                        </ReactMarkdown>
                        <br></br>
                        <a href="https://www.instagram.com/noelwilsonlon/?hl=en">Here's my instagram</a>
                    </div>
                </div>
                <br></br>
                
            </DialogBody>
            <DialogFooter placeholder="Hobby Dialog Footer">
                <Button placeholder="Close" variant="gradient" color="green" onClick={props.handleOpen}>
                    <span>Okie Dokie</span>
                </Button>
            </DialogFooter>
        </Dialog>)
}

export default HobbyDialog;