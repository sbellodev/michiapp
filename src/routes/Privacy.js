import styled from "styled-components";
import React from "react";

function Privacy() {
  return (
    <Container>
      <h2>AVISO LEGAL</h2>

      <h3>DATOS DE LA EMPRESA</h3>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
        Servicios de la Sociedad de la Información y Comercio Electrónico,
        Michiapp SL le informa que se encuentra inscrita en el Registro
        Mercantil de A Coruña, Tomo 2230, Folio 32, Hoja SC-22485, siendo sus
        datos identificativos los siguientes:
      </p>
      <p>
        Denominación social:
        {' '}
        <span>Michiapp SL</span>
      </p>
      <p>
        C.I.F.:
        {' '}
        <span>XXXXXXXXX</span>
      </p>
      <p>
        Teléfono:
        {' '}
        <span>XXXXXXXXX</span>
      </p>
      <p>
        Dirección:
        {' '}
        <span>XXXXXXXX</span>
      </p>
      <p>
        Correo electrónico a efectos de comunicación:
        {" "}
        <span>info@michiapp.com</span>
      </p>
      <p>
        Todas las notificaciones y comunicaciones entre los usuarios y Michiapp
        SL se considerarán eficaces, a todos los efectos, cuando se realicen a
        través de correo postal o cualquier otro medio de los detallados
        anteriormente.
      </p>

      <h3>CONDICIONES DE ACCESO Y UTILIZACIÓN</h3>
      <p>
        El presente aviso legal regula el uso del sitio web
        http://www.michiapp.com (en adelante, LA WEB), del que es titular
        Michiapp SL.
      </p>
      <p>
        La navegación por la web de Michiapp SL atribuye la condición de usuario
        del mismo e implica la aceptación plena y sin reservas de todas y cada
        una de las disposiciones incluidas en este Aviso Legal, que pueden
        sufrir modificaciones.
      </p>
      <p>
        El sitio web y sus servicios son de acceso libre y gratuito, no
        obstante, Michiapp SL condiciona la utilización de algunos de los
        servicios ofrecidos en su web a la previa cumplimentación del
        correspondiente formulario.
      </p>
      <p>
        Todos los contenidos del sitio web, como textos, fotografías, gráficos,
        imágenes, iconos, tecnología, software, así como su diseño y códigos
        fuente, constituyen una obra cuya propiedad pertenece a Michiapp SL, sin
        que puedan entenderse cedidos al usuario ninguno de los derechos de
        explotación sobre los mismos más allá de lo estrictamente necesario para
        el correcto uso de la web.
      </p>
      <p>
        El usuario garantiza la autenticidad y actualidad de todos aquellos
        datos que comunique a Michiapp SL y será el único responsable de las
        manifestaciones falsas o inexactas que realice.
      </p>
      <p>
        El usuario se obliga a hacer un uso correcto del sitio web de
        conformidad con las leyes, la buena fe, el orden público, los usos del
        tráfico y el presente Aviso Legal. El usuario responderá frente a
        Michiapp SL o frente a terceros, de cualesquiera daños y perjuicios que
        pudieran causarse como consecuencia del incumplimiento de dicha
        obligación.
      </p>

      <h3>POLÍTICA DE ENLACES Y EXENCIONES DE RESPONSABILIDADES</h3>
      <p>
        Michiapp SL no se hace responsable del contenido de las páginas web a
        las que el usuario pueda acceder a través de los enlaces establecidos en
        LA WEB y declara que en ningún caso procederá a examinar o ejercitar
        ningún tipo de control sobre el contenido de otras páginas de la red.
        Asimismo, tampoco garantizará la disponibilidad técnica, exactitud,
        veracidad, validez o legalidad de páginas ajenas a su propiedad a las
        que se pueda acceder por medio de los enlaces.
      </p>
      <p>
        Michiapp SL declara haber adoptado todas las medidas necesarias para
        evitar cualesquiera daños que, a los usuarios de LA WEB, pudieran
        derivarse de la navegación por la misma. En consecuencia, Michiapp SL no
        se hace responsable, en ningún caso, de los eventuales daños que por la
        navegación por Internet pudiera sufrir el usuario.
      </p>

      <h3>USO DE COOKIES Y DATOS ESTADÍSTICOS</h3>
      <p>
        Esta página web puede recoger datos de sus visitantes por medio del uso
        de cookies, donde se recabará información personal relacionada con su
        navegación. Para conocer de manera clara y precisa las cookies que
        utilizamos, cuáles son sus finalidades y cómo puede configurarlas o
        deshabilitarlas, consulte nuestra política de cookies, en su caso.
        {" "}
      </p>
      <p>
        El usuario tiene la posibilidad de configurar su navegador de modo que
        se le informe de la recepción de cookies, pudiendo, si así lo desea,
        impedir que sean instaladas en su disco duro.
      </p>

      <h3>PROTECCIÓN DE DATOS</h3>
      <p>
        Michiapp SL no recoge datos de carácter personal a través de esta página
        web.
      </p>
    </Container>
  );
}
const Container = styled.main`
  @keyframes appear {
    0% {
      opacity: 0;
    }
  }
  animation: 1s ease-out 0s 1 appear;
  max-width: var(--large-width);
  display: grid;
  justify-items: center;
  margin: 0 auto;
  padding: 42px 0;

  color: white;
  font-size: 18px;
  font-weight: bold;

  h2,
  h3 {
    padding-top: 24px;
    padding-bottom: 6px;
  }
  span {
    font-weight: bold;
  }
`;

export default Privacy;
