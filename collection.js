// if (localStorage.getItem("theme") === "dark") {
//     document.body.classList.add("dark-mode");
// }

// document.getElementById("darkModeBtn").addEventListener("click", function () {
//     document.body.classList.toggle("dark-mode");

//     // optional: save preference
//     if (document.body.classList.contains("dark-mode")) {
//         localStorage.setItem("theme", "dark");
//     } else {
//         localStorage.setItem("theme", "light");
//     }
// });
// dark mode

const collection = [
    {
        title: "The Gray Man",
        genre: "Action",
        rating: 5,
        year: 2022,
        director: "Anthony Russo, Joe Russo",
        streaming_platforms: ["Netflix"],
        actors: ["Ryan Gosling", "Chris Evans", "Ana de Armas"],
        runtime: "2h 9m",
        description:
            "A skilled CIA operative uncovers dangerous government secrets and becomes the target of a relentless international manhunt led by a ruthless assassin.",
        image: "grayman.jpg",
        featured:true
    },
    {
        title: "Fast and Furious Presents: Hobbs and Shaw",
        genre: "Action",
        rating: 5,
        year: 2019,
        director: "David Leitch",
        streaming_platforms: ["Netflix"],
        actors: ["Dwayne Johnson", "Jason Statham", "Vanessa Kirby"],
        runtime: "2h 17m",
        description:
            "Former enemies Luke Hobbs and Deckard Shaw are forced to team up when a cyber-enhanced villain threatens the world with a deadly virus.",
        image: "hobbshaw.jpg",
        featured:false
    },
    {
        title: "The Beekeeper",
        genre: "Action",
        rating: 5,
        year: 2024,
        director: "David Ayer",
        streaming_platforms: ["Hulu"],
        actors: ["Jason Statham", "Josh Hutcherson", "Jeremy Irons"],
        runtime: "1h 45m",
        description:
            "After a close friend falls victim to a massive scam operation, a quiet beekeeper with a mysterious past begins a brutal quest for revenge. As he takes down powerful criminals, secrets about his former life start to surface.",
        image: "bee.jpg",
        featured:false

    },
    {
        title: "Heads of State",
        genre: "Action",
        rating: 4.5,
        year: 2025,
        director: "Ilya Naishuller",
        streaming_platforms: ["Prime Video"],
        actors: ["Idris Elba", "John Cena", "Priyanka Chopra Jonas"],
        runtime: "1h 53m",
        description:
            "When world leaders become the targets of a dangerous global threat, two completely different political figures must work together to survive.",
        image: "state.jpg",
        featured:false

    },
    {
        title: "Zootopia 2",
        genre: "Kids",
        rating: 4.1,
        year: 2025,
        director: "Jared Bush, Byron Howard",
        streaming_platforms: ["Disney+"],
        actors: ["Ginnifer Goodwin", "Jason Bateman", "Andy Samberg"],
        runtime: "1h 48m",
        description:
            "Judy Hopps and Nick Wilde return for another adventure in the busy animal city of Zootopia. As they investigate a new mystery, the pair face unexpected challenges that test their friendship and detective skills.",
        image: "zoo.jpg",
        featured:false
    },
    {
        title: "Puss In Boots Last Wish",
        genre: "Kids",
        rating: 4,
        year: 2022,
        director: "Joel Crawford, Januel Mercado ",
        streaming_platforms: ["Peacock"],
        actors: ["Antonio Banderas", "Salma Hayek", "Florence Pugh"],
        runtime: "1h 42m",
        description:
            "After discovering he has only one life left, the fearless Puss in Boots sets out on a journey to find a magical wishing star that could restore his lost lives. Along the way, he faces dangerous enemies while learning the value of friendship and courage.",
        image: "wish.jpg",
        featured:false
    },
    {
        title: "Cars 2",
        genre: "Kids",
        rating: 5,
        year: 2011,
        director: "John Lasseter",
        streaming_platforms: ["Disney+"],
        actors: ["Owen Wilson", "Emily Mortimer", "Micheal Caine"],
        runtime: "1h 46m",
        description:
            "Lightning McQueen heads overseas to compete in an international racing competition, but Mater accidentally becomes involved in a secret spy mission.",
        image: "cars2.jpg",
        featured:true
    },
    {
        title: "Bad Guys 2",
        genre: "Kids",
        rating: 4.8,
        year: 2025,
        director: "Pierre Perifel",
        streaming_platforms: ["Netflix"],
        actors: ["Sam Rockwell", "Awkwafina", "Anthony Ramos"],
        runtime: "1h 44m",
        description:
            "The Bad Guys return for another hilarious adventure as the former criminals try to continue their new lives as heroes. Their latest mission quickly spirals into chaos when they encounter a fresh group of dangerous rivals.",
        image: "badguys.jpg",
        featured:false
    },
    {
        title: "People We Meet On Vacation",
        genre: "Romance",
        rating: 4.3,
        year: 2026,
        director: "Brett Haley",
        streaming_platforms: ["Netflix"],
        actors: ["Tom Bylth", "Emily Bader", "Miles Heizer"],
        runtime: "1h 58m",
        description:
            "Two best friends with opposite personalities reunite for one last vacation after years of shared summer trips. As old memories resurface, they begin to realize their relationship may have always been more than friendship.",
        image: "vacation.jpg",
        featured:false
    },
    {
        title: "Purple Hearts",
        genre: "Romance",
        rating: 3.9,
        year: 2022,
        director: "Elizabeth Allen Rosenbaum",
        streaming_platforms: ["Netflix"],
        actors: ["Nicholas Galitzine", "Sofia Carson", "Nicholas Duvernay"],
        runtime: "2h 2m",
        description:
            "An aspiring musician and a struggling Marine agree to a fake marriage for financial benefits, but their arrangement slowly develops into a real emotional connection.",
        image: "purpleheart.jpg",
        featured:false
    },
    {
        title: "My Oxford Year",
        genre: "Romance",
        rating: 3.7,
        year: 2025,
        director: "Iain Morris",
        streaming_platforms: ["Netflix"],
        actors: ["Sofia Carson", "Corey Mylchreest", "Dougray Scott"],
        runtime: "1h 52m",
        description:
            "An ambitious American student moves to Oxford University to pursue her dream program but unexpectedly falls in love with a charming local man, changing the future she planned for herself.",
        image: "oxford.jpg",
        featured:false
    },
    {
        title: "My Fault: London",
        genre: "Romance",
        rating: 4.4,
        year: 2025,
        director: "Dani Girdwood, Charlotte Fassler",
        streaming_platforms: ["Prime Video"],
        actors: ["Asha Banks", "Matthew Broome", "Eve Macklin"],
        runtime: "1h 59m",
        description:
            "In a futuristic society obsessed with entertainment, a desperate man enters a deadly televised competition where contestants are hunted for the public’s enjoyment. As he fights to survive, he becomes a symbol of rebellion against the system.",
        image: "london.jpg",
        featured:true
    },
    {
        title: "The Running Man",
        genre: "Dystopian",
        rating: 4.6,
        year: 2025,
        director: "Edgar Wright",
        streaming_platforms: ["Paramount+"],
        actors: ["Glen Powell", "Josh Brolin", "Colman Domingo"],
        runtime: "2h 9m",
        description:
            "After moving to London with her mother, a rebellious teenager struggles to adjust to her new wealthy lifestyle while forming a complicated connection with her stepbrother. Their relationship grows increasingly intense as family tensions rise.",
        image: "running.jpg",
        featured:true
    },
    {
        title: "Edge of Tomorrow",
        genre: "Dystopian",
        rating: 5,
        year: 2014,
        director: "Doug Liman",
        streaming_platforms: ["HBO Max"],
        actors: ["Tom Cruise", "Emily Blunt", "Bill Paxton"],
        runtime: "1h 53m",
        description:
            "A military officer with little combat experience becomes trapped in a time loop during an alien invasion, reliving the same deadly battle repeatedly while trying to save humanity.",
        image: "tomorrow.jpg",
        featured:false
    },
    {
        title: "The Hunger Games",
        genre: "Dystopian",
        rating: 5,
        year: 2012,
        director: "Gary Ross",
        streaming_platforms: ["Peacock"],
        actors: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth"],
        runtime: "2h 22m",
        description:
            "Katniss Everdeen volunteers to take her sister’s place in the Hunger Games, a brutal televised competition where teenagers fight for survival in a dystopian society.",
        image: "games.jpg",
        featured:false
    },
    {
        title: "Alita: Battle Angel",
        genre: "Dystopian",
        rating: 4.5,
        year: 2019,
        director: "Robert Rodriguez",
        streaming_platforms: ["Hulu"],
        actors: ["Rosa Salazar", "Christoph Waltz", "Keean Johnson"],
        runtime: "2h 2m",
        description:
            "A cyborg with no memory of her past is rebuilt by a scientist and discovers extraordinary fighting abilities while uncovering secrets about her identity and the futuristic world around her.",
        image: "angel.png",
        featured:false
    },
    {
        title: "Captain America: The Winter Soldier",
        genre: "Superhero",
        rating: 5,
        year: 2014,
        director: "Anthony Russo, Joe Russo",
        streaming_platforms: ["Disney+"],
        actors: ["Chris Evans", "Scarlett Johansson", "Sebastian Stan"],
        runtime: "2h 16m",
        description:
            "Steve Rogers uncovers a massive conspiracy within S.H.I.E.L.D. while facing a mysterious assassin known as the Winter Soldier, forcing him to question who he can trust.",
        image: "soilder.jpg",
        featured:false
    },
    {
        title: "Black Panther 1",
        genre: "Superhero",
        rating: 5,
        year: 2018,
        director: "Ryan Coogler",
        streaming_platforms: ["Netflix"],
        actors: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
        runtime: "2h 14m",
        description:
            "After becoming king of Wakanda, T’Challa must defend his nation and the Black Panther mantle from a challenger connected to his family’s past.",
        image: "panther.jpg",
        featured:false
    },
    {
        title: "Black Widow",
        genre: "Superhero",
        rating: 5,
        year: 2021,
        director: "Cate Shortland",
        streaming_platforms: ["Disney+"],
        actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
        runtime: "2h 14m",
        description:
            "Natasha Romanoff reunites with figures from her past while confronting the dangerous organization that trained her to become the Black Widow.",
        image: "widow.jpg",
        featured:false
    },
    {
        title: "Thunderbolts",
        genre: "Superhero",
        rating: 5,
        year: 2025,
        director: "Jake Schreier",
        streaming_platforms: ["Disney+"],
        actors: ["Florence Pugh", "Sebastian Stan", "Lewis Pullman"],
        runtime: "2h 6m",
        description:
            "A group of antiheroes and former villains are brought together for dangerous government missions, forcing them to work as a team despite their complicated pasts.",
        image: "thunderbolts.jpeg",
        featured:true
    },
];

