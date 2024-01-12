import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  noticias=[
    {
      titulo:"CNE amplió hasta el 14 de febrero la validez de los certificados de votación provisional de las últimas elecciones",
      descripcion:"El Consejo Nacional Electoral informó este viernes que se amplía por 30 días la validez del certificado de votación provisional correspondiente a las elecciones anticipadas del pasado mes de agosto.La validez del documento será contado a partir del domingo 14 de enero 2024 por un mes.",
      imagen:"https://www.eluniverso.com/resizer/X0GKImh0cyketrssHlvkws0IIzc=/1005x1005/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/7WJPLLFFXZDKRARJDX6ZLNKNG4.jpeg"
    },
    {
      titulo:"Una alfombra, llanta y otros objetos hallados en alcantarillas de sectores que se inundaron el jueves en Guayaquil",
      descripcion:"Álex Anchundia, director de Gestión de Riesgos del Municipio, reveló que ese día en varios puntos el nivel del agua no bajaba y que al revisar las alcantarilla personal de Interagua retiró gran cantidad de basura acumulada.Incluso una llanta.",
      imagen:"https://www.eluniverso.com/resizer/quq_ttEPoKnEFotAvK3PykZ0qaY=/1508x1005/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/7RQKKP4675EG3OUFDWC74TEYUA.JPG"
    },
    {
      titulo:"Desembarcan a pasajeros de vuelo que iba de Guayaquil a Galápagos para revisar antecedentes: seis personas fueron detenidas",
      descripcion:"Tras este control, la Policía logró detener el acceso a Galápagos de seis personas con antecedentes penales en tenencia ilegal de armas y tráfico ilícito de sustancias catalogadas sujetas a fiscalización.",
      imagen:"https://www.eluniverso.com/resizer/yBdV_rhJWnE2m1r1qZ8A9M674mo=/1280x912/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/YSUUP4E6JZEEZBEO3ZTTL2GUVM.jpg"
    },
    {
      titulo:"A puerta cerrada y con guardias privados: así atienden dependencias en Guayaquil luego de ataques violentos",
      descripcion:"Desde el martes, 9 de enero, el presidente de la República, Daniel Noboa, declaró en Ecuador el estado de conflicto armado interno y ordenó a las Fuerzas Armadas neutralizar a los grupos del crimen organizado transnacional.",
      imagen:"https://www.eluniverso.com/resizer/I1WW8UwsKF-_a1nvwXVnaHn9hms=/1506x1005/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/4YXV3PFL75HM5KFKQ7UIDL53YI.JPG"
    },
    {
      titulo:"Xavier Muñoz, vocal del Consejo de la Judicatura, desde la cárcel quiere conectarse a las sesiones del pleno",
      descripcion:"Xavier Muñoz Intriago, quien guarda prisión preventiva en la Cárcel 4 de Quito por el delito de obstrucción de la justicia, solicitó al presidente del Consejo de la Judicatura, Álvaro Román Márquez, que remita a su correo electrónico el hipervínculo para poder conectarse a las sesiones del pleno.",
      imagen:"https://www.eluniverso.com/resizer/hMMiEcEirZNTRmOqLQWBF2CaKTA=/1092x1000/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/4WTRS4D4ZZGWJI5Y65AMKYI2JM.jpg"
    }
  ]

}
