import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    // Ver dónde poner esto...
    // <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    title: 'Enfocado en los conceptos',
    Svg: require('../../static/img/mind-map.svg').default,
    description: (
      <>
        Aunque usamos Kotlin y TypeScript como tecnologías principales, los utilizamos solamente como medio para explicar lo conceptual. Lo que aprendas acá podrás extrapolarlo a cualquier lenguaje orientado a objetos.
      </>
    ),
  },
  {
    // Ver dónde poner esto...
    // <div>Icons made by <a href="https://www.flaticon.com/authors/creaticca-creative-agency" title="Creaticca Creative Agency">Creaticca Creative Agency</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    title: 'En nuestro idioma',
    Svg: require('../../static/img/sudamerica.svg').default,
    description: (
      <>
        Encontrar material de calidad en español es difícil, y más aún es encontrar algo producido en nuestro continente. Sin pretender excluir a nadie, nos esforzamos por que los ejemplos y ejercicios traten de temas cotidianos para habitantes de Latinoamérica. 
      </>
    ),
  },
  {
    title: 'Contenido libre',
    Svg: require('../../static/img/cc.svg').default,
    description: (
      <>
        Todo el contenido de este sitio se publica bajo una licencia <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.es">CC BY-SA 4.0</a>, lo cual implica que podés compartirlo con quien quieras y adaptarlo para usar en otro lado (respetando los términos de la licencia).
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
