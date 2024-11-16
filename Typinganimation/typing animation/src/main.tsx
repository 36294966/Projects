import "./style.css"
import Typewriter from "./Typewriter"

const typewriter = new Typewriter(document.body,{loop:true})

typewriter
.typeString("where do I start?")
.pauseFor(1000)
.typeString("/n/nfunction")
.deleteChars(7)
.typeString("const temp")
.pauseFor(150)
.deleteAll(10)
.typeString("Why is this so hard?")
.pauseFor(1000)
.typeString("/n/nThere has to be an easier way")
.pauseFor(1000)
.deleteAll(10)
.start()