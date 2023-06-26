import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {   
            name:"Sábado 24 de Junio",
            artist: "Lección 01 – Pablo y los efesios",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/12/Portada.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-1-SABADO.mp3?_=2",
            active: false,
        },
        {
            
            name:"Domingo 25 de Junio",
            artist: "Lección 01 – Pablo y los efesios",
            cover: "https://escuelasabatica.co/wp-content/uploads/2023/06/EscuelaSabatica-3erTr-850.png",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-1-DOMINGO.mp3?_=3",
            active: false,
        },
        {
            name:"Lunes 26 de Junio",
            artist: "Lección 01 – Pablo y los efesios",
            cover: "https://escuelasabatica.co/wp-content/uploads/2023/06/EscuelaSabatica-3erTr-850.png",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-1-LUNES.mp3?_=4",
            active: false,
        },
        {
            name:"Martes 27 de Junio",
            artist: "Lección 01 – Pablo y los efesios",
            cover: "https://escuelasabatica.co/wp-content/uploads/2023/06/EscuelaSabatica-3erTr-850.png",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-1-MARTES.mp3?_=5",
            active: false,
        },
        {
            name:"Miércoles 28 de Junio",
            artist: "Lección 01 – Pablo y los efesios",
            cover: "https://escuelasabatica.co/wp-content/uploads/2023/06/EscuelaSabatica-3erTr-850.png",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-1-MIERCOLES.mp3?_=6",
            active: false,
        },
        {
            name:"Jueves 29 de Junio",
            artist: "Lección 01 – Pablo y los efesios",
            cover: "https://escuelasabatica.co/wp-content/uploads/2023/06/EscuelaSabatica-3erTr-850.png",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-1-JUEVES.mp3?_=7",
            active: false,       
        },
        {
            name:"Viernes 30 de Junio",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://escuelasabatica.co/wp-content/uploads/2023/06/EscuelaSabatica-3erTr-850.png",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/07/LECCION-1-VIERNES.mp3?_=8",
            active: false,
      
        },
    ];
}

export default chillHop;


