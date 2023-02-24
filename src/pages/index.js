import {useState} from "react";
import Link from "next/link";
import Image from "next/image";

// Components
import Card from "@/components/cards/Card";

//CSS Modules
import background from "@/styles/Background.module.css";
import icon from "@/styles/Icon.module.css"

import {motion} from "framer-motion";

export default function Home() {
    const [overlaying, setOverlay] = useState(false);
  return (
      <>
          <div className={background.home}>
              <div className="d-flex flex-wrap flex-fill justify-content-center align-content-center">
                  <div className="hstack gap-5">
                      <Card href="/play" image="/play_arrow.svg" width={200} height={175} alt="Play">
                              Play
                      </Card>
                      <Card href="/manage" image="/library.svg" width={200} height={175} alt="Manage" style={icon.manage}>
                          Manage
                      </Card>
                  </div>
              </div>
          </div>
      </>
  )
}
