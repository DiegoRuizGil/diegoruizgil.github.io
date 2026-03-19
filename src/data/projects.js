import React from "react";

function pokemon_battle_clone() {
    return {
        title: "Pokémon Battle Clone",
        description:
            "Turn-based Pokémon battle system clone built in Unity, focused on clean architecture, testability, and scalable design of complex game mechanics.",
        logo: "https://worldvectorlogo.com/logos/unity-69.svg",
        github: "https://github.com/DiegoRuizGil/pokemon-battle-clone",
        itchio: "https://diegorg64.itch.io/pokemon-battle-clone",
        banner: "./projects/pokemon_battle_clone.png",
        body: (
            <React.Fragment>
                <div className="modal-section">📌 About</div>
                <div className="modal-content-text">
                    <p><b>Pokémon Battle Clone</b> is a Unity project that recreates the core mechanics of the Pokémon turn-based battle system, focusing on gameplay rules, flexibility, and system design rather than visual fidelity.</p>
                    <p>The goal of the project is to explore how to design a complex, rule-driven system using Clean Architecture principles, ensuring that battle logic remains completely independent from Unity and can be easily extended, tested, and maintained.</p>
                </div>

                <div className="modal-section">🚀 Main features</div>
                <div className="modal-subsection">⚔️ Turn-Based Battle System</div>
                <div className="modal-content-text">Implements a full turn resolution flow, including action selection, priority handling, and battle state transitions.</div>
                <div className="modal-subsection">🎮 Core Battle Actions</div>
                <div className="modal-content-text">Supports essential actions such as executing moves and switching Pokémon, following classic battle rules.</div>
                <div className="modal-subsection">🎯 Move System & Effects</div>
                <div className="modal-content-text">Moves include a variety of effects such as damage, stat modifications, healing, recoil, and conditional behaviors.</div>
                <div className="modal-subsection">🎲 Accuracy & Probabilistic Mechanics</div>
                <div className="modal-content-text">Implements accuracy checks and secondary effects with probability, replicating the uncertainty of real Pokémon battles.</div>
                <div className="modal-subsection">📊 Stat System</div>
                <div className="modal-content-text">Includes stat calculations and stage modifiers that affect battle performance dynamically.</div>
                <div className="modal-subsection">🧱 Clean Architecture Implementation</div>
                <div className="modal-content-text">Battle logic is fully isolated in a domain layer, independent from Unity, allowing it to be tested and reused without engine dependencies.</div>

                <div className="modal-section">⚙️ Tools</div>
                <div className="modal-content-text">
                    <ul>
                        <li><b>Unity</b> — Core game engine.</li>
                        <li><b>C#</b> — Main programming language.</li>
                        <li><b>Rider</b> — IDE for development and debugging.</li>
                        <li><b>Git & GitHub</b> — Version control.</li>
                        <li><b>NUnit / Unity Test Runner</b> — Automated testing.</li>
                    </ul>
                </div>

                <div className="modal-section">📚 Skills & Learnings</div>
                <div className="modal-content-text">
                    <ul>
                        <li><b>System Design for Complex Mechanics</b> — Learned how to model and structure a rule-heavy system with many interacting mechanics in a scalable way.</li>
                        <li><b>Clean Architecture in Practice</b> — Applied layered architecture to fully decouple game logic from Unity, improving maintainability and testability.</li>
                        <li><b>Domain-Driven Thinking</b> — Designed battle systems focusing on domain rules and behaviors rather than engine constraints.</li>
                        <li><b>Extensibility & Flexibility</b> — Built systems that allow adding new moves, effects, and mechanics without modifying existing code.</li>
                        <li><b>Testing Complex Interactions</b> — Gained experience testing systems with probabilistic outcomes and multiple interacting rules.</li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

function cookie_clicker() {
    return {
        title: "Cookie Clicker Clone",
        description:
            "Recreated core Cookie Clicker mechanics in Unity using Clean Architecture, MVC and TDD to build a fully modular and unit-tested gameplay system.",
        logo: "https://worldvectorlogo.com/logos/unity-69.svg",
        github: "https://github.com/DiegoRuizGil/cookie-clicker-clone.git",
        itchio: "https://diegorg64.itch.io/cookie-clicker-clone",
        banner: "./projects/cookie.png",
        body: (
            <React.Fragment>
                <div className="modal-section">📌 About</div>
                <div className="modal-content-text">
                    <p><b>Cookie Clicker Clone</b> is a Unity project that recreates the core mechanics of the classic incremental game <a href="https://cookieclicker.com/" target="_blank" rel="noreferrer">Cookie Clicker</a>, with a strong focus on <b>software architecture, code quality and testability</b> rather than visual complexity.</p>
                    <p>The goal of the project is to explore how concepts such as <b>Clean Architecture, MVC and Test-Driven Development (TDD)</b> can be applied to a game developed in Unity, keeping the game logic completely decoupled from the engine and UI layer.</p>
                </div>

                <div className="modal-section">🚀 Main features</div>
                <div className="modal-subsection">🍪 Core Incremental Gameplay</div>
                <div className="modal-content-text">Click the main cookie to generate cookies and progress through an ever-growing production system.</div>
                <div className="modal-subsection">🏭 Passive Production System</div>
                <div className="modal-content-text">Purchase buildings that automatically generate cookies over time, increasing your Cookies Per Second (CPS).</div>
                <div className="modal-subsection">🛒 Buildings & Upgrades Shop</div>
                <div className="modal-content-text">Buy buildings with dynamic pricing and unlock upgrades that enhance production and progression.</div>
                <div className="modal-subsection">🔓 Progressive Unlock System</div>
                <div className="modal-content-text">New buildings and upgrades become available based on specific progression conditions.</div>
                <div className="modal-subsection">🧱 Clean Architecture Implementation</div>
                <div className="modal-content-text">Game logic lives in a pure domain layer, completely independent from Unity-specific code.</div>
                <div className="modal-subsection">🧩 MVC-Based UI Architecture</div>
                <div className="modal-content-text">Clear separation between Models, Views, and Controllers, using DTOs to keep views passive and decoupled.</div>
                <div className="modal-subsection">🧪 Test-Driven Development (TDD)</div>
                <div className="modal-content-text">Core systems such as production, pricing, and progression rules are covered by automated unit tests.</div>

                <div className="modal-section">⚙️ Tools</div>
                <div className="modal-content-text">
                    <ul>
                        <li><b>Unity</b> — Core game engine.</li>
                        <li><b>C#</b> — Main programming language.</li>
                        <li><b>Rider</b> — IDE for development and debugging.</li>
                        <li><b>Git & GitHub</b> — Version control.</li>
                        <li><b>NUnit / Unity Test Runner</b> — Automated testing.</li>
                    </ul>
                </div>

                <div className="modal-section">📚 Skills & Learnings</div>
                <div className="modal-content-text">
                    <ul>
                        <li><b>Clean Architecture in Unity</b> — Learned how to structure a Unity project using layered architecture, keeping business logic independent from the engine.</li>
                        <li><b>Test-Driven Development</b> — Applied TDD to game systems, improving confidence, maintainability, and long-term scalability.</li>
                        <li><b>MVC and UI Decoupling</b> — Designed a UI architecture where views contain no game logic and rely entirely on controllers and DTOs.</li>
                        <li><b>Scalable System Design</b> — Built systems with extensibility in mind, making it easy to add new buildings, upgrades, or mechanics without modifying existing code.</li>
                        <li><b>Incremental Game Design</b> — Gained deeper understanding of progression systems, balancing, and economy design in idle/incremental games.</li>
                    </ul>
                </div>
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
        banner: "./projects/godai.png",
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
                        <li><b>Dialogue System</b> — Implemented using <a href="https://www.inklestudios.com/ink/" target="_blank" rel="noreferrer">Ink</a>, supporting variable storage and function calls.</li>
                        <li><b>Save System</b> — Data serialization and deserialization using JSON.</li>
                        <li><b>Scene Loader</b> — Scene transitions with dependency management.</li>
                        <li>
                            <b>Event & Global Variable System</b> — Designed with Scriptable Objects, based in my own implementations:
                            <ul>
                                <li><a href="https://github.com/DiegoRuizGil/so-game-events.git" target="_blank" rel="noreferrer">SO Game Events Architecture</a></li>
                                <li><a href="https://github.com/DiegoRuizGil/unity-global-variables.git" target="_blank" rel="noreferrer">Unity Global Variables</a></li>
                            </ul>
                        </li>
                        <li><b>Collectibles</b> — Health and attack upgrades.</li>
                        <li><b>Final Boss (Seiryu)</b> — Multi-phase behaviour and attack logic.</li>
                        <li><b>UI Implementation</b> — Player HUD, main menu, pause menu, loading screens, and dialogue interface.</li>
                    </ul>
                </div>

                <div className="modal-section">⚙️ Tools</div>
                <div className="modal-content-text">
                    <ul>
                        <li><b>Unity</b> — Core game engine used for development.</li>
                        <li><b>Rider</b> — Main IDE for writing and debugging C# code.</li>
                        <li><b>Git</b> — Version control to manage and track code changes.</li>
                        <li><b>Notion & Trello</b> — Project management and documentation.</li>
                        <li><b>Discord</b> — Team communication and coordination.</li>
                    </ul>
                </div>

                <div className="modal-section">📚 Skills & Learnings</div>
                <div className="modal-content-text">
                    <ul>
                        <li><b>Team Leadership</b> — Led the programming team and coordinated technical decisions.</li>
                        <li><b>Gameplay Programming</b> — Developed core mechanics and complex systems for a metroidvania game.</li>
                        <li><b>Cross-Discipline Collaboration</b> — Worked closely with designers and artists to ensure seamless integration.</li>
                        <li><b>Performance Optimization</b> — Enhanced systems scalability and improve game performance.</li>
                    </ul>
                </div>
                
            </React.Fragment>
        )
    }
}

function tactics_wars() {
    return {
        title: "Tactics Wars",
        description:
            "Bachelor’s final project as a solo programmer. Tactics Wars is a turn-based strategy game set in a medieval world, featuring resource management, army command, and grid-based movement.",
        logo: "https://worldvectorlogo.com/logos/unity-69.svg",
        github: "https://github.com/DiegoRuizGil/Tactics_Wars",
        itchio: "https://diegorg64.itch.io/tactics-wars",
        banner: "./projects/tactics-wars.png",
        body: (
            <React.Fragment>
                <div className="modal-section">📌 About</div>
                <div className="modal-content-text"><b>Tactics Wars</b> is a turn-based strategy video game set in a medieval environment, where you must gather various resources and organize an army to defeat your opponent. The entire map is represented with a grid, similar to a chessboard, where units can move or build buildings. Your objective will be to destroy your rival's urban center to achieve victory.</div>

                <div className="modal-section">🚀 Main features</div>
                <div className="modal-subsection">⚔️ Strategic turn-based combat</div>
                <div className="modal-content-text">Command your army in tactical battles, where positioning and decision-making determine victory.</div>
                <div className="modal-subsection">🏰 Base building and resource management</div>
                <div className="modal-content-text">Gather resources, construct buildings, and strengthen your army to overcome your opponent.</div>
                <div className="modal-subsection">🎲 Grid-based movement system</div>
                <div className="modal-content-text">Control units on a chessboard-like grid, where every move matters in your path to victory.</div>
                <div className="modal-subsection">🏆 Conquer and dominate</div>
                <div className="modal-content-text">Destroy your enemy’s stronghold and claim ultimate victory in a battle of wits and strategy.</div>

                <div className="modal-section">🛠️ Contributions</div>
                <div className="modal-content-text">
                    <b>Lead Programmer</b>, responsible for core gameplay systems and technical implementations:
                    <ul>
                        <li><b>Grid-Based Map System</b> — Implemented a custom grid system for unit movement and building placement.</li>
                        <li><b>Turn-Based Logic</b> — Designed and programmed the turn-based mechanics govering all interactions.</li>
                        <li><b>Units & Buildings</b> — Created and balanced all troops and structures, defining their stats and costs.</li>
                        <li><b>Enemy AI</b> — Developed AI using Behaviour Trees and A*^pathfinding for strategic decision-making.</li>
                        <li><b>Save System</b> — Implemented a save/load system to persist game progress.</li>
                        <li><b>Scene Loader</b> —  Managed sound implementation using Unity’s Audio Listeners.</li>
                    </ul>
                </div>

                <div className="modal-section">⚙️ Tools</div>
                <div className="modal-content-text">
                    <ul>
                        <li><b>Unity</b> — Core game engine used for development.</li>
                        <li><b>Rider</b> — Main IDE for writing and debugging C# code.</li>
                        <li><b>Git</b> — Version control to manage and track code changes.</li>
                        <li><b>Notion & Trello</b> — Project management and documentation.</li>
                        <li><b>Aseprite</b> — Used for creating some custom assets.</li>
                    </ul>
                </div>

                <div className="modal-section">📚 Skills & Learnings</div>
                <div className="modal-content-text">
                    <ul>
                        <li><b>Project Planning</b> — Defined project scope and broke down tasks efficiently.</li>
                        <li><b>AI Development</b> — Implemented A* pathfinding and Behaviour Trees for enemy decision-making.</li>
                        <li><b>Turn-Based System</b> — Designed and developed a structured turn-based gameplay system.</li>
                        <li><b>Code Architecture</b> — Built a modular and maintainable codebase for scalability.</li>
                        <li><b>Unit Testing</b> — Ensured code reliability through automated tests.</li>
                    </ul>
                </div>
                
            </React.Fragment>
        )
    }
}

function global_variables() {
    return {
        title: "Unity Global Variables",
        description:
            "Global variables system for Unity using Scriptable Objects, allowing for easy access and management of variables across scenes.",
        logo: "https://worldvectorlogo.com/logos/unity-69.svg",
        github: "https://github.com/DiegoRuizGil/unity-global-variables",
        itchio: "https://diegorg64.itch.io/unity-global-variables",
        banner: "./projects/global-variables.png",
        body: (
            <React.Fragment>
                <div className="modal-section">📌 About</div>
                <div className="modal-content-text">
                    <p>
                        <b>Unity Global Variables</b> is a system for managing global variables in Unity using Scriptable Objects, enabling seamless access and modification across scripts and scenes directly from the Unity Editor. Inspired by Ryan Hipple’s talk <a href="https://www.youtube.com/watch?v=raQ3iHhE_Kk" target="_blank" rel="noreferrer"> Unite Austin 2017 - Game Architecture with Scriptable Objects</a>.
                    </p>
                    <p>
                        For more details on usage, check the README in the <a href="https://github.com/DiegoRuizGil/unity-global-variables" target="_blank" rel="noreferrer">GitHub repository</a>.
                    </p>
                </div>

                <div className="modal-section">🚀 Features</div>
                <div className="modal-subsection">⚡ Global Variables with Scriptable Objects</div>
                <div className="modal-content-text">Store and manage variables globally using Scriptable Objects, allowing presistent access across scenes and scripts.</div>
                <div className="modal-subsection">🛠️ Designer-Friendly Workflow</div>
                <div className="modal-content-text">Modify values directly from the Unity Editor without modifying code, enabling easier collaboration between programmers and designers.</div>
                <div className="modal-subsection">🔄 Persistent & Dynamic Data Management</div>
                <div className="modal-content-text">Keep game-wide values consistent across play sessions, with support for saving and loading variable states.</div>
                <div className="modal-subsection">🔗 Reduced Scripts Dependencies</div>
                <div className="modal-content-text">Decouple scripts by replacing direct references with global variables, improving maintainability and modularity.</div>
                <div className="modal-subsection">📊 Support for Multiple Data Types</div>
                <div className="modal-content-text">Easily define and use different variables types, such as integers, floats, booleans and more.</div>

                <div className="modal-section">⚙️ Tools</div>
                <div className="modal-content-text">
                    <ul>
                        <li><b>Unity</b> — Core game engine used for development.</li>
                        <li><b>Rider</b> — Main IDE for writing and debugging C# code.</li>
                        <li><b>Git</b> — Version control to manage and track code changes.</li>
                    </ul>
                </div>

                <div className="modal-section">📚 Skills & Learnings</div>
                <div className="modal-content-text">
                    <ul>
                        <li>Gained experience in creating reusable systems with Scriptable Objects, improving code modularity and maintainability.</li>
                        <li>Enhanced understanding of Unity’s architecture, specifically how to manage and link data across scenes.</li>
                        <li>Improved workflow for designers by enabling real-time variable modification from the Unity Editor.</li>
                        <li>Learned to implement dynamic data persistence and state management across play sessions.</li>
                    </ul>
                </div>
                
            </React.Fragment>
        )
    }
}

function so_game_events() {
    return {
        title: "SO Game Events Architecture",
        description:
            "Event system for communication between objects in a Unity scene, based on the use of Scriptable Objects.",
        logo: "https://worldvectorlogo.com/logos/unity-69.svg",
        github: "https://github.com/DiegoRuizGil/so-game-events",
        itchio: "https://diegorg64.itch.io/so-game-events-architecture",
        banner: "./projects/so-game-events.png",
        body: (
            <React.Fragment>
                <div className="modal-section">📌 About</div>
                <div className="modal-content-text">
                    <p>
                        This project implements an event system for communication between objects in a Unity scene using Scriptable Objects, allowing for decoupled interactions and reducing class dependencies. Inspired by Ryan Hipple's talk <a href="https://www.youtube.com/watch?v=raQ3iHhE_Kk" target="_blank" rel="noreferrer">Unite Austin 2017 - Game Architecture with Scriptable Objects</a>, this system provides an efficient way to trigger events and manage game logic in a clean and modular way.
                    </p>
                    <p>
                        For more information on how to use the SO Game Event Architecture, refer to the README in the <a href="https://github.com/DiegoRuizGil/so-game-events" target="_blank" rel="noreferrer">GitHub project</a>.
                    </p>
                </div>

                <div className="modal-section">🚀 Features</div>
                <div className="modal-subsection">⚡ Decoupled Event Communication</div>
                <div className="modal-content-text">Enables objects in Unity to communicate without direct dependencies, promoting a cleaner and more modular architecture.</div>
                <div className="modal-subsection">🔄 Flexible Event Triggers</div>
                <div className="modal-content-text">Allows for easy triggering of events from different parts of the game, with minimal coupling between game components.</div>
                <div className="modal-subsection">🎮 Seamless Integration</div>
                <div className="modal-content-text">Integrates easily with existing Unity projects, enabling developers to quickly implement event-driven systems with Scriptable Objects.</div>
                <div className="modal-subsection">🛠️ Modular Design</div>
                <div className="modal-content-text">The system is highly modular, allowing for easy customization and extension to fit the specific needs of a project.</div>

                <div className="modal-section">⚙️ Tools</div>
                <div className="modal-content-text">
                    <ul>
                        <li><b>Unity</b> — Core game engine used for development.</li>
                        <li><b>Rider</b> — Main IDE for writing and debugging C# code.</li>
                        <li><b>Git</b> — Version control to manage and track code changes.</li>
                    </ul>
                </div>

                <div className="modal-section">📚 Skills & Learnings</div>
                <div className="modal-content-text">
                    <ul>
                        <li>Deepened understanding of event-driven architecture and decoupling systems in game development.</li>
                        <li>Gained experience with Scriptable Objects to create modular and reusable systems.</li>
                        <li>Developed proficiency in designing flexible and scalable event systems within Unity.</li>
                        <li>Learned to integrate event-based systems seamlessly into existing codebases, improving maintainability.</li>
                        <li>Gained hands-on experience with implementing low-dependency communication methods between game objects.</li>
                    </ul>
                </div>
                
            </React.Fragment>
        )
    }
}

function character_controller() {
    return {
        title: "Character Controller - Platformer 2D",
        description:
            "A 2D platformer character controller built with Unity’s Rigidbody2D, featuring physics-based movement, a state machine for player actions, and full integration with the New Input System.",
        logo: "https://worldvectorlogo.com/logos/unity-69.svg",
        github: "https://github.com/DiegoRuizGil/Platformer-2D-Character-Controller-Unity",
        itchio: "https://diegorg64.itch.io/character-controller-platformer-2d",
        banner: "./projects/character-controller.png",
        body: (
            <React.Fragment>
                <div className="modal-section">📌 About</div>
                <div className="modal-content-text">
                    <p>
                        This 2D platformer character controller is built using Unity’s Rigidbody2D physics, applying forces for smooth and dynamic movement. Inspired by the <a href="https://www.youtube.com/playlist?list=PLRsowSGWU4GiYNO6kgDMSb7cied6LWDnV">Dawnsour</a> tutorial series, it integrate Unity’s New Input System and features a state machine to manage player actions efficiently. All movement parameters are customizable, making it easy to adapt to different gameplay style.
                    </p>
                    <p>
                        For more details, check out the project on <a href="https://github.com/DiegoRuizGil/Platformer-2D-Character-Controller-Unity">GitHub</a> and <a href="https://diegorg64.itch.io/character-controller-platformer-2d">itch.io</a>.
                    </p>
                </div>

                <div className="modal-section">🚀 Features</div>
                <div className="modal-subsection">🕹️ State-based movement system</div>
                <div className="modal-content-text">Implements a state machine to manage player actions smoothly and efficiently.</div>
                <div className="modal-subsection">🎮 New Input System integration</div>
                <div className="modal-content-text">Uses Unity’s New Input System for modern and flexible input handling.</div>
                <div className="modal-subsection">⚡ Physics-based movement</div>
                <div className="modal-content-text">Applies Rigidbody2D forces for dynamic and natural character motion.</div>
                <div className="modal-subsection">🧩 Modular & customizable</div>
                <div className="modal-content-text">All movement parameters are adjustable for easy tweaking and adaptation.</div>

                <div className="modal-section">⚙️ Tools</div>
                <div className="modal-content-text">
                    <ul>
                        <li><b>Unity</b> — Core game engine used for development.</li>
                        <li><b>Rider</b> — Main IDE for writing and debugging C# code.</li>
                        <li><b>Git</b> — Version control to manage and track code changes.</li>
                    </ul>
                </div>

                <div className="modal-section">📚 Skills & Learnings</div>
                <div className="modal-content-text">
                    <ul>
                        <li>Designed a state-based architecture to manage character movement effectively.</li>
                        <li>Learned and implement techniques like coyote time and input buffering to enhance player control.</li>
                        <li>Used Rigidbody2D forces to create smooth and natural player movement.</li>
                        <li>Made movement fully customizable through exposed variables for flexibility.</li>
                        <li>Integrated Unity’s New Input System for modern and scalable input handling.</li>
                        <li>Built a clean and reusable codebase to easily expand character abilities.</li>
                    </ul>
                </div>
                
            </React.Fragment>
        )
    }
}

function pathfinding() {
    return {
        title: "A* Pathfinding",
        description:
            "A Unity-based implementation of the A pathfinding algorithm for 2D games, featuring a node-based grid system and a custom grid generation tool integrated with Unity’s Tilemap and obstacle detection.",
        logo: "https://worldvectorlogo.com/logos/unity-69.svg",
        github: "https://github.com/DiegoRuizGil/A-Star-Pathfinding-Unity",
        itchio: "https://diegorg64.itch.io/a-pathfinding-unity-2d",
        banner: "./projects/pathfinding.png",
        body: (
            <React.Fragment>
                <div className="modal-section">📌 About</div>
                <div className="modal-content-text">
                    <p>
                        This projects is a unity implementation of the A* algorithm for pathfinding in 2D games. It utilizes a node-based grid to efficiently compute optimal paths from a start point to a designated goal.
                    </p>
                    <p>
                        Additionally, it includes a custom grid generation tool allows users to define the grid area, considering obstacles or walls marked within unity's tilemap system.
                    </p>
                </div>

                <div className="modal-section">🚀 Features</div>
                <div className="modal-subsection">🗺️ A* Pathfinding Algorithm</div>
                <div className="modal-content-text">Efficient path calculation using a node-based grid system for 2D games.</div>
                <div className="modal-subsection">🛠️ Custom Grid Generation</div>
                <div className="modal-content-text">Easily create and adjust the grid dynamically, integrating with Unity’s Tilemap system.</div>
                <div className="modal-subsection">🚧 Obstacle Detection</div>
                <div className="modal-content-text">Automatically detects walls and obstacles to refine path calculations.</div>

                <div className="modal-section">⚙️ Tools</div>
                <div className="modal-content-text">
                    <ul>
                        <li><b>Unity</b> — Core game engine used for development.</li>
                        <li><b>Rider</b> — Main IDE for writing and debugging C# code.</li>
                        <li><b>Git</b> — Version control to manage and track code changes.</li>
                    </ul>
                </div>

                <div className="modal-section">📚 Skills & Learnings</div>
                <div className="modal-content-text">
                    <ul>
                        <li>Gained practical experience implementing and optimizing A* for pathfinding in 2D grid-based environments.</li>
                        <li>Developed a grid generation tool to streamline level design and obstacle detection.</li>
                    </ul>
                </div>
                
            </React.Fragment>
        )
    }
}


const myProjects = [pokemon_battle_clone, cookie_clicker, godai, tactics_wars, global_variables, so_game_events, character_controller, pathfinding];

export default myProjects;