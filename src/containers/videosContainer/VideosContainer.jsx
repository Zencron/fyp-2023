import styles from "./VideosContainer.module.css";

import FilledCard from "/src/components/filledCard/FilledCard";

export default function VideosContainer() {
  return (
    <div>
      <FilledCard colour="primaryContainer">
        <div className={styles.mainCard}>
          <div className={styles.title}>MOSFET as a switch</div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QqFeNbRi1Ls"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            MOSFET can also function as a transistor and it is abbreviated as
            Metal Oxide Silicon Field Effect Transistor. Here, the name itself
            indicated that the device can be operated as a transistor. It will
            have P-channel and N-channel. The device is connected in such a way
            using the four source, gate, and drain terminals and a resistive
            load of 24Ω is connected in series with an ammeter, and a voltage
            meter is connected across the MOSFET.
          </div>
          <div>
            In the transistor, the current flow in the gate is in a positive
            direction and the source terminal is connected to ground. Whereas in
            bipolar junction transistor devices, the current flow is across the
            base-to-emitter path. But in this device, there is no current flow
            because there is a capacitor at the beginning of the gate, it just
            requires only voltage.
          </div>
          <div>
            This can be happened by proceeding with the simulation process and
            by switching ON/OFF. When the switch is ON there is no current flow
            across the circuit, when the resistance of 24Ω and 0.29 of ammeter
            voltage are connected, then we find the negligible voltage drop
            across the source because there is +0.21V across this device.
          </div>
          <div>
            The resistance between drain and source is termed as RDS. Due to
            this RDS, the voltage drop appears when there is current flow in the
            circuit. RDS varies based on the type of the device (it can vary in
            between 0.001, 0.005, and 0.05 based on the type of voltage.
          </div>
        </div>
      </FilledCard>
    </div>
  );
}
