import React from "react";

function cookie_clicker() {
    return {
        title: "Cookie Clicker Clone",
        description:
            "Recreated core Cookie Clicker mechanics in Unity using Clean Architecture, MVC and TDD to build a fully modular and unit-tested gameplay system.",
        logo: "https://worldvectorlogo.com/logos/unity-69.svg",
        github: "https://github.com/DiegoRuizGil/cookie-clicker-clone.git",
        itchio: "https://diegorg64.itch.io/cookie-clicker-clone",
        banner: "./cookie.png",
        body: (
            <React.Fragment>
                <div>Esto es una prueba para el body de un proyecto</div>
            </React.Fragment>
        )
    }
}

function godai() {
    return {
        title: "GODAI",
        description:
				"Master's final project as Lead Programmer. Developed core gameplay, systems and game structure in a metroidvania inspired by Hollow Knight, Blasphemous, Metroid and Castelvania.",
        logo: "https://worldvectorlogo.com/logos/unity-69.svg",
        github: "https://github.com/Rapoporras/Izanagi_TLW.git",
        itchio: "https://rapoporras.itch.io/godai",
        banner: "./godai.png",
        body: (
            <React.Fragment>
                <div className="modal-section">📌 About</div>
                <div className="modal-content-text"><b>Godai</b> is an exciting 2D video game that pays homage to the rich Japanese mythology. In this epic journey, players take on the rol of Hinata, a brave warrior who enters a world full of mysteries, seeking to free the gods trapped by the evil Oni King, Shuten Doji.</div>

                <div className="modal-section">🚀 Main features</div>
                <div className="modal-subsection">🌊 Godai elemental power system</div>
                <div className="modal-content-text">Control fire, water, air and earth to face unique challenges and defeat powerful enemies.</div>
                <div className="modal-subsection">🎨 Art inspired by japanese culture</div>
                <div className="modal-content-text">Dive in a beautiful designed world, full of details that evoke traditional japanese aesthetics.</div>
                <div className="modal-subsection">⚔️ Challenging exploration</div>
                <div className="modal-content-text">Solve intricate puzzles, face formidable enemies and explore interconnected levels full of secrets.</div>
                <div className="modal-subsection">🗺️ Interconnected levels</div>
                <div className="modal-content-text">Travel through unique regions, each one more dangerous and fascinating than the last, with challenges that will prove your skills.</div>

                <div className="modal-section">🛠️ Contributions</div>
                <div className="modal-content-text">
                    <b>Lead Programmer</b>, responsible for core gameplay systems and technical implementations:
                    <ul>
                        <li><b>Player Controller</b> — Movement physics, combat system, and ability management.</li>
                        <li><b>Entities Health System</b> — Damage logic using hitboxes and hurtboxes.</li>
                        <li><b>Game Mechanics</b> — Environment interaction.</li>
                        <li><b>Dialogue System</b> — Implemented using [Ink](https://www.inklestudios.com/ink/), supporting variable storage and function calls.</li>
                        <li><b>Save System</b> — Data serialization and deserialization using JSON.</li>
                        <li><b>Scene Loader</b> — Scene transitions with dependency management.</li>
                        <li>
                            <b>Event & Global Variable System</b> — Designed with Scriptable Objects, based in my own implementations:
                            <ul>
                                <li><a href="https://github.com/DiegoRuizGil/so-game-events.git">SO Game Events Architecture</a></li>
                                <li><a href="https://github.com/DiegoRuizGil/unity-global-variables.git">Unity Global Variables</a></li>
                            </ul>
                        </li>
                        <li><b>Collectibles</b> — Health and attack upgrades.</li>
                        <li><b>Final Boss (Seiryu)</b> — Multi-phase behaviour and attack logic.</li>
                        <li><b>UI Implementation</b> — Player HUD, main menu, pause menu, loading screens, and dialogue interface.</li>
                    </ul>
                </div>
                
            </React.Fragment>
        )
    }
}

function project_3() {
    return {
        title: "Project 3",
        description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
        logo: "https://worldvectorlogo.com/logos/unity-69.svg",
        github: "https://github.com/Rapoporras/Izanagi_TLW.git",
        itchio: "https://rapoporras.itch.io/godai",
        banner: "",
        body: (
            <React.Fragment>
                <div>Esto es una prueba para el body de un proyecto</div>
            </React.Fragment>
        )
    }
}

function project_4() {
    return {
        title: "Project 4",
        description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
        logo: "https://worldvectorlogo.com/logos/unity-69.svg",
        github: "https://github.com/Rapoporras/Izanagi_TLW.git",
        itchio: "https://rapoporras.itch.io/godai",
        banner: "",
        body: (
            <React.Fragment>
                <div>Esto es una prueba para el body de un proyecto</div>
            </React.Fragment>
        )
    }
}

function project_5() {
    return {
        title: "Project 5",
        description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
        logo: "https://worldvectorlogo.com/logos/unity-69.svg",
        github: "https://github.com/Rapoporras/Izanagi_TLW.git",
        itchio: "https://rapoporras.itch.io/godai",
        banner: "",
        body: (
            <React.Fragment>
                <div>Esto es una prueba para el body de un proyecto</div>
            </React.Fragment>
        )
    }
}



const myProjects = [cookie_clicker, godai, project_3, project_4, project_5];

export default myProjects;