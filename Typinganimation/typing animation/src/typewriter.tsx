type QueueItem = () => Promise<void>

export default class Typewriter {
    #queue: QueueItem[] = []
    element: HTMLElement
    loop: boolean
    typingSpeed: number
    deletingSpeed: number

    constructor(element: HTMLElement, { loop = false, typingSpeed:50, 
        deletingSpeed: 50 } ={}) {}

        this .element = element
        this.loop = loop
        this.typingSpeed = typingSpeed
        this.deletingSpeed = deletingSpeed
    }
typeString(  string: string){
this.#queue.push(() => {
    return new Promise((resolve,reject) => {
    console.log(string)
    resolve()
    })
})
return this
}
deleteChars(number:number) {
    return this

}

deleteAll( deleteSpeed = this.deletingSpeed) {
    return this
}

    pauseFor(duration: number) {
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


