import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Comentarios del Pastor Bullón",
            artist: "Lección 03 – El evangelio eterno",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/12/Portada.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://ia601601.us.archive.org/31/items/y-2mate.com-pr-bullon-leccion-3-el-evangelio-eterno/y2mate.com%20-%20Pr%20Bullon%20%20Lecci%C3%B3n%203%20El%20Evangelio%20Eterno.mp3",
            active: true,       
         },
        {   
            name:"Sábado 08 de Abril",
            artist: "Lección 03 – El evangelio eterno",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/12/Portada.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/04/LECCION-3-SABADO.mp3?_=1",
            active: false,
        },
        {
            
            name:"Domingo 09 de Abril",
            artist: "Lección 03 – El evangelio eterno",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/12/Portada.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/04/LECCION-3-DOMINGO.mp3?_=1",
            active: false,
        },
        {
            name:"Lunes 10 de Abril",
            artist: "Lección 02 – Un momento del destino",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/12/Portada.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/04/LECCION-3-LUNES.mp3?_=1",
            active: false,
        },
        {
            name:"Martes 11 de Abril",
            artist: "Lección 03 – El evangelio eterno",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/12/Portada.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/04/LECCION-3-MARTES.mp3?_=1",
            active: false,
        },
        {
            name:"Miércoles 12 de Abril",
            artist: "Lección 03 – El evangelio eterno",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/12/Portada.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "httpshttps://www.audioescuelasabatica.com/wp-content/uploads/2023/04/LECCION-2-MIERCOLES.mp3?_=1",
            active: false,
        },
        {
            name:"Jueves 13 de Abril",
            artist: "Lección 03 – El evangelio eterno",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/12/Portada.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/04/LECCION-3-JUEVES.mp3?_=6",
            active: false,       
        },
        {
            name:"Viernes 14 de Abril",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/12/Portada.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2023/04/LECCION-3-VIERNES.mp3?_=6",
            active: false,
      
        },
    ];
}

export default chillHop;


