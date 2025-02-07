import DisplayFritid from '@/components/DisplayFritid';
import DisplayProject from '@/components/DisplayProject';
import Section from '@/components/Section';

/* eslint-disable react/no-unescaped-entities */

export default function Home(){
  return(
    <>
      <Section id='hvemerjeg?' title='Hvem er jeg?'>
        <h1>Velkommen til nettsiden min. Jeg heter Elias Opstad og ble nettopp ferdig med mastergrade innen Informatikk: programmering og systemarkitektur ved Universitetet i Oslo. </h1>
      </Section>
      <Section id='prosjekter' title='Prosjekter'>
        <DisplayProject/>
      </Section>
      <Section id='ferdigheter' title='Ferdigheter'>
        <h1>Prosjekt 1: Gustav's Vinbar & Tapas </h1>
        <p>Prosjekt 2: Devpipeline.no</p>
        <p>Prosjekt 3: MexicanTrain.no</p>
        <p>Prosjekt 4: MoviePicker</p>
      </Section>
      <Section id='utdanning' title='Utdanning'>
        <p>UiO (Master)- Informatikk: programmering og systemarkitektur</p>
        <p>OsloMet (Bachelor) - Informasjonsteknologi</p>
      </Section>
      <Section id='jobberfaring' title='Jobberfaring'>
        <p>Sommerjobb hos Bekk 2023</p>
        <p>Bit Union AS - Selger 6 &apos;å&apos;r</p>
        <p>Frigg - Fotballtrener</p>
      </Section>
      <Section id='fritid' title='Fritid'>
        <DisplayFritid/>
        {/* <p>Fotballtrener, lagleder og spiller for Frigg 4</p>
        <p>Faceit lv 10 i CS2</p>
        <p>Tidligere aktiv sjakkspiller, deltatt i Oslomesterskap og Norgesmesterskap (lagsjakk og enkeltspiller)</p> */}
      </Section>    
    </>
  );
}