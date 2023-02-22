import styles from "./HomeContainer.module.css";

import FilledCard from "/src/components/filledCard/FilledCard";

import mosfetStructure from "/src/assets/MOSFET_Structure.png";

export default function HomeContainer() {
  return (
    <div className={styles.homeContainer}>
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
              commonly fabricated by the controlled oxidation of silicon. It has
              an insulated gate, the voltage of which determines the
              conductivity of the device.
              <br />
              <br />
              This ability to change conductivity with the amount of applied
              voltage can be used for amplifying or switching electronic
              signals. A metal-insulator-semiconductor field-effect transistor
              (MISFET) is a term almost synonymous with MOSFET. Another synonym
              is IGFET for insulated-gate field-effect transistor.
              <br />
              <br />
              The main advantage of a MOSFET is that it requires almost no input
              current to control the load current, when compared with bipolar
              transistors (bipolar junction transistors/BJTs).
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
  );
}
