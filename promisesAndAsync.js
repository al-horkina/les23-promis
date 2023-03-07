//Booking tickets
//seats, date, time, tickets
const seats = {
    '2023-02-17': {
        '09:00': 100,
        '12:00': 50,
        '15:00': 40,
    },
    '2023-02-18': {
        '09:00': 100,
        '12:00': 30,
        '15:00': 25,
    },
    '2023-02-19': {
        '09:00': 100,
        '12:00': 15,
        '15:00': 10,
    },
};

const freePlace = {
    'blueHall': {
        numPlace: [1, 5, 7],
        typeFilm: '2d',
        food: true,
    },
    'redHall': {
        numPlace: [4, 8, 9],
        typeFilm: '3d',
        food: false,
    },
};

function checkTicketsAvailable(date, time, numTicket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const seatsAvailable = seats[date][time];
            if (seatsAvailable >= numTicket) {
                resolve(seatsAvailable);
            } else {
                reject(`Вільних місць на ${date} в ${time} немає`);
            }
        }, 1000);
    })
}


async function bookTickets(date, time, numTickets) {
    try {
        const availableSeats = await checkTicketsAvailable(date, time, numTickets);
        console.log(`${date} ви забронювали ${numTickets} квитків на таку годину: ${time}`);
    } catch (error) {
        console.error(error);
    }
}

bookTickets('2023-02-17', '15:00', 1);


function checkSeat(typeHall, num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numAvailable = freePlace[typeHall];
            if (numAvailable.numPlace.includes(num)) {
                resolve(numAvailable);
            } else {
                reject(`Місце ${num} у залі ${typeHall} зайняте`);
            }
        }, 1000);
    })
}


async function chooseSeat(typeHall, num) {
    try {
        const availableSeats = await checkSeat(typeHall, num);
        const glasses = freePlace[typeHall].typeFilm;
        const food = freePlace[typeHall].food === true ? 'дозволено' : 'заборонено';
        console.log(`Номер квитка: ${num}, зала: ${typeHall}, окуляри: ${glasses}, їжа: ${food} `);
    } catch (error) {
        console.error(error);
    }
}

chooseSeat('redHall', 4);






























