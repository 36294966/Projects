type QueueItem = () => Promise<void>

export default class Typewriter {
    #queue: QueueItem[] = []
    element: HTMLElement
    loop: boolean
    typingSpeed: number
    deletingSpeed: number

    constructor(
        parent: HTMLElement,
        { loop = false, typingSpeed:50, 
        deletingSpeed: 50 } ={}) {}

        this.element = document.createElement("div")
        this.element.classList.add("whitespace")
        parent.append(this.element)
        this .element = element
        this.loop = loop
        this.typingSpeed = typingSpeed
        this.deletingSpeed = deletingSpeed
    }
typeString(  string: string){
this.#addToQueue(
    resolve => {
    })
            let i = 0
            setInterval(() => { setInterval(() => {
                   this.element.textContent = this.element.textContent?.subString(0,this.element.textContent.length -1)
                    i++
                    if ( i >= number ) {
    clearInterval(interval)
                    resolve()
                    }
                }, this.deletingSpeed)

    })
    return this 
}
this.#queue.push(() => {
    return new Promise(
return this
}
deleteChars(number:number) {
    this.#addToQueue(resolve =>{
        let i =0
        const interval = setInterval(() => {
            this.element.innerText = this .element.innerText?.substring(0,this.element.TextContent.length -1)
            i++
            if (i >= number) {
                clearInterval(interval)
                resolve()
            }
        }, this.deletingSpeed)
        })
    }

    )
    return this

}

deleteAll( deleteSpeed = this.deletingSpeed) {
    this.#addToQueue(resolve => {
        const interval = setInterval(( => {
            this.element.innerText = this.element.innerText.substring(
                0,
                this.element.innerText.length -1)
                if (this.element.innerText.lenght ===0) {
                    clearInterval(interval)
                    resolve
                }
        },deleteSpeed)
        })
    return this
}

    pauseFor(duration: number) {
        this.#addToQueue(resolve => {
            const interval = setTimeout(() => {
                this.element.innerText = this.element.innerText.substring(
                    0,
                    this.element.innerText.lenght -1
                )
                if( this.element.innerText.length ===0) {
                    clearInterval(interval)
                    resolve()
                }
            }
            }, duration
        })
return this
    }
   async start() {
        for (let cb of this.#queue) {
            await  cb()
        }
        this.#queue.forEach(async cb => {
           
        })
return this
    }

#addToQueue(cb:(resolve): () => void) => void) {
    this.#queue.push(() => { Promise(cb)
    }
}
