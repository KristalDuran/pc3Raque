import React from 'react';

import Info from './info/info';

export class MoreInfo extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render(){
    return (
      <div className="MoreInfo">
        <p> Según estudios recientes la felicidad trae consigo más años de vida</p>
        <div className='MoreInfo-row'>
          <Info className='MoreInfo-data'></Info>
          <div className='MoreInfo-info MoreInfo-list'>
            <p> La felicidad es evaluada principalmente bajo los siguientes critérios:</p>
            <p>1. Salud.- Mide la atención médica y las barreras de esta, así como la calidad de los servicios de salud.</p>
            <p>2. Educación.- evalúa el aprovechamiento, calidad, escolaridad, y nivel de educación.</p>
            <p>3. Diversidad ambiental.- cuantifica el acceso a servicios ambientales, el conocimiento ambiental de la población y destaca por el indicador de árboles sembrados por persona.</p>
            <p>4. Nivel de vida.- Mide los consumos de los hogares y el número de casas propias.</p>
            <p>5. Gobernanza.- En este se evalúa la calidad de los servicios públicos, la confianza en las instituciones y los niveles de seguridad.</p>
            <p>6. Bienestar sicológico.- donde se estiman los niveles de estrés, prevalencia de emociones como celos, frustración, generosidad, y tranquilidad.</p>
            <p>7. Uso del tiempo.- que cuantifica el tiempo que dedicamos a dormir, a la participación comunitaria, a la educación, al deporte, al cuidado de los demás y a meditar.</p>
            <p>8. Vitalidad comunitaria.- estima la confianza y apoyo social entre los miembros de una comunidad, así como los niveles de seguridad.</p>
            <p>9. Cultura.- valúa el conocimiento de la cultura propia así como el respeto y conocimientos de otras culturas.</p>
          </div>
        </div>
      </div>
    );
    }
}

export default MoreInfo;