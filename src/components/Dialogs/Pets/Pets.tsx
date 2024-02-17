import ReactMarkdown from "react-markdown";
import { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images, CustomImage } from "./images";

const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

const PetDialog = (props) => {
    const [index, setIndex] = useState(-1);
    const handleClick = (index: number, item: CustomImage) => setIndex(index);
    return (
        <Dialog open={props.open} handler={props.handleOpen} size={"lg"} className="p-8 w-full h-screen md:h-auto overflow-y-auto">
            <DialogHeader>My Pets!</DialogHeader>
            <DialogBody className="w-full xs:h-full sm:h-100">
                <div className="grid-container grid md:grid-cols-[30%_70%]">
                    <div className="grid-container grid md:grid-1">
                        <img style={{ maxHeight: 175 }} className="block mx-auto sm:mx-0 sm:shrink-0" src="https://media1.tenor.com/m/y2uYuMOO-RoAAAAC/pictures-of-my-kids-family-guy.gif" alt="Python Logo" />
                        <ReactMarkdown className="prose px-4" style={{ width: '100% !important' }}>{
                            `### Look at my Bunnies!`
                        }
                        </ReactMarkdown>
                    </div>
                    <div className="grid-container grid md:grid-1">
                        
                        <div style={{zIndex:10000}}>
                            <Gallery
                                images={images}
                                onClick={handleClick}
                                enableImageSelection={false}
                            />
                            <Lightbox
                                slides={slides}
                                open={index >= 0}
                                index={index}
                                close={() => setIndex(-1)}
                            />
                        </div>
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