console.log(collection[0]);

const movieGrid = document.getElementById("movieGrid");

const modal = document.getElementById("movieModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalExtra = document.getElementById("modalExtra");
const closeModal = document.getElementById("closeModal");

let currentFilter = "All";

function render(list) {
    movieGrid.innerHTML = "";

    list.forEach((movie) => {
        let badgeColor = "";
        if (movie.rating >= 4.5) {
            badgeColor = "gold";
        } else {
            badgeColor = "white";
        }

        let featuredBadge = "";

        if (movie.featured === true) {
            featuredBadge = `
        <span class="featured-badge">
            ⭐ Favorite
        </span>
    `;
        }

        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-lg-3 d-flex justify-content-center";

        const card = document.createElement("div");
        // card.classList.add("movie-card");

        card.innerHTML = `
                    <div class="movie-card">
            <div class="poster-wrapper">
                <img src="${movie.image}" class="movie-poster">
            </div>

            <div class="movie-info">

                <div class="top-row">
                    <span class="genre-tag">${movie.genre}</span> 
                    <span class="rating" style="color:${badgeColor}">
                        ⭐ ${movie.rating}
                    </span>
                </div>

                <h2 class="movie-title">${movie.title}</h2>
               

                <p class="movie-description">${movie.description}</p>
                 ${featuredBadge}

                <div class="bottom-row">
                    <span class="movie-year">${movie.year}</span>
                    <button class="view-btn">View Details</button>
                </div>
                </div>

            </div>
        `;

        card.querySelector(".view-btn").addEventListener("click", () => {
            modalTitle.textContent = movie.title;
            modalDesc.textContent = movie.description;
            modalExtra.textContent = `Director: ${movie.director} | Runtime: ${movie.runtime}`;

            modal.classList.remove("hidden");
        });

        col.appendChild(card);
        movieGrid.appendChild(col);
    });
}

function filterMovies(category) {
    if (category === "All") {
        render(collection);
    } else {
        const filtered = collection.filter((movie) => movie.genre === category);
        render(filtered);
    }
}

document.querySelectorAll(".sort-option").forEach(option => {
    option.addEventListener("click", () => {

        const sortType = option.dataset.sort;

        let sortedMovies = [...collection];

        if (sortType === "rating") {
            sortedMovies.sort((a, b) => b.rating - a.rating);
        }

        else if (sortType === "alphabetical") {
            sortedMovies.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        }

        else if (sortType === "random") {
            sortedMovies.sort(() => Math.random() - 0.5);
        }

        render(sortedMovies);
    });
});

document.querySelectorAll(".genre-filter").forEach((btn) => {
    btn.addEventListener("click", () => {
        filterMovies(btn.dataset.filter);
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

render(collection);
