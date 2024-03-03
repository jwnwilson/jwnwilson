'use client'
import React, { useEffect, useRef, useState } from "react";
import ReactGA from 'react-ga';
import Image from 'next/image'
// @ts-ignore: No types available for this lib
import { MapInteractionCSS } from "react-map-interaction";

import './App.css'
import Cpu from '../components/Cpu';
import SemiConductor from '../components/Semiconductor';
import { Circuit, Circuits} from '../components/Circuit';
import Diode from '../components/Diode';
import MainDialog from "../components/Dialogs/MainDialog";
import TechDialog from "../components/Dialogs/TechDialog";
import HobbyDialog from "../components/Dialogs/Hobbies";
import PetDialog from "../components/Dialogs/Pets";

const getTopic = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  return queryParameters.get("topic") || "";
}

function App() {
  const [touchPosition, setTouchPosition] = React.useState({x:0, y:0});
  const [refreshUrl, setrefreshUrl] = React.useState(false);
  const [openMain, setOpenMain] = React.useState(false);
  const [openTech, setOpenTech] = React.useState(false);
  const [openHobbies, setOpenHobbies] = React.useState(false);
  const [openPets, setOpenPets] = React.useState(false);
  const closeAll = () => {
    setOpenMain(false);
    setOpenTech(false);
    setOpenHobbies(false);
    setOpenPets(false);
  }
  const setUrlParamTopic = (topic: string) => {
    const url = new URL(window.location.href);
    const currentTopic = getTopic();
    if (topic && topic !== currentTopic) {
      url.searchParams.set('topic', topic);
      setTimeout(() => {
        window.history.pushState(null, "", url);
      });

    } else {
      url.searchParams.delete('topic');
      setTimeout(() => {
        window.history.pushState(null, "", url);
      });
    }
  }

  const handleOpenMain = () => {
    closeAll();
    if (!openMain) {
      setOpenMain(true);
      setUrlParamTopic("main");
    } else {
      setUrlParamTopic("");
    }
  }
  const handleOpenTech = () => {
    closeAll();
    if (!openTech) {
      setOpenTech(true);
      setUrlParamTopic("technology");
    } else {
      setUrlParamTopic("");
    }
  }
  const handleOpenBlog = () => {
    window.location.href = 'https://blog.noel-wilson.co.uk/';
  }
  const handleOpenHobbies = () => {
    closeAll();
    if (!openHobbies) {
      setOpenHobbies(true);
      setUrlParamTopic("hobbies");
    } else {
      setUrlParamTopic("");
    }
  }
  const handleOpenPets = () => {
    closeAll();
    if (!openPets) {
      setOpenPets(true);
      setUrlParamTopic("pets");
    } else {
      setUrlParamTopic("");
    }
  }
  const goBack = (event: Event) => {
    window.history.back();
    // Hack to avoid refresh url running before url has updated
    setTimeout(() => {
      setrefreshUrl(!refreshUrl);
    }, 0);
  }

  // Update topic from url param
  useEffect(() => {
    const topicParam = getTopic();
    switch (topicParam) {
      case "main":
        handleOpenMain();
        break;
      case "technology":
        handleOpenTech();
        break;
      case "hobbies":
        handleOpenHobbies();
        break;
      case "pets":
        handleOpenPets();
        break;
      case "":
        closeAll();
        break;
    }
  }, [refreshUrl]);

  return (
    <div className="flex absolute inset-0 h-screen w-screen justify-center items-center overflow-hidden bg-emerald-900 cursor-pointer">
      <div className="flex map-container">
        <MapInteractionCSS
          showControls
          defaultValue={{
            scale: 1,
            translation: { x: 0, y: 0 }
          }}
          minScale={0.5}
          maxScale={3}
          translationBounds={{
            xMax: 400,
            yMax: 200,
            xMin: -400,
            yMin: -200
          }}
          btnClass="zoom-button"
          controlsClass="zoom-container"
        >
          <div className="min-w-[1000px] min-h-[900px]"
            onTouchStart={(event) => {
              setTouchPosition({x: event.touches[0].pageX, y: event.touches[0].pageY});
            }}
            onTouchEnd={(event) => {
              const MOVE_THRESHHOLD = 5;
              const currentPos = {x: event.changedTouches[0].pageX, y: event.changedTouches[0].pageY};
              const movement = Math.abs(touchPosition.x - currentPos.x) + Math.abs(touchPosition.y - currentPos.y)
              if (movement < MOVE_THRESHHOLD) {
                (event?.target as HTMLButtonElement)?.click?.();
              }
            }}>
            <Cpu width={150} height={150} top={50} left={50} absolute={true} onClick={handleOpenTech}>
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5 text-center">
                  <p className="text-lg text-white font-semibold">
                    Technology
                  </p>
                  <p className="text-slate-500 font-medium">
                    My Tools
                  </p>
                </div>
              </div>
            </Cpu>
            {/* left Circuits */}
            <Circuits 
              startX={20} 
              startY={63} 
              topIncrement={15} 
              circuits={[
                [[-15, 0], [-30, -40], [-30, -40]],
                [[-20, 0], [-35, -40], [-50, -40]],
                [[-25, 0], [-40, -40], [-60, -40]],
                [[-30, 0], [-45, -40], [-70, -40]],
                [[-45, 0], [-70, 40], [-100, 40], [-155, 160]],
                [[-40, 0], [-65, 40], [-95, 40], [-155, 170]],
                [[-35, 0], [-60, 40], [-90, 40], [-155, 180]],
                [[-30, 0], [-25, 0]],
                [[-20, 0], [-35, 0]]
              ]}
            ></Circuits>
            <Cpu width={150} height={150} top={155} left={855} absolute={true} onClick={handleOpenBlog}>
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5 text-center">
                  <p className="text-lg text-white font-semibold">
                    Blog
                  </p>
                  <p className="text-slate-500 font-medium">
                    My Thoughts
                  </p>
                </div>
              </div>
            </Cpu>
            {/* top circuits */}
            <Circuits 
              startX={867} 
              startY={120} 
              leftIncrement={15} 
              circuits={[
                [[0, -15], [-40, -30]],
                [[0, -20], [-40, -35], [-40, -45]],
                [[0, -25], [-40, -40], [-40, -55]],
                [[0, -30], [-40, -45], [-40, -65]],
                [[0, -35], [-40, -50], [-40, -80], [-205, -175]],
                [[0, -40], [-40, -55], [-40, -85], [-220, -190]],
                [[0, -45], [-40, -60], [-40, -90], [-235, -205]],
                [[0, -30], [0, -45], [0, -60]],
                [[0, -20], [0, -35]]
              ]}
            ></Circuits>
            {/* bottom circuits */}
            <Circuits 
              startX={867} 
              startY={340} 
              leftIncrement={15} 
              circuits={[
                [[0, 15], [-30, 30], [-30, 30]],
                [[0, 20], [-30, 35], [-30, 45]],
                [[0, 25], [-30, 40], [-30, 55]],
                [[0, 30], [-30, 45], [-30, 65]],
                [[0, 35], [-30, 50], [-30, 90], [100, 200]],
                [[0, 40], [-30, 55], [-30, 85], [85, 180]],
                [[0, 45], [-30, 60], [-30, 80], [70, 160]],
                [[0, 30], [0, 45], [0, 60]],
                [[0, 20], [0, 35]]
              ]}
            ></Circuits>
            {/* right circuits */}
            <Circuits 
              startX={1037} 
              startY={168} 
              topIncrement={15} 
              circuits={[
                [[15, 0], [30, -25], [30, -50]],
                [[20, 0], [45, -40], [60, -40]],
                [[25, 0], [50, -40], [70, -40]],
                [[30, 0], [55, -40], [80, -40]],
                [[35, 0], [60, -40], [95, -40], [160, -170]],
                [[40, 0], [65, -40], [100, -40], [160, -160]],
                [[45, 0], [70, -40], [105, -40], [160, -150]],
                [[30, 0], [25, 0]],
                [[20, 0], [35, 0]]
              ]}
            ></Circuits>
            <Cpu width={150} height={150} top={550} left={0} absolute={true} onClick={handleOpenHobbies}>
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5 text-center">
                  <p className="text-lg text-white font-semibold">
                    Hobbies
                  </p>
                  <p className="text-slate-500 font-medium">
                    My hobbies
                  </p>
                </div>
              </div>
            </Cpu>
            {/* top circuits */}
            <Circuits 
              startX={12} 
              startY={515} 
              leftIncrement={15} 
              circuits={[
                [[0, -15], [-40, -30]],
                [[0, -20], [-40, -35], [-40, -45]],
                [[0, -25], [-40, -40], [-40, -55]],
                [[0, -30], [-40, -45], [-40, -65]],
                [[0, -35], [-40, -50], [-40, -80]],
                [[0, -40], [-40, -55], [-40, -85]],
                [[0, -45], [-40, -60], [-40, -90]],
                [[0, -30], [0, -45], [0, -60]],
                [[0, -20], [0, -35]]
              ]}
            ></Circuits>
            {/* left circuits */}
            <Circuits 
              startX={-30} 
              startY={563} 
              topIncrement={15} 
              circuits={[
                [[-15, 0], [-30, -40], [-30, -40]],
                [[-20, 0], [-35, -40], [-50, -40]],
                [[-25, 0], [-40, -40], [-60, -40]],
                [[-30, 0], [-45, -40], [-70, -40]],
                [[-45, 0], [-70, 40], [-100, 40]],
                [[-40, 0], [-65, 40], [-95, 40]],
                [[-35, 0], [-60, 40], [-90, 40]],
                [[-30, 0], [-25, 0]],
                [[-20, 0], [-35, 0]]
              ]}
            ></Circuits>
            {/* bottom circuits */}
            <Circuits 
              startX={12} 
              startY={735} 
              leftIncrement={15} 
              circuits={[
                [[0, 15], [-30, 30], [-30, 30]],
                [[0, 20], [-30, 35], [-30, 45]],
                [[0, 25], [-30, 40], [-30, 55]],
                [[0, 30], [-30, 45], [-30, 65]],
                [[0, 35], [-30, 50], [-30, 90], [100, 200]],
                [[0, 40], [-30, 55], [-30, 85], [85, 180]],
                [[0, 45], [-30, 60], [-30, 80], [70, 160]],
                [[0, 30], [0, 45], [0, 60]],
                [[0, 20], [0, 35]]
              ]}
            ></Circuits>
            <Cpu width={150} height={150} top={705} left={585} absolute={true} onClick={handleOpenPets}>
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5 text-center">
                  <p className="text-lg text-white font-semibold">
                    Pets
                  </p>
                  <p className="text-slate-500 font-medium">
                    My Bunnies!
                  </p>
                </div>
              </div>
            </Cpu>
            {/* bottom circuits */}
            <Circuits 
              startX={597} 
              startY={892} 
              leftIncrement={15} 
              circuits={[
                [[0, 15], [-30, 30], [-30, 30]],
                [[0, 20], [-30, 35], [-30, 45]],
                [[0, 25], [-30, 40], [-30, 55]],
                [[0, 30], [-30, 45], [-30, 65]],
                [[0, 35], [-30, 50], [-30, 90], [100, 200]],
                [[0, 40], [-30, 55], [-30, 85], [85, 180]],
                [[0, 45], [-30, 60], [-30, 80], [70, 160]],
                [[0, 30], [0, 45], [0, 60]],
                [[0, 20], [0, 35]]
              ]}
            ></Circuits>
            <SemiConductor width={40} height={50} top={160} left={610} absolute={true} rotate={"90deg"} />
            <SemiConductor width={40} height={50} top={690} left={350} absolute={true} rotate={"90deg"} />
            {/* Diode group 1 */}
            <Circuit startX={410} startY={35} points={[[190, 0]]} width={8} />
            <Circuit startX={590} startY={90} points={[[-180, 0], [-300, -80], [-540, -80]]} width={8} />
            <Diode width={50} height={25} left={400} top={50} rotate={"90deg"} color={"orange"}></Diode>
            <Diode width={50} height={25} left={450} top={50} rotate={"90deg"} color={"orange"}></Diode>
            <Diode width={50} height={25} left={500} top={50} rotate={"90deg"} color={"orange"}></Diode>
            <Diode width={50} height={25} left={550} top={50} rotate={"90deg"} color={"orange"}></Diode>
            {/* Diode group 2 */}
            <Circuit startX={217} startY={195} points={[[0, 115], [-50, 145], [-165, 145]]} width={8}></Circuit>
            <Circuit startX={272} startY={300} points={[[0, -125]]} width={8}></Circuit>
            <Diode width={50} height={20} left={220} top={200} color={"black"}></Diode>
            <Diode width={50} height={20} left={220} top={225} color={"black"}></Diode>
            <Diode width={50} height={20} left={220} top={250} color={"black"}></Diode>
            <Diode width={50} height={20} left={220} top={275} color={"black"}></Diode>
            {/* Diode group3 */}
            <Circuit startX={50} startY={285} points={[[125, 0]]} width={8}></Circuit>
            <Diode width={50} height={20} left={50} top={300} rotate={"90deg"} color={"orange"}></Diode>
            <Diode width={50} height={20} left={75} top={300} rotate={"90deg"} color={"orange"}></Diode>
            <Diode width={50} height={20} left={100} top={300} rotate={"90deg"} color={"orange"}></Diode>
            <Diode width={50} height={20} left={125} top={300} rotate={"90deg"} color={"orange"}></Diode>
            {/* Diode group3 */}
            <Circuit startX={805} startY={550} points={[[0, 100], [-30, 125], [-30, 300]]} width={8}></Circuit>
            <Circuit startX={750} startY={550} points={[[0, 100], [-20, 115], [-75, 115]]} width={8}></Circuit>
            <Diode width={50} height={20} left={750} top={550} color={"orange"}></Diode>
            <Diode width={50} height={20} left={750} top={575} color={"orange"}></Diode>
            <Diode width={50} height={20} left={750} top={600} color={"orange"}></Diode>
            <Diode width={50} height={20} left={750} top={625} color={"orange"}></Diode>
            <Cpu width={250} height={250} top={332} left={375} absolute={true} onClick={handleOpenMain}>
              <div className="h-24 space-y-0.5">
                <Image className="block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" src="/assets/profile.jpg" width={800} height={800} alt="Noel's Face" />
              </div>
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5 text-center">
                  <p className="text-lg text-white font-semibold">
                    Noel Wilson
                  </p>
                  <p className="text-slate-500 font-medium">
                    Principle Engineer
                  </p>
                </div>
              </div>
            </Cpu>
            {/* top circuits */}
            <Circuits 
              startX={387} 
              startY={300} 
              leftIncrement={15} 
              circuits={[
                [[0, -15], [-40, -30]],
                [[0, -20], [-40, -35], [-40, -45]],
                [[0, -25], [-40, -40], [-40, -55]],
                [[0, -30], [-40, -45], [-40, -65]],
                [[0, -35], [-40, -50], [-40, -80], [-205, -175]],
                [[0, -40], [-40, -55], [-40, -85], [-220, -190]],
                [[0, -45], [-40, -60], [-40, -90], [-235, -205]],
                [[0, -30], [0, -45], [0, -60]],
                [[0, -20], [0, -35]],
                [[0, -15], [15, -30], [15, -45]],
                [[0, -15], [15, -30], [15, -55]],
                [[0, -15], [15, -30], [15, -45]],
                [[0, -15], [45, -55], [45, -60]],
                [[0, -15], [45, -55], [45, -75]],
                [[0, -15], [45, -55], [45, -60]],
                [[0, -15], [25, -35], [35, -35]]
              ]}
            ></Circuits>
            {/* bottom circuits */}
            <Circuits 
              startX={387} 
              startY={615} 
              leftIncrement={15} 
              circuits={[
                [[0, 15], [-30, 30], [-30, 30]],
                [[0, 20], [-30, 35], [-30, 45]],
                [[0, 25], [-30, 40], [-30, 55]],
                [[0, 30], [-30, 45], [-30, 65]],
                [[0, 35], [-30, 50], [-30, 90], [100, 200]],
                [[0, 40], [-30, 55], [-30, 85], [85, 180]],
                [[0, 45], [-30, 60], [-30, 80], [70, 160]],
                [[0, 30], [0, 45], [0, 60]],
                [[0, 20], [0, 35]],
                [[0, 15], [15, 30], [15, 45]],
                [[0, 15], [15, 30], [15, 55]],
                [[0, 15], [15, 30], [15, 45]],
                [[0, 15], [35, 50], [35, 50]],
                [[0, 15], [35, 50], [35, 50]],
                [[0, 15], [35, 50], [35, 50]],
                [[0, 15], [15, 30], [35, 30]]
              ]}
            ></Circuits>
            {/* left circuits */}
            <Circuits 
              startX={345} 
              startY={345} 
              topIncrement={15} 
              circuits={[
                [[-15, 0], [-30, -40], [-30, -40]],
                [[-20, 0], [-35, -40], [-50, -40]],
                [[-25, 0], [-40, -40], [-60, -40]],
                [[-30, 0], [-45, -40], [-70, -40]],
                [[-45, 0], [-70, 40], [-100, 40], [-155, 160]],
                [[-40, 0], [-65, 40], [-95, 40], [-155, 170]],
                [[-35, 0], [-60, 40], [-90, 40], [-155, 180]],
                [[-30, 0], [-25, 0]],
                [[-20, 0], [-35, 0]],
                [[-45, 0], [-60, 20], [-75, 20]],
                [[-40, 0], [-55, 20], [-65, 20]],
                [[-35, 0], [-50, 20], [-75, 20]],
                [[-25, 0], [-60, 50], [-70, 50]],
                [[-20, 0], [-55, 50], [-80, 50]],
                [[-15, 0], [-50, 50], [-70, 50]],
                [[-10, 0], [-25, 25], [-25, 45]]
              ]}
            ></Circuits>
            {/* right circuits */}
            <Circuits 
              startX={655} 
              startY={345} 
              topIncrement={15} 
              circuits={[
                [[15, 0], [30, -25], [30, -50]],
                [[20, 0], [45, -40], [60, -40]],
                [[25, 0], [50, -40], [70, -40]],
                [[30, 0], [55, -40], [80, -40]],
                [[35, 0], [60, -40], [95, -40], [160, -170]],
                [[40, 0], [65, -40], [100, -40], [160, -160]],
                [[45, 0], [70, -40], [105, -40], [160, -150]],
                [[30, 0], [25, 0]],
                [[20, 0], [35, 0]],
                [[45, 0], [60, 20], [75, 20]],
                [[40, 0], [55, 20], [65, 20]],
                [[35, 0], [50, 20], [75, 20]],
                [[25, 0], [60, 50], [70, 50]],
                [[20, 0], [55, 50], [80, 50]],
                [[15, 0], [50, 50], [70, 50]],
                [[10, 0], [30, 25], [30, 35]]
              ]}
            ></Circuits>
            {/* Dialog boxes */}
            <MainDialog
              open={openMain}
              handleOpen={handleOpenMain}
              handleOpenTech={handleOpenTech}
              handleOpenBlog={handleOpenBlog}
              handleOpenHobbies={handleOpenHobbies}
              handleOpenPets={handleOpenPets}
            ></MainDialog>
            <TechDialog open={openTech} handleOpen={handleOpenTech} goBack={goBack}></TechDialog>
            <HobbyDialog open={openHobbies} handleOpen={handleOpenHobbies} goBack={goBack}></HobbyDialog>
            <PetDialog open={openPets} handleOpen={handleOpenPets} goBack={goBack}></PetDialog>
          </div>
        </MapInteractionCSS>
      </div>
    </div>
  )
}

export default App
