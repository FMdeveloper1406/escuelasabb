import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {   
            name:"Sábado 08 de Julio",
            artist: "Lección 03 – El poder del Jesús exaltado",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/06/efesios.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-3-SABADO.mp3?_=2",
            active: false,
        },
        {
            
            name:"Domingo 09 de Julio",
            artist: "Lección 03 – El poder del Jesús exaltado",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/06/efesios.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-3-DOMINGO.mp3?_=3",
            active: false,
        },
        {
            name:"Lunes 10 de Julio",
            artist: "Lección 03 – El poder del Jesús exaltado",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/06/efesios.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-3-LUNES.mp3?_=4",
            active: false,
        },
        {
            name:"Martes 11 de Julio",
            artist: "Lección 03 – El poder del Jesús exaltado",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/06/efesios.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-3-MARTES.mp3?_=5",
            active: false,
        },
        {
            name:"Miércoles 12 de Julio",
            artist: "Lección 03 – El poder del Jesús exaltado",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/06/efesios.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-3-MIERCOLES.mp3?_=6",
            active: false,
        },
        {
            name:"Jueves 13 de Julio",
            artist: "Lección 03 – El poder del Jesús exaltado",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/06/efesios.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-3-JUEVES.mp3?_=7",
            active: false,       
        },
        {
            name:"Viernes 14 de Julio",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/06/efesios.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-3-VIERNES.mp3?_=8",
            active: false,
      
        },
    ];
}

export default chillHop;


