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
    src: original
}));

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

const PetDialog = (props: Props) => {
    const [index, setIndex] = useState(-1);
    const handleClick = (index: number, item: CustomImage) => setIndex(index);
    return (
        <Dialog placeholder="Pet Dialog" open={props.open} handler={props.handleOpen} size={"lg"} className="p-8 w-full h-screen md:h-auto overflow-y-auto">
            <DialogHeader placeholder="Pet Dialog Header"><a onClick={props.goBack} style={{cursor: 'pointer'}}><BackIcon></BackIcon></a>Look at my Bunnies!</DialogHeader>
            <DialogBody className="w-full xs:h-full sm:h-100" placeholder="Pet Dialog Body">
                <div className="grid-container grid md:grid-cols-1">
                    <div className="grid md:grid-1">
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
            <DialogFooter placeholder="Pet Footer">
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

export default PetDialog;