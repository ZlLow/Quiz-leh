import {useState} from "react";
import Link from "next/link";
import Image from "next/image";

//CSS Modules
import background from "../styles/Background.module.css";
import image from "../styles/Image.module.css"
import animationStyle from "../styles/Animation.module.css"

import {motion} from "framer-motion";
import Card from "@/components/card/Card";
export default function Home() {
    const [overlaying, setOverlay] = useState(false);
  return (
      <>
          <div className={background.default}>
              <div className="d-flex flex-wrap flex-fill justify-content-center align-content-center">
                  <div className="hstack gap-5">
                      <Card href="/play" image="/play_arrow.svg" width={200} height={175} alt="Play">
                              Play
                      </Card>
                      <Card href="/manage" image="/library.svg" width={200} height={175} alt="Manage" style={image.manage}>
                          Manage
                      </Card>
                  </div>
              </div>
          </div>
      </>
  )
}
