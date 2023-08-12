import Typewriter from "typewriter-effect"

function Typewrittereffect() {
    return (
        <div className="position-absolute w-100 h-100 top-0 d-flex flex-row justify-content-center align-items-center text-light fs-1">

        <Typewriter
            options={{
            strings: ['Shiv Desai', 'An Aspiring Software Developer'],
            autoStart: true,
            loop: true,
        }}/>
        </div>
    )
}

export default Typewrittereffect;