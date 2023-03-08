import styles from "./HomeContainer.module.css";

import FilledCard from "/src/components/filledCard/FilledCard";
import AssistChip from "/src/components/assistChip/AssistChip";

import mosfetStructure from "/src/assets/MOSFET_Structure.png";
import operatingRegionsInfo from "/src/assets/operating_regions_info.jpg";
import watchVideosInfo from "/src/assets/watch_videos_info.jpg";
import buckConverterInfo from "/src/assets/buck_converter_info.png";

export default function HomeContainer({ setCurrentTab }) {
  function gotoLearnTab() {
    setCurrentTab("learn");
  }
  function gotoVideosTab() {
    setCurrentTab("videos");
  }
  function gotoDIYTab() {
    setCurrentTab("diy");
  }
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainCardContainer}>
        <FilledCard>
          <div className={styles.mainCard}>
            <div>
              <div className={styles.title}>MOSFET</div>
              <div className={styles.subtitle}>
                metal–oxide–semiconductor field-effect transistor
              </div>
              <br />
              <div>
                The MOSFET is a type of field-effect transistor (FET), most
                commonly fabricated by the controlled oxidation of silicon. It
                has an insulated gate, the voltage of which determines the
                conductivity of the device.
                <br />
                <br />
                This ability to change conductivity with the amount of applied
                voltage can be used for amplifying or switching electronic
                signals. A metal-insulator-semiconductor field-effect transistor
                (MISFET) is a term almost synonymous with MOSFET. Another
                synonym is IGFET for insulated-gate field-effect transistor.
                <br />
                <br />
                The main advantage of a MOSFET is that it requires almost no
                input current to control the load current, when compared with
                bipolar transistors (bipolar junction transistors/BJTs).
                <br />
                <br />
                In an enhancement mode MOSFET, voltage applied to the gate
                terminal increases the conductivity of the device. In depletion
                mode transistors, voltage applied at the gate reduces the
                conductivity.
              </div>
            </div>
            <div>
              <img
                src={mosfetStructure}
                alt="MOSFET Structure"
                width={300}
                className={styles.mosfetStructureImage}
              />
              <div className={styles.mosfetStructureImageText}>
                MOSFET showing gate (G), body (B), source (S) and drain (D)
                terminals. The gate is separated from the body by an insulating
                layer (pink).
              </div>
            </div>
          </div>
        </FilledCard>
      </div>
      <FilledCard>
        <div className={styles.infoCard}>
          <div className={styles.subtitle}>
            Learn More About MOSFET Operating Regions
          </div>
          <img
            src={operatingRegionsInfo}
            alt="operating regions graph"
            className={styles.infoImage}
          />
          <div>
            A MOSFET is said to operate in 3 regions, cutoff, triode and
            saturation,based on the condition of the inversion layer existing
            between the source and drain.
            <br />
          </div>
          <div>
            <AssistChip onClick={gotoLearnTab}>Learn</AssistChip>
          </div>
        </div>
      </FilledCard>
      <FilledCard>
        <div className={styles.infoCard}>
          <div className={styles.subtitle}>Watch Videos</div>
          <img
            src={watchVideosInfo}
            alt="mosfet as a switch"
            className={styles.infoImage}
          />
          <div>
            Learn about MOSFETs and Buck Converters - The fundamentals of Power
            Electronics. Watch informative videos and enhance your knowledge!
            Learn about MOSFETs used as switches, buck converters, and more!
          </div>
          <div>
            <AssistChip onClick={gotoVideosTab}>Watch</AssistChip>
          </div>
        </div>
      </FilledCard>
      <FilledCard>
        <div className={styles.infoCard}>
          <div className={styles.subtitle}>Make a DIY Buck converter</div>
          <img
            src={buckConverterInfo}
            alt="buck converter info"
            className={styles.infoImage}
          />
          <div>
            The MOSFET is a type of field-effect transistor (FET), most commonly
            fabricated by the controlled oxidation of silicon. It has an
            insulated gate, the voltage of which determines the conductivity of
            the device.
          </div>
          <div>
            <AssistChip onClick={gotoDIYTab}>Make</AssistChip>
          </div>
        </div>
      </FilledCard>
    </div>
  );
}